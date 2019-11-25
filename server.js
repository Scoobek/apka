const express = require('express')
const app = express()
const port = process.env.PORT  || 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/dupa', (req, res) => res.send('jesteś w dupie'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))