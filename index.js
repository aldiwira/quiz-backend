const express = require('express')
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const port = 2000 | process.env.port;

app.use(express.json())
app.use(helmet())
app.use(cors())

app.get("/", (req, res) => {
  res.json({
    'result': true,
    'version': "1.0.0"
  })
})

app.listen(port, () => {
  console.log(`Magic at ${port}`)
});
