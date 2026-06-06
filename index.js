require('dotenv').config()
const express = require('express')
//we can writw alsho import express from 'express' but we have to change type to module in package.json
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('This is about page')
})

app.get('/login',(req, res) => {
  res.end('<h1>Please login this page</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})