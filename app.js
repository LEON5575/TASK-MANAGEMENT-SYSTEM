const express = require('express');
const connectDB = require('./config/db'); // DB connection
const routes = require('./routes');       // imports index.js from routes folder

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api', routes);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to DB', err);
  });
