const mongoose = require('mongoose')

//set up the city model which should be store in the databse 
//which has the name, longtitude, latitude,temperature,humidity,windSpeed,weather,description
//of the city
const cityModels = mongoose.model('City',{
    city:{
        type: String
    },longtitude :{
        type: Number
    },latitude:{
        type:Number
    },temperature:{
        type:Number
    },humidity:{
        type:Number
    },windSpeed:{
        type:Number
    },weather:{
        type: String 
    },description:{
        type: String
    }
})

module.exports = cityModels