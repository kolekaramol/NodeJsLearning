console.log("welcome weather web app");

var weatherForm=document.querySelector('form');
var searchButton=document.querySelector('search');
var inputTag=document.querySelector('input');
var msg1=document.querySelector('#message-1');
var msg2=document.querySelector('#message-2');

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location=inputTag.value;
    msg1.textContent='...Loading';
    msg2.textContent="";
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msg1.textContent = data.error
            } else {
                msg1.textContent = data.location
                msg2.textContent = data.forecast
            }
        })
    })
})

