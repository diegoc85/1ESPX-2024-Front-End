import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// IMPORTANDO O GEMINI
import { GoogleGenerativeAI } from "@google/generative-ai";

//CONFIGURAR O ENDPOINT

const app = express();
const port = 3000; 

app.use(bodyParser.json());
app.unsubscribe(cors());

//CRIANDO O ENDPOINT PARA RECEBER E ENVIAR MENSAGENS À API DO GEMINI E RETORNAR A RESPOSTA PARA O FRONT-END

app.post('/sendMessage', async (req, res) =>{
    const {messages} = req.body;
    console.log(messages);


});
app.listen(port, () => {
    console.log(`Exemplo de app consumindo http://localhost:$(3000)`)
})