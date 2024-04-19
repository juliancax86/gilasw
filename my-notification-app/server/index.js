const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Manejo de ntipo de notificaciones implementando el patron FACTORy y mock Users.
const NotificationFactory = require('./NotificationFactory');
const mockUsers = require('./mockUsers');

//BUENA PRACTICA:  Middleware para habilitar CORS
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'], 
}));

// Middleware para parsear JSON
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/notifications', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB:', err));

//esquema de Mongoose
const NotificationLogSchema = new mongoose.Schema({
  category: { type: String, required: true }, // BUENA PRACTICA: usar campos requerios
  message: { type: String, required: true },  // BUENA PRACTICA: usar campos requerios
  timestamp: { type: Date, default: Date.now }
});

//modelo Mongoose
const NotificationLog = mongoose.model('NotificationLog', NotificationLogSchema);

//POST Notifiaciones + tipo (simulado) + mock user
app.post('/send-notification', async (req, res) => {
  const { category, message } = req.body;
  // Generando instancia del Factory
  const factory = new NotificationFactory();

  try {
       mockUsers.filter(user => user.subscribedCategories.includes(category))
            .forEach(user => {
                user.channels.forEach(channel => {
                    const notification = factory.createNotification(channel, user, message);
                    notification.send();
                });
            });
      // BUENA PRACTICA: manejo de errores y mensajes claros para el usuario.
      res.status(200).send({ message: "Notifications sent successfully." });
  } catch (error) {
      console.error('Error sending notifications:', error);
      res.status(500).send({ message: error.message });
  }
});

//GET Notificaciones
app.get('/notifications', async (req, res) => {
  try {
    const logs = await NotificationLog.find().sort({ timestamp: -1 });
    res.status(200).send(logs); // Envía los logs como respuesta
  } catch (error) {
    res.status(500).send({ message: error.message }); // Envía el mensaje de error en un objeto para mantener la consistencia
  }
});

// Inicia el servidor y escucha en el puerto especificado
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
