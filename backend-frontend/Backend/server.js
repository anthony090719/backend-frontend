const express = require('express');
const app = express();

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola desde el backend!');
});

// Puerto en el que se ejecutará el servidor
const port = 3000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
