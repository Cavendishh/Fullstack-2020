const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

morgan.token('object', function (req, res) {
  if (req.method === "POST") {
    return JSON.stringify(req.body)
  } else {
    return null;
  }
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :object'))

let persons = [
    {
      id: 1,
      name: "Arto Hellas",
      number: "040-1231244"
    },
    {
      id: 2,
      name: "Ada Lovelace",
      number: "39-44-5323523"
    },
    {
      id: 3,
      name: "Dan Abramov",
      number: "12-43-234345"
    },
    {
      id: 4,
      name: "Mary Poppendieck",
      number: "39-23-6423122"
    },
    {
      id: 5,
      name: "test",
      number: "111"
    }
  ]

app.get('/', (req, res) => {
  res.send('<h1>Server is working properly</h1>')
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/info', (req, res) => {
  res.send(`<p>Phonebook has info for ${persons.length} people.<br><br>${new Date()}</p>`)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)

  res.status(204).end()
})

app.post('/api/persons', (req, res) => {
  const body = req.body

  if (!(body.name | body.number)) {
    return res.status(400).json({
      error: `Person's name or number is missing`
    })
  } else if (persons.find(person => person.name === body.name)) {
    return res.status(400).json({
      error: 'Name must be unique'
    })
  }

  const person = {
    id: (Math.round(Math.random() * 9999 + 1)),
    name: body.name,
    number: body.number
  }

  persons = persons.concat(person)

  res.json(person)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})