var express=require('express');
var app=express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/',function(req,res){
    console.log('Received request from', req.ip);
    res.send('Salut salut');
});

app.get('/Randos',function(req,res){
    console.log('Received request for GRandos from',req.ip);
    var Grandos=require('./Randos/Grs.json');
    res.json(Grandos);
});

app.get('/Specialite',function(req,res){
    console.log('Received request for Specs from',req.ip);
    var Specs=require('./Randos/Specs.json');
    res.json(Specs);
});

app.get('/Randos/:GRid',function(req,res){
    console.log('Received Request for '+req.params.GRid +' from ', req.ip);
    var GR=require('./Randos/'+req.params.GRid+'.json');
    res.json(GR);
}).use(function(req,res,next){
    res.setHeader('Content-Type', 'text/plain');
    res.sendStatus(404);
});



app.get('/Specialite/:nom',function(req,res){
    console.log('Received Request for '+req.params.nom +' from ', req.ip);
    var spe=require('./Randos/'+req.params.nom+'.json');
    res.json(spe);
}).use(function(req,res,next){
    res.setHeader('Content-Type', 'text/plain');
    res.sendStatus(404);
});

app.use('/Randos/img', express.static('img'));
app.use('/img', express.static('img'));
app.use(express.static('public'));



app.use(function(req, res, next){

    res.setHeader('Content-Type', 'text/plain');

    res.status(404).send('Page introuvable !');

});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
  });