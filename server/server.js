const path = require('require');

const express = require('express');
const port = process.env.PORT || 4000;

const publicPath =path.join(__dirname,'../public');
var app = express();

app.use(express.static(publicPath));

app.listen(port,()=>{
      console.log(`Server is up on ${port}`);
})
