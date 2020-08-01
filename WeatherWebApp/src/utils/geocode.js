const request = require('request')
const geoCodeAccessToken="pk.eyJ1Ijoia29sZWthcmFtb2wiLCJhIjoiY2tkMXhraHJ6MTdzODJ1cGdmN3hibjE1NCJ9.VYwz-aCWVKOaSxxgo15Mgg"
const mapboxURL="https://api.mapbox.com/geocoding/v5/mapbox.places/"//Washington.json?limit=2&access_token=pk.eyJ1Ijoia29sZWthcmFtb2wiLCJhIjoiY2tkMXhraHJ6MTdzODJ1cGdmN3hibjE1NCJ9.VYwz-aCWVKOaSxxgo15Mgg";

const geocode = (address, callback) => {
    const geocodeURL=mapboxURL+`${address}`+'.json?limit=1&access_token='+geoCodeAccessToken;
      
    request({ url:geocodeURL, json: true }, (error, { body })  => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode