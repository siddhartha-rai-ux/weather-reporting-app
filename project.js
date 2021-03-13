function datetime() {

    //while(1)
    {
       let x = document.getElementById("time");
       x.innerHTML = Date();
    }
 }
 
let clearsky="";
 let key='84601f70c4d28a36fc7242da285cfa95';
 function weather()
 {
    let city=document.getElementById("city").value;

 let ft=fetch('https://api.openweathermap.org/data/2.5/weather?q=' +city + '&appid=' + key);
 ft
 .then(function(resp) { return resp.json() }) // Convert data to json
 .then(function(data) {
    let t=(data.main.temp);
    //console.log(Math.round(t-273.15)+"  C");(Math.round(t-273.15)+"  C")
    document.getElementById("ch1").innerHTML="Temperature is  "+(Math.round(t-273.15)+'&deg;'+"C");
    document.getElementById("ch2").innerHTML="Weather description is "+data.weather[0].description;
    document.getElementById("ch3").innerHTML="Wind speed "+data.wind.speed+" m/s";
    document.getElementById("ch4").innerHTML="Humidity is "+data.main.humidity+"%";
   }) 
 .catch(
    function(error)
    {
      document.getElementById("ch1").innerHTML=("wrong city name"+error);
      document.getElementById("ch2").innerHTML="";
      document.getElementById("ch3").innerHTML="";
      document.getElementById("ch4").innerHTML="";
    }
    
 )
}
