const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
require('./db');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`mockup server running on port ${port}`));