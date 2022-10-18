import {createPool} from 'mysql2/promise';

export const pool = createPool({
    host: 'localHost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'companydb'

});