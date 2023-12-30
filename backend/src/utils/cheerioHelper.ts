import * as cheerio from 'cheerio';
import {MemoryDataSource} from '../datasources';
import {Sitio, Snapshot, Tarea} from '../models';
import {SnapshotRepository} from '../repositories';

const snapshotRepository = new SnapshotRepository(new MemoryDataSource())

const fetch = require('node-fetch');
const isUrlHttp = require('is-url-http')

const verificarAtributos = (sitio: Sitio) => {
  if (!sitio.url) {
    throw new Error('URL not found')
  }

  if (!sitio.docExtractor) {
    throw new Error('Document Extractor is not defined')
  }

  if (!sitio.userEmail) {
    throw new Error('User email not found')
  }

  if (!isUrlHttp(sitio.url)) {
    throw new Error('URL is not a valid HTTP URL')
  }
}

export async function processWebsite(sitio: Sitio, tarea: Tarea, urlsHttp: Set<String>, baseUrl: string, niveles: number = 1) {
  try {
    // Se verifica que todos los atributos necesarios esten seteados y que estos sean validos
    verificarAtributos(sitio);

    // Obtener el documento y dejarlo disponible para manipular los elementos (HTML completo y navegable)
    const response = await fetch(sitio.url);
    const body = await response.text();

    // Instancia cheerio
    const $ = cheerio.load(body);
    const fn = eval(sitio.docExtractor);

    // La funcion << definida en el frontend (cheerio) => {}) >> espera otra funcion para utilizarlos y construir el elemento
    const result = fn($);

    const nuevoSnapshot = await crearNuevoSnapshot(tarea.getId());
    nuevoSnapshot.documentos = result;
    await guardarSnapshot(nuevoSnapshot);

    if (niveles < sitio.niveles) {
      // Obtenemos todos los enlaces en la pagina
      const links = $('a');

      links.each(async (_, link) => {
        const procesarLinks = async () => {
          const href = $(link).attr('href');
          if (href && isUrlHttp(href)) {

            // Resolver la URL relativa a la URL base del sitio
            const resolvedUrl = new URL(href, sitio.url).toString();

            // Verificamos que el enlace resuelto esté dentro de la URL base del sitio
            if (resolvedUrl.startsWith(baseUrl) && !urlsHttp.has(resolvedUrl)) {
              urlsHttp.add(resolvedUrl);

              // Hacemos una recursion
              // Creamos un nuevo objeto sitio y agregamos la propiedad url
              // Esto sirve para garantizar que el objeto sitio (original) no se modifique
              await processWebsite({...sitio, url: resolvedUrl} as Sitio & {url: string},
                tarea, urlsHttp, baseUrl, niveles + 1);
            }
          }
        };
        procesarLinks().then(() => { }).catch((error) => console.error(error));

      })
    }
  }
  catch (error) {
    console.log(error);
  }
}

const crearNuevoSnapshot = async (tareaId: string) => {
  const nuevoSnapshot = new Snapshot({
    nombre: `Snapshot-${tareaId}-${new Date().toISOString()}`,
    estado: 'En proceso',
    timestamp: new Date().toString(),
    documentos: [],
    tareaId: tareaId
  })
  return nuevoSnapshot;
}

const guardarSnapshot = async (snapshot: Snapshot): Promise<void> => {
  await snapshotRepository.create(snapshot);
};
