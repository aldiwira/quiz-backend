const express = require('express')
const app = express();
const port = 2000|process.env.port;

app.get("/", (req, res)=> {
  res.json({
    'result': true,
    'version' : "1.0.0"
  })
})

app.listen(port, () => {
  console.log(`Magic at ${port}`)
});