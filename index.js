const express = require("express");
const mqtt = require("mqtt");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());

let sensorData = {
  temperatura: null,
  humedad: null,
  distancia: null,
};

// Conectar al broker MQTT
const client = mqtt.connect("mqtt://192.168.29.238:1883");

// Suscribirse al tema donde la ESP32 publica los datos
client.on("connect", () => {
  console.log("Conectado al broker MQTT");
  client.subscribe("sensores", (err) => {
    if (!err) {
      console.log("Suscrito al tema sensores");
    } else {
      console.error("Error al suscribirse:", err);
    }
  });
});

// Recibir los datos MQTT y actualizarlos en la variable global
client.on("message", (topic, message) => {
  if (topic === "sensores") {
    try {
      const data = JSON.parse(message.toString());
      sensorData.temperatura = data.temperatura;
      sensorData.humedad = data.humedad;
      sensorData.distancia = data.distancia;
      console.log("Datos recibidos:", sensorData);
    } catch (error) {
      console.error("Error al procesar los datos:", error);
    }
  }
});

app.get("/sensores", (req, res) => {
  res.json(sensorData);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
