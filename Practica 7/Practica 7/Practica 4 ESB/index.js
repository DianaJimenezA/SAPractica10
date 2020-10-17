'use strict'
const path = require('path')
var request = require('request');
const express = require('express')
const bodyParser = require('body-parser');
const { Console } = require('console');
const app= express()
const port = process.env.PORT || 2000

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.send("Servicio de ESB")
})

//Recibir pedido del cliente y hacer pedido a restaurante
app.get('/HacerPedido', (req, res)=>{
    var cuerpo="respuesta solicitud"
    request("http://localhost:3000/NuevaOrden", function(err, body){
        cuerpo= body.body  
        var fecha = Date.now();
        console.log(fecha) 
        console.log('Se recibio el pedido del cliente y se trasladara la orden al restaurante:')
        console.log(cuerpo)
        res.send(cuerpo)
    })
})

//Recibir  solicitud de estado de pedido del cliente y hacer solicitud del estado al restaurante
app.get('/SolicitarEstadoPedido', (req, res)=>{
    var cuerpo="respuesta solicitud"
    request("http://localhost:3000/EstadoOrden", function(err, body){
        cuerpo= body.body   
        var fecha = Date.now();
        console.log(fecha) 
        console.log('Se recibio la solicitud de estado de pedido del cliente y se realizara la solicitud al restaurante')
        console.log(cuerpo)
        res.send(cuerpo)
    })
})
//Recibir  solicitud de estado de pedido del cliente y hacer solicitud del estado al  repartidor
app.get('/VerificarPedidoRepartidor', (req, res)=>{
    var cuerpo="respuesta solicitud"
    request("http://localhost:4000/EstadoOrdenPedido", function(err, body){
        cuerpo= body.body   
        var fecha = Date.now();
        console.log(fecha) 
        console.log('Se recibio la solicitud del estado del pedido del cliente y se realizara la solicitud al  repartidor')
        console.log(cuerpo)
        res.send(cuerpo)
    })
})
//Notificar al repartidor por medio del ESB
app.get('/NotificarRepartidor', (req, res)=>{
    var cuerpo="respuesta solicitud"
    request("http://localhost:4000/RecibirPedido", function(err, body){
        cuerpo= body.body   
        var fecha = Date.now();
        console.log(fecha) 
        console.log('Se recibio la notificacion para el repartidor')
        console.log(cuerpo)
        res.send(cuerpo)
    })
})


app.listen(2000, ()=>{
    console.log('Servicio de ESB')
})
