'use strict'
const path = require('path')
var request = require('request');
const express = require('express')
const bodyParser = require('body-parser')
const app= express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.send("Servicio de Cliente")
})
//Hacer Pedido al ESB -> restaurante
app.get('/SolicitarPedido', (req, res)=>{
    var cuerpo="respuesta solicitud"
    request("http://localhost:2000/HacerPedido", function(err, body){
        cuerpo= body.body   
        var fecha = Date.now();
        console.log(fecha) 
        console.log(cuerpo)
        res.send(cuerpo)
    })
    
})
//Verificar estado del pedido al ESB -> al restaurante
app.get('/SolicitarEstadoPedido', (req, res)=>{
    var cuerpo="respuesta solicitud"
    request("http://localhost:2000/SolicitarEstadoPedido ", function(err, body){
        cuerpo= body.body   
        var fecha = Date.now();
        console.log(fecha) 
        console.log(cuerpo)
        res.send(cuerpo)
    })
})
//Verificar estado del pedido al ESB -> al restaurante

app.get('/VerificarPedidoRepartidor', (req, res)=>{
    var cuerpo="respuesta solicitud"
    request("http://localhost:2000/VerificarPedidoRepartidor", function(err, body){
        cuerpo= body.body   
        var fecha = Date.now();
        console.log(fecha) 
        var res=AddPeticionRecibida(cuerpo)
        res.send(cuerpo)
    })
    
})

var exports=module.exports={};
exports.AddPeticionRecibida=function(a)
{
    console.log(a)
    return 'respondio correctamente';
};

app.listen(port, ()=>{
    console.log('Servicio de Cliente')
})
