const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./routes/posts.router.js')

const PORT = process.env.PORT || config.get('port') || 4444

const app = express()

app.use(cors())

app.use(express.json({ extended: true }))

app.use('/api/1.0/', router)

const appStart = (async () => {
  try {
    await mongoose.connect(config.get('mongoUri'),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    await app.listen(PORT, () => console.log(`Server is started on port ${PORT}`))
  } catch (e) {
    console.log(e.message)
    process.exit(1)
  }
})()