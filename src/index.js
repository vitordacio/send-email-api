require('dotenv').config()
const cors = require('cors')
const express = require('express')
const { guide, presentation } = require('./controllers/sendmail')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', guide)
app.post('/', presentation)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server running on port ${port}`))