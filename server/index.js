const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.listen(5001, () => {
    console.log('Server is listening on port 5001.')
})