import express from "express";

import DBClient from "../repositories/database";

import Name from "../models/Name";

const NamesRoutes = express.Router();

NamesRoutes.get("/names", async (req, res) => {
    let data: any;
    
    let db: DBClient = new DBClient();
    let client = await db.connect();

    try {
        data = await client.query("SELECT * FROM peoples;");

        const [rows, fields] = data;
        res.status(200).send(rows);
    } catch (error) {
        console.log(error);
    }

});

NamesRoutes.post("/name", async (req, res) => {
    const name : Name = req.body;
    
    let db: DBClient = new DBClient();
    let client = await db.connect();

    try {
        await client.query(`INSERT INTO peoples (name) VALUES ('${name.name}');`);
        res.status(201).location("/names").send();
    } catch (error) {
        console.log(error);
    }

});

export default NamesRoutes