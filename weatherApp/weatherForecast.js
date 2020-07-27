const geoCodeAddress=require('./geocode');
const forecastWeather=require('./forecastApp');
const chalk=require('chalk');
const fetchWeatherForecast=(address)=>{
    geoCodeAddress(address,(error, {latitude, longitude, location }={})=>{
        if(error){
            console.log(chalk.bgRed.white.bold(error));
        }else{
            forecastWeather(latitude,longitude,location,(error,forecastData)=>{
                if(error)
                {
                    console.log(chalk.bgRed.white.bold(error));
                }
                else{
                    console.log(chalk.bgGreen.white.bold(forecastData));
                }
                
            });
        }
    })
}
module.exports=fetchWeatherForecast;