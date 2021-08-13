const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const cors = require('cors')

const PORT = process.env.PORT || config.get('port') || 4444

const app = express()

app.use(cors())
app.use(express.json({extended: true}))

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