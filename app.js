//setup framework express and endpoints 
//import the cityModels, weather.js
//initialize the framework
//setup the port

const express = require('express')
const weather = require('./weather')
const cityModels = require('./cityModel')
const config = require('./config/default')

const app = express()
const port = process.env.PORT || 3000
require('./mogoose.js')

app.use(express.json())

//fetch the data from configration file by using a loop
//and get the response from the api
//save the data to mongodb database
//set up the refresh frequency 20 calls per minute
setInterval(function(){
    for(i =0; i< config.cities.length; i ++){
         weather(config.cities[i].name, (error,response) =>{
                const city = new cityModels(response)
                city.save().then(() =>{
        }).catch((e) =>{
                console.log(e)
        })
    })
}
}, (60/config.refreshFrequency)*1000)

//read data from MongoDB database and print to console
cityModels.find(function(err,cities){
    if(err){
        return console.error(err)
    }
   console.log(cities)
})


app.listen(port, ()=>{
    console.log('Server is up on port' + port)
})




