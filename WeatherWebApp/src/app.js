const express=require('express');
const hbs=require('express-hbs');
const path=require('path');
const port = process.env.PORT||3000;
const chalk=require('chalk');
const geocode=require('./utils/geocode');
const forecast=require('./utils/forecast');
// Define paths for Express config
const publicDirectoryPath=path.join(__dirname,'../public');
const partialsPath=path.join(__dirname,'../templates/partials');
const viewsPath=path.join(__dirname,'../templates/views')

const app=express();

//set up handlers
app.set('view engine','hbs');
app.set('views',viewsPath);

app.engine('hbs',hbs.express4({
    partialsDir:partialsPath
}))
app.use(express.static(publicDirectoryPath));

app.get("/",(request,response)=>{
    // response.send('Welcome to NodeJS learning.');
    response.render('index',{
        title:"Welcome to Node JS Training",
        description:'Node Js Training here'
    })
})
app.get("/home",(request,response)=>{
    // response.send('Welcome to NodeJS learning.');
    response.render('index',{
        title:"Welcome to Node JS Training",
        description:'Node Js Training here'
    })
})
app.get("/home/*",(request,response)=>{
    // response.send('Welcome to NodeJS learning.');
    response.render('404',{
        title:"Home Detailed Info Not Found",
        description:'Node Js Training here'
    })
})
app.get("/about",(request,response)=>{
    // response.send('Welcome to NodeJS learning.');
    response.render('about',{
        title:"Welcome to Node JS Training",
        description:'Node Js Training here'
    })
})
app.get("/contact",(request,response)=>{
    // response.send('Welcome to NodeJS learning.');
    response.render('contact',{
        title:"Welcome to Node JS Training",
        description:'Node Js Training here'
    })
})


//api call here
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude,location, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/weatherforecast', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude,location, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})


//other all api calls
app.get("*",(request,response)=>{
    // response.send('Welcome to NodeJS learning.');
    response.render('404',{
        title:"Page Not Found",
        description:'Node Js Training here'
    })
})
app.listen(port,()=>{
    console.log(chalk.bgCyan.white.bold(`Server running on http://localhost:${port}/`));
});