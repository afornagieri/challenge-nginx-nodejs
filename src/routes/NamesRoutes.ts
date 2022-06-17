import express from "express";
import { QueryResult } from "pg";
import Name from "../models/Name";
import DBClient from "../repositories/database";

const NamesRoutes = express.Router();

NamesRoutes.get("/names", async (req, res) => {
    let db: DBClient = new DBClient();
    let data: QueryResult<any>;

    await db.clientdb().connect();
    data = await db.clientdb().query("SELECT * FROM names;");

    res.status(200).send(data.rows);
});

NamesRoutes.post("/name", async (req, res) => {
    const name : Name = req.body;
    let db: DBClient = new DBClient();

    await db.clientdb().connect();
    await db.clientdb().query(`INSERT INTO names (name) VALUES ('${name.name}');`);

    res.status(201).location("/names").send();
});

export default NamesRoutes