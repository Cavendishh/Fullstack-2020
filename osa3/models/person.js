const mongoose = require('mongoose')
require('dotenv').config()

const url = process.env.MONGODB_URI

console.log(`Connecting to: "${url}"`)
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(result => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => [
    console.log('Error connecting to MongoDB: ', error.message)
  ])

const personSchema = new mongoose.Schema({
  id: Number,
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject._id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)