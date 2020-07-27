
const request = require('postman-request');
const geoCodeAccessToken="pk.eyJ1Ijoia29sZWthcmFtb2wiLCJhIjoiY2tkMXhraHJ6MTdzODJ1cGdmN3hibjE1NCJ9.VYwz-aCWVKOaSxxgo15Mgg"
const mapboxURL="https://api.mapbox.com/geocoding/v5/mapbox.places/"//Washington.json?limit=2&access_token=pk.eyJ1Ijoia29sZWthcmFtb2wiLCJhIjoiY2tkMXhraHJ6MTdzODJ1cGdmN3hibjE1NCJ9.VYwz-aCWVKOaSxxgo15Mgg";
const mapsearch={
    searchMap:function(address)
    {
        const geocodeURL=mapboxURL+`${address}`+'.json?limit=2&access_token='+geoCodeAccessToken;
        request({url:geocodeURL,json:true},(error,response,body)=>{
            if (error) {
                console.log('Unable to connect to location services!')
            } else if (response.body.features.length === 0) {
                console.log('Unable to find location. Try another search.')
            } else {
                const latitude = response.body.features[0].center[0]
                const longitude = response.body.features[0].center[1]
                console.log(latitude, longitude)
            }
        })
    }
}
module.exports=mapsearch;