const express = require('express')
const path = require('path')


const app = express()


app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, '../index.html'))
})
app.get('/css',(req,res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
})
app.get('/js',(req,res) => {
    res.sendFile(path.join(__dirname, '../index.js'))
})
const port = process.env.PORT || 4005


app.listen(port, () => {
    console.log(`Server jammin on port ${port}!`)
})
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: 'e07644adba114a18935ae6b3dd14bf3c',
  captureUncaught: true,
  captureUnhandledRejections: true
});

try {blah()} 
catch{bad} rollbar.critical(err)

// const students = ['Jimmy', 'Timothy', 'Jimothy']


    rollbar.info('Students List Requested')
    rollbar.error('stuff is going wrong')
    rollbar.critical('everything is on fire')
    rollbar.warning('jk')
    res.status(200).send(students)



// record a generic message and send it to Rollbar
rollbar.log("Hello world!");