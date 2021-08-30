const express =require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const db = require('./queries')
const port = 3003



app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
  res.json({ response: 'response'})
})

app.get('/products', db.getUsers)
app.get('/products/:id', db.getUserById)
app.post('/products', db.createUser)
app.put('/products/:id', db.updateUser)
app.delete('/products/:id', db.deleteUser)

app.listen(port, ()=> {
  console.log('listening...');
});
