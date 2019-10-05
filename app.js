const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes.js');

mongoose.connect("mongodb://localhost:27017/encurtador", { useNewUrlParser: true, useUnifiedTopology: true });

app.set('views', __dirname+'/views');
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use("/static", express.static('static'));

app.get('/', routes.index);

app.post('/', routes.create);

app.get('/:code', routes.get);

app.listen(3000, ()=>{
    console.log('Rodando');
});