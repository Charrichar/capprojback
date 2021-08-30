const Pool = require('pg').Pool
const pool = new Pool({
  user: 'oduainemiller',
  host: 'localhost',
  database: 'ecom',
  password: 'password',
  port: 3003,
})

const getUsers = (req, res) => {
  pool.query('SELECT * FROM products ORDER BY id ASC', (error, results) => {
    if (error) {
      console.log('ERROR HERE', error)
    }
    res.status(200).json(results)
  })
}

const getUserById = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query('SELECT * FROM products WHERE id = $1', [id], (error, results) => {
    if (error) {
      console.log(error);
    }
    res.status(200).json(results.rows)
  })
}

const createUser = (req, res) => {
  const { image, price, name, description } = req.body

  pool.query('INSERT INTO products (image, price, name, description) VALUES ($1, $2, $3, $4)', [image, price, name, description], (error, results) => {
    if (error) {
      console.log(error)
    }
    res.status(201).send(`Product added with ID: ${results.insertId}`)
  })
}

const updateUser = (req, res) => {
  const id = parseInt(req.params.id)
  const { image, price, name, description } = req.body

  pool.query(
    'UPDATE products SET image = $1, price = $2, name = $3, description = $4, WHERE id = $5', [image, price, name, description], (error, results) => {
      if (error) {
        console.log(error)
      }
      res.status(200).send(`Product modified with ID: ${id}`)
    }
  )
}

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query('DELETE FROM products WHERE id = $1', [id], (error, results) => {
    if (error) {
      console.log(error)
    }
    res.status(200).send(`Product deleted with ID: ${id}`)
  })
}


module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
