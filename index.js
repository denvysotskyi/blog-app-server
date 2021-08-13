const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./routes/router.js')

const PORT = process.env.PORT || config.get('port') || 4444

const app = express()

app.use(cors())

app.use(express.json({extended: true}))

app.use('/api/1.0/', router)

const startApp = (async () => {
  try {
    await mongoose.connect(config.get('mongoUri'),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
      })
    app.listen(PORT, () => console.log(`Server run on port ${PORT}`))
  } catch (e) {
    console.log(e.message)
    process.exit(1)
  }
})()