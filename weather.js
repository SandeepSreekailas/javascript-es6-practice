let weatherForm=document.querySelector('.WeatherForm')
let cityInput=document.querySelector('.cityInput')
let card=document.querySelector('.card')
let apiKey="b5625aef9e7f96afd949400f52a01bd3"

weatherForm.addEventListener("submit", async event=>{
    event.preventDefault();
    const city=cityInput.value
    if(city){
        try{
            const weatherData= await getWhetherData(city)
            displayWeatherinfo(weatherData)

        }
        catch{
            console.error(error);
            displayerror(error)
        }

    }
    else{
        displayerror('please enter the city')
    }
})


async function getWhetherData(city){

    const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const response=await fetch(apiurl)
    const data=await response.json()
    return data

}

function displayWeatherinfo(data){
    
    const {
        name:city,
        main:{temp},
        weather:[{description,id}]
    }=data
    const cityDisplay=document.createElement('p')
    cityDisplay.textContent=city
    const tempDisplay=document.createElement('p')
    tempDisplay.textContent=`${(temp-273.15).toFixed(2)}°C`
    const weatherDisplay=document.createElement('p')
    weatherDisplay.textContent=description
    const weatherEmoji=document.createElement('p')
    weatherEmoji.textContent=getWeatherEmoji(id)

    card.textContent=''
    card.style.display = 'flex'

    weatherDisplay.classList.add('weatherdisplay')
    cityDisplay.classList.add('citydisplay')
    tempDisplay.classList.add('tempdisplay')
    weatherEmoji.classList.add('weatheremoji')

    card.appendChild(cityDisplay)
    card.appendChild(tempDisplay)
    card.appendChild(weatherDisplay)
    card.appendChild(weatherEmoji)
} 

function getWeatherEmoji(weatherid){
    switch (true){
        case(weatherid>=200 && weatherid<=300):
            return '⛈'
        case(weatherid>=300 && weatherid<=400):
            return '🌧'
        case(weatherid>=500 && weatherid<=600):
            return '🌧'
        case(weatherid>=600 && weatherid<=700):
            return '🌨'
        case(weatherid>=700 && weatherid<=800):
            return '🌫'
        case(weatherid>=800):
            return '☀'
        default:
            return '❓'
    }
    
}

function displayerror(message){
    const errorDisplay=document.createElement('p');
    errorDisplay.textContent=message
    errorDisplay.classList.add('errordisplay')
    card.textContent=''
    card.style.display = 'flex'
    card.appendChild(errorDisplay)

}