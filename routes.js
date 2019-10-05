const mongoose = require('mongoose');
const makeid = require('./Utils/makeid')
require('./models/Shorten');

const Shorten = mongoose.model('Shorten')

exports.index = (req,res)=>{
    res.render('index.html');
}

exports.create = (req,res) =>{
    const url = req.body.url;
    const code = makeid(6);
    if(!url || url.lenght <= 0) return res.json({msg: 'Insira um URL para encurtar!'});
    Shorten.create({ url: url, code: code}, (err, data) => {
        if(err){
            console.log(err);
            res.json({msg: 'Ocorreu um erro..'});
            return false;
        }
        res.json({msg: `Criado com sucesso! 127.0.0.1:3000/${code}`});
    });
}

exports.get = (req,res) =>{
    const code = req.params.code;
    Shorten.find({code: code}).exec((err,data)=>{
        if(err) console.log(err);
        if(!data || data.length <= 0){
            res.send('404').status(404);
            return false;
        }else{
            res.redirect(data[0].url);
        }
    });
}