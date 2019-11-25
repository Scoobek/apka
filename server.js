const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = express.Router()

app.use(express.json())

const courses = [
  { id: 1, name: "Algorithms" },
  { id: 2, name: "Software Engineering" },
  { id: 3, name: "Human Computer Interaction" }
]

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/dupa', (req, res) => {
  const course = {
    id: courses.length + 1,
    name: 'Wojtek mistrz'
  };
  //add the course to the array
  courses.push(course);
  //return the course
  res.send(course);
})

app.post('/kaka', (req, res) => res.send('jetses kaka'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))