import express from "express";
import cors from "cors";

import NamesRoutes from './routes/NamesRoutes';

const PORT = process.env.PORT || 5000;
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";

const app = express();

app.use(cors({
  origin: [`http://${HOSTNAME}:${PORT}`]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/index", (req, res) => {
    res.status(200);
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Full Cycle Rocks !</title>
    </head>
    <body>
        <ol>

        </ol>
    </body>
    </html>
    `);
});

app.use("/api", NamesRoutes);

app.use((req, res) => {
    res.status(404);
    res.send('Not found');
});

app.listen(PORT, () => {
    console.log(`Server running ${HOSTNAME}:${PORT}`)
});