'use strict'
const path = require('path')
var request = require('request');
const express = require('express')
const bodyParser = require('body-parser');
const { Console } = require('console');
const app= express()
const port = process.env.PORT || 4000

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.send("Servicio  de Reparto")
})
//Recibir pedido del  restaurante
app.get('/RecibirPedido', (req, res)=>{
    var fecha = Date.now();
    console.log(fecha) 
    console.log("El restaurante envio un pedido")
    res.send("El Repartidor recibio el pedido")
})
//Informar el estado del pedido al cliente
app.get('/EstadoOrdenPedido', (req, res)=>{
    var fecha = Date.now();
    console.log(fecha) 
    console.log("El cliente solicito estado del pedido")
    res.send("Pedido en Camino, Ubicacion Zona 1 Guatemala")
})
app.get('/CambiarEstado', (req, res)=>{
    var fecha = Date.now();
    console.log(fecha) 
    console.log("Cambiar el estado del pedido #1234")
    res.send("El pedido #1234 cambio su estado a marcado")
})

app.listen(4000, ()=>{
    var fecha = Date.now();
    console.log(fecha) 
    console.log('Servico de Repartidor')
})
