const request=require('postman-request');
const weatherApi="0ec79cfc0ed327a93ab324078380a293";

forecastWeather=(latitude,longitude,location,callback)=>{
   // let weatherURL=`http://api.weatherstack.com/current?access_key=${weatherApi}&lat=${latitude}&lon=${longitude}`;
    let weatherURL=`http://api.weatherstack.com/current?access_key=${weatherApi}&query=${location}`;
        
    request({url:weatherURL,json:true},(error,response,body)=>{
        if(error)
        {
            callback('Unable to connect to weather service!', undefined)
        }
        else if(body.error){
            callback(body.error.info, undefined)
        }
        else{
            callback(undefined, body.current.weather_descriptions[0]+ '. It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.')
            }
    })
}

module.exports=forecastWeather;