let express = require('express')

let app = express()

const PORT = 3000

app.get('/', (req, res) => {
  res.json({ 'status': 200, 'message': 'success' })
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
