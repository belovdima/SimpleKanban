import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Для парсинга JSON запросов

app.get("/", (req, res) => {
    res.send("Kanban Board API");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
