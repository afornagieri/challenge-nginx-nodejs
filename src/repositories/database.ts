import { Pool } from "pg";
import "dotenv/config";

class DBClient {
  protected credentials = {};

  constructor() {
    this.credentials = {
      user: process.env.USERDB,
      host: process.env.HOST,
      database: process.env.DATABASE,
      password: process.env.PASSWORD,
      dbport: process.env.DBPORT
    };
  }

  public clientdb(): Pool {
    const client = new Pool(this.credentials);
    return client;
  }
}

export default DBClient;