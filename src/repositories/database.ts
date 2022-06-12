import { Pool } from "pg";
import "dotenv/config";

class DBClient {
  protected credentials = {};

  constructor() {
    this.credentials = {
      user: process.env.DBUSER,
      host: process.env.DBHOST,
      database: process.env.DATABASE,
      password: process.env.DBPASSWORD,
      dbport: process.env.DBPORT
    };
  }

  public clientdb(): Pool {
    const client = new Pool(this.credentials);
    return client;
  }
}

export default DBClient;