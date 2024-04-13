const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

// Middlewares
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/notificationSystem', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Modelos
const NotificationLog = mongoose.model('NotificationLog', new mongoose.Schema({
  category: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
}));

// Rutas
app.post('/notifications', async (req, res) => {
  const { category, message } = req.body;
  const log = new NotificationLog({ category, message });
  await log.save();
  res.status(201).send(log);
});

app.get('/notifications', async (req, res) => {
  const logs = await NotificationLog.find().sort({ timestamp: -1 });
  res.status(200).send(logs);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
