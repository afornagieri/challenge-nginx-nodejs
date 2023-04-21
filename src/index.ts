import express from "express";
import cors from "cors";
import NamesRoutes from './routes/NamesRoutes';

const HOSTNAME = process.env.HOSTNAME;
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/index", async (req, res) => {
    res.sendFile(process.cwd() + '/public/index.html');
});

app.use("/api", NamesRoutes);

app.use((req, res) => {
    res.status(404);
    res.send('Not found');
});

app.listen(PORT, () => {
    console.log(`Server running ${HOSTNAME}:${PORT}`)
});