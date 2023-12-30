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

export async function processWebsite(sitio: Sitio, tarea: Tarea, urlsHttp: Set<String>,
  baseUrl: string, niveles: number = 1,
  resultadosPorNivel: {[key: string]: {nivel: number, resultados: {[key: string]: object}[]}} = {}) {
  try {
    // Se verifica que todos los atributos necesarios esten seteados y que estos sean validos
    verificarAtributos(sitio);

    // Obtener el documento y dejarlo disponible para manipular los elementos (HTML completo y navegable)
    const response = await fetch(sitio.url);
    if (response) {
      const body = await response.text();
      // Instancia cheerio
      const $ = cheerio.load(body);
      const fn = eval(sitio.docExtractor);

      // La funcion << definida en el frontend (cheerio) => {}) >> espera otra funcion para utilizarlos y construir el elemento
      const result = fn($);

      // Acumulamos los resultados para este nivel
      const nivelKey = `Nivel ${niveles}`;
      if (!resultadosPorNivel[nivelKey]) {
        resultadosPorNivel[nivelKey] = {
          nivel: niveles,
          resultados: [],
        };
      }

      // Agregar el resultado al array correspondiente al nivel actual
      resultadosPorNivel[nivelKey].resultados.push(result);

      if (niveles < sitio.niveles) {
        // Obtenemos todos los enlaces en la pagina
        const links = $('a');
        const linkPromises: Promise<void>[] = [];

        links.each((index, link) => {
          // const procesarLinks = async () => {
          const href = $(link).attr('href');

          if (href) {
            // Resolver la URL relativa a la URL base del sitio
            const resolvedUrl = new URL(href, sitio.url).toString();

            // Verificamos que el enlace resuelto esté dentro de la URL base del sitio
            if (resolvedUrl.startsWith(baseUrl) && !urlsHttp.has(resolvedUrl) && isUrlHttp(resolvedUrl)) {
              urlsHttp.add(resolvedUrl);

              // Hacemos una recursion
              // Creamos un nuevo objeto sitio y agregamos la propiedad url
              // Esto sirve para garantizar que el objeto sitio (original) no se modifique
              linkPromises.push(processWebsite({...sitio, url: resolvedUrl} as Sitio & {url: string},
                tarea, urlsHttp, baseUrl, niveles + 1, resultadosPorNivel));
            }
          }
        });
        await Promise.all(linkPromises);
        resultadosPorNivel = {}
      }
    }
  }
  catch (error) {
    console.log(error);
  }
}

const crearNuevoSnapshot = async (tareaId: string, documentos: Nivel[] = []) => {
  const nuevoSnapshot = new Snapshot({
    nombre: `Snapshot-${tareaId}-${new Date().toISOString()}`,
    estado: 'Finalizado',
    timestamp: new Date().toString(),
    documentos: documentos,
    tareaId: tareaId
  })
  return nuevoSnapshot;
}

const guardarSnapshot = async (snapshot: Snapshot): Promise<void> => {
  await snapshotRepository.create(snapshot);
};

export async function runProcess(sitio: Sitio, tarea: Tarea, urlsHttp: Set<String>,
  baseUrl: string) {

  const resultadosPorNivel: {[key: string]: {nivel: number, resultados: {[key: string]: object}[]}} = {};

  // Inicia el proceso con el sitio inicial
  await processWebsite(sitio, tarea, urlsHttp, baseUrl, 1, resultadosPorNivel);

  // Crea el Snapshot al finalizar todas las llamadas recursivas
  const documentos: Nivel[] = Object.values(resultadosPorNivel).map(entry => entry);
  const nuevoSnapshot = await crearNuevoSnapshot(tarea.getId(), documentos);
  await guardarSnapshot(nuevoSnapshot);
}
