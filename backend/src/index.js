const express = require('express');
const { json } = require('express/lib/response')
const cors = require('cors')
const routes = require('./routes')

const app = express();

app.use(cors({
  origin: "http://localhost:3000"
}))

app.use(express.json())

app.use(routes)



app.listen(3333)

