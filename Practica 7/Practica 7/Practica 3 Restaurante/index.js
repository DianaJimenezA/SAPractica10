'use strict'
const path = require('path')
var request = require('request');
const express = require('express')
const bodyParser = require('body-parser')
const app= express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.send("Servicio de Restaurante")
})
//Recibir pedido del cliente por medio del ESB
app.get('/NuevaOrden', (req, res)=>{
    var fecha = Date.now();
    console.log(fecha) 
    console.log("Se recibio la orden Correctamente")
    res.send("Pedido Recibido, Su orden fue procesada")
})
//Informar Estado del pedido al cliente por medio del ESB
app.get('/EstadoOrden', (req, res)=>{
    var fecha = Date.now();
    console.log(fecha) 
    console.log("El cliente solicito verificacion de Pedido")
    res.send("Pedido en preparacion")
})
//Notificar al repartidor por medio del ESB
app.get('/NotificarRepartidor', (req, res)=>{
    var cuerpo="respuesta solicitud"
    request("http://localhost:2000/NotificarRepartidor", function(err, body){
        var fecha = Date.now();
        console.log(fecha) 
        cuerpo= body.body   
        console.log(cuerpo)
        res.send(cuerpo)
    })
})
app.listen(3000, ()=>{
    console.log('Servico de Restaurante')
})
