const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get("/usuario", (request, response) => {
    const usuario = {nombre: "Raydelto", apellido: "Hernandez"};
    response.json(usuario);
} );

app.post("/agregarUsuario", (request, response) =>{
    const usuario = request.body;
    usuario.nombre = `${usuario.nombre} modificado`;
    usuario.telefono = "555-983-3456";
    response.json(usuario);
});
const puerto = 8080;
console.log(`Estoy escuchando conexiones en el puerto ${puerto}`);
app.listen(puerto);