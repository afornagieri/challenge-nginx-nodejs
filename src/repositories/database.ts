import mysql from "mysql2";

class DBClient {
  protected credentials = {};

  constructor() {
    this.credentials = {
      host: process.env.DBHOST,
      user: process.env.DBUSER,
      password: process.env.DBPASSWORD,
      database: process.env.DATABASE,
      port: process.env.DBPORT
    };
  }

  public async connect() {
    const client = mysql.createPool(this.credentials);
    return client.promise();
  }
}

export default DBClient;