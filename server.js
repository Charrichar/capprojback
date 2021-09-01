const express =require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const port = 3003
const postgres = require('./postgres.js')

//middleware
app.use(express.json());
app.use(express.static('public'))




//controller

const productController = require('./controllers/products.js')
app.use('/products', productController)

///create///
postgres.connect()

app.listen(port, ()=> {
  console.log('listening...');
});
