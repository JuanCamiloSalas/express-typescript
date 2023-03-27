import express from 'express';
import diaryRouter from './routes/diaries';

const app = express();

app.use(express.json()); // middleware que transforma la req.body a un json

const PORT = 3000;

app.get('/ping', (_req, res) => {
    console.log("Someone ping here!");
    res.send("Pong")
});

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    
});