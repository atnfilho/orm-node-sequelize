import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/teste', (req, res) => {
    res.status(200).send({
        mensage: 'Boas vindas à API.'
    })
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

export default app;