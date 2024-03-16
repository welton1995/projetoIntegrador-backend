require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connection = require('./database/connection');
const routes = require('./routes/routes');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
connection();

app.listen(PORT, ()=> {
  console.log(`Servidor rondado...`);
});