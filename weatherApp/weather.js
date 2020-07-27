const request=require('postman-request');
const mapSearch=require('./mapsearch');
const weatherApi="0ec79cfc0ed327a93ab324078380a293";

const weatherApp={
    fetchWeather:function(address)
    {
        let weatherURL=`http://api.weatherstack.com/current?access_key=${weatherApi}&query=${address}`;
        request({url:weatherURL,json:true},(error,response, body)=>{
            if(error){
                console.log(error)
            }
            else{
                console.log('statusCode:', response && response.statusCode); 
                console.log('body:', body); // Print the HTML for the Google homepage.
            }
        })
    },
    fetchAddress:function(address){
        mapSearch.searchMap(address);
    }
    
}

module.exports=weatherApp;
