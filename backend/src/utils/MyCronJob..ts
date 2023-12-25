/* eslint-disable @typescript-eslint/no-misused-promises */
import {CronJob, cronJob} from '@loopback/cron';
import {repository} from '@loopback/repository';
import {Sitio} from '../models';
import {SitioRepository} from '../repositories';
import {processWebsite} from './cheerioHelper';

@cronJob()
export class MyCronJob extends CronJob {
  constructor(@repository(SitioRepository) public sitioRepository: SitioRepository,) {
    super({
      name: 'job-B',
      onTick: async () => {
        const sitios: Sitio[] = await sitioRepository.find();
        console.log(sitios);

        sitios.forEach(async sitio => {
          // const cronTime = `*/${sitio.frecuencia} * * * * *`;
          console.log(sitio);
          const result = await processWebsite(sitio);
          console.log("Datos extraidos desde la pagina: ", result);
        })
      },
      cronTime: '*/10 * * * * *',
      start: true,
    });
  }
}
