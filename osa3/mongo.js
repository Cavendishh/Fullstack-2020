const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://Cavendishh:${password}@cluster0.3hyk9.mongodb.net/person-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  id: Number,
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

Person.find({}).then(result => {
    result.forEach(person => {
        console.log(person)
    })
    mongoose.connection.close()
})

/*const person = new Person({
  id: (Math.round(Math.random() * 9999 + 1)),
  name: 'Mongo Test',
  number: '404',
})

person.save().then(response => {
  console.log('Person saved!')
  mongoose.connection.close()
})*/