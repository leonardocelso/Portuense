const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionSucessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions));
app.use(routes);

app.listen(3333);