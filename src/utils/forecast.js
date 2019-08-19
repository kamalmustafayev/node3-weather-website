const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = "https://api.darksky.net/forecast/dd92ef802d2d434494759a56f0cd7d9e/" + latitude + ","+ longitude + "?units=si"
    
    request({url, json:true}, (error, {body})=>{
        if(error){
            callback("Unable to connect to weather service!", undefined)
        }else if(body.error){
            callback("The given location (or time) is invalid", undefined)
        }else{
            callback(undefined, body.daily.data[0].summary + " It is currently " +  body.currently.temperature + " degrees out. There is a " + body.currently.precipProbability + "% chance of rain.")
        }
    })
}

module.exports = forecast