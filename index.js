// Importa Express
const express = require("express");
const app = express();

// Define un puerto
const PORT = 3001;

// Ruta básica
app.get("/", (req, res) => {
  res.send("¡Hola, Express!");
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendos en http://localhost:${PORT}`);
});
