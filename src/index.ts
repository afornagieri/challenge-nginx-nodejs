import express from "express";
import cors from "cors";

import NamesRoutes from './routes/NamesRoutes';

const PORT = process.env.PORT || 8080;
const HOSTNAME = process.env.HOSTNAME || "http://localhost";

const app = express();

app.use(cors({
  origin: ["http://localhost:8080"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// servir html
app.get("/index", (req, res) => {
    res.send("Bem-vindo!")
});

app.use("/api", NamesRoutes);

app.use((req, res) => {
    res.status(404)
});

app.listen(PORT, () => {
    console.log(`Server running ${HOSTNAME}:${PORT}`)
});