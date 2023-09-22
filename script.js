const inputbox=document.querySelector('.inputbox')
const searchbtn=document.querySelector('#searchbtn')
const weatherimg=document.querySelector('.weatherimg')
const temperature=document.querySelector('.temperature')
const description=document.querySelector('.description')
const humadity=document.querySelector('#humadity')
const windspeed=document.querySelector('#windspeed')
const notsearch=document.querySelector('#notsearch')
const weatherbody=document.querySelector('.weatherbody')
const container=document.querySelector('.container')


 async function checkweather(city){
    const apikey="f81afc5511aae77841b9c4149e55a173"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    
    const weatherdata= await fetch(`${url}`).then(response => response.json())


    if(weatherdata.cod==='404'){
       notsearch.style.display='flex'
       weatherbody.style.display='none'
       console.log('error');
       return
    }
    notsearch.style.display='none'
    weatherbody.style.display='flex'

   

    temperature.innerHTML=`${Math.round(weatherdata.main.temp - 273.15)}°C`
    description.innerHTML=`${weatherdata.weather[0].description}`
    humadity.innerHTML=`${weatherdata.main.humidity}%`
    windspeed.innerHTML=`${weatherdata.wind.speed}km/H`

    console.log(weatherdata.weather[0].main);
    switch(weatherdata.weather[0].main){
     case 'Clouds':
        weatherimg.src="./images/cloud.img-removebg-preview.png";
        break
     case 'Clear':
        weatherimg.src="./images/sun.img-removebg-preview.png";
        break
     case 'rain':
        weatherimg.src="./images/rain.img-removebg-preview.png";
        break
     case 'Mist':
        weatherimg.src="./images/lightning.img-removebg-preview.png";
        break
     case 'Snow':
        weatherimg.src="./images/wind.img-removebg-preview.png";
        



    }
}

searchbtn.addEventListener( 'click',( )=>{
   checkweather(inputbox.value)
})




// const searchbtn=document.querySelector("#searchbtn")
// const inputbox=document.querySelector(".inputbox")
// const notsearch=document.querySelector("#notsearch")
// const weatherimg=document.querySelector(".weatherimg")
// const temperature=document.querySelector(".temperature")
// const description=document.querySelector(".description")
// const humadity=document.querySelector(".#humadity")
// const windspeed=document.querySelector(".#windspeed")
// const weatherbody=document.querySelector(".weatherbody")




//  async function checkweather(city){
//    const apikey="f81afc5511aae77841b9c4149e55a173"
//       const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
//    const weatherdata=  await fetch(`${url}`).then(response => response.json())
  

// if(inputbox.value.cod === '404'){
//    notsearch.style.display="flex" 
//    weatherbody.style.display="none"
//    console.log("error");
//    return
   
// }
// notsearch.style.display="none"
// weatherbody.style.display="flex" 




//   temperature.innerHTML=`${Math.round(weatherdata.main.temp -273.15)}°C`
//   description.innerHTML=`${weatherdata.weather[0].description}`
//   humadity.innerHTML=`${weatherdata.main.humadity}%`
//   windspeed.innerHTML=`${weatherdata.wind.speed}KM/H`

//   console.log(weatherdata.weather[0].main);
//   switch(weatherdata.weather[0].main){
//    case 'Clouds':
//       weatherimg.src="./images/cloud.img-removebg-preview.png"
//       break
//       case 'Rain':
//          weatherimg.src="./images/rain.img-removebg-preview.png"
//          break
//       case 'Clear':
//          weatherimg.src="./images/sun.img-removebg-preview.png"
//          break
//       case 'Mist':
//          weatherimg.src="./images/lightning.img-removebg-preview.png"
//          break
//          case 'Snow':
//          weatherimg.src="./images/wind.img-removebg-preview.png"
//          break
 
//       }
// }

// searchbtn.addEventListener('click',()=>{
// const checkweather=(inputbox.value)
// })

















































