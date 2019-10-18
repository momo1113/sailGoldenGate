//install http request module
//create a const to hold the url
//request the url and get the data back from the api
//parse the data from the body property

const request = require('request')
const weather = (address, callback) =>{
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' +address+'&APPID=58b4d42fd84b9cd29c691623bffbcfa3'
    request({url:url, json:true}, (error,response)=>{
        //error handling
        if(error){
            callback('Unable to find the location',undefined)
        }else{
            callback(undefined,{
                longitude: response.body.coord.lon,
                latitude: response.body.coord.lat,
                city: response.body.name,
                temperature: response.body.main.temp,
                windSpeed: response.body.wind.speed,
                humidity:response.body.main.humidity,
                weather: response.body.weather[0].main,
                description: response.body.weather[0].description
            }) 
        }
    })
}


module.exports = weather
