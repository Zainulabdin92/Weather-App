let url = "https://api.openweathermap.org/data/2.5/weather?appid=cdab3b57d29adea92d9e0c13fc704e72&units=metric"
let searchBox = document.querySelector('input')
let searchBtn = document.querySelector('.search button')
let weatherIcon = document.querySelector('.weather-icon')


async function weather(city) {
    let response = await fetch(url +`&q=${city}`)

    if(response.status == 404){
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    }else{

        let data = await response.json()
        console.log(data)
        
    

    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+'°c'
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h'

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = 'images/clouds.png'
    }else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = 'images/clear.png'
    }else if(data.weather[0].main =='Rain'){
        weatherIcon.src = 'images/rain.png'
    }else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = 'images/drizzle.png'
    }else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = 'images/mist.png'
    }else if(data.weather[0].main == 'Snow'){
        weatherIcon.src = 'images/snow.png'
    }

    document.querySelector('.weather').style.display = 'block'
    document.querySelector('.error').style.display = 'none'
}
}

searchBtn.addEventListener('click',()=>{
    weather(searchBox.value)
})



