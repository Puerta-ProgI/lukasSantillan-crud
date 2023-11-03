const express = require('express');
const app = express();

const port = 3031;
app.listen(port,()=>console.log("Servidor iniciado en el puerto "+port));

const mainRouter = require('./routes/main-router');
app.use(mainRouter);