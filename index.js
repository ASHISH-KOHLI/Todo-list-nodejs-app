const express = require('express');

const app = express();
const port = 8000;
const db = require('./config/mongoose');
app.use(express.urlencoded());

app.use('/', require('./routes'));

const expressLayout = require('express-ejs-layouts');

app.use(expressLayout);
app.use(express.static( './assets'));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.set('view engine','ejs');
app.set('views','./views');




app.listen(port, (err) => {
 if(err){
  console.log(`Error in runnong the ${port}`);
  return;
 }
 console.log(`Server is up and running at ${port}`)
})