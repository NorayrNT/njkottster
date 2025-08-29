import { KnexMysql2Adapter } from '@kottster/server';
import knex from 'knex';

/** 
   * Replace the following with your connection options. 
 * Learn more at https://knexjs.org/guide/#configuration-options
 */
const client = knex({
  client: 'mysql2',
  connection: {
    host: '109.172.36.17',
    port: 3306,
    user: 'njroot',
    password: 'Rootadminprivremote*888',
    database: 'njdb',
  },
});

export default new KnexMysql2Adapter(client);