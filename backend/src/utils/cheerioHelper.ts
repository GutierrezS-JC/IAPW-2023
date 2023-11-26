import * as cheerio from 'cheerio';
import { Sitio } from '../models';

const fetch = require('node-fetch');

export async function processWebsite(sitio: Sitio) {
  if (!sitio.url) {
    throw new Error('URL not found')
  }

  if (!sitio.docExtractor) {
    throw new Error('Document Extractor not defined')
  }

  if (!sitio.userEmail) {
    throw new Error('User email not found')
  }

  // Obtener el documento y dejarlo disponible para manipular los elementos (HTML completo y navegable)
  const response = await fetch(sitio.url);
  const body = await response.text();

  // Instancia cheerio
  const $ = cheerio.load(body);

  const fn = eval(sitio.docExtractor);

  // La funcion << definida en el frontend (cheerio) => {}) >> espera otra funcion para utilizarloa y construir el elemento
  return fn($);
}