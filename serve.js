"use strict"

const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const ApiHelper = require('./utils/ApiHelper')
const Config = require('./utils/Config')

const app = express()

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// 天行数据 百科题库 API
app.get('/tianapi/baike', (req, res) => {
  // quest data from Tian API
  ApiHelper.get().then((tianRes) => {
    // set content type
    res.setHeader('Content-Type', 'application/json')
    res.send(tianRes.data)
  }, (err) => {
    console.log(err)
  })
})

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)
console.log(`environment: ${Config.get('ENVIRONMENT')}`)
