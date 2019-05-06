import React from 'react'
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'


const API_KEY = '3797562105440b690fe6324106fd6b85'

class App extends React.Component {

    state={
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: 'Легко дiзнатися - наприклад: London GB, Kryvyy Rih UA, Odessa UA, Paris FR, ',
        error: undefined
    }

    getWeather = async (event) => {
        event.preventDefault()
        
        const city = event.target.elements.city.value
        const country = event.target.elements.country.value

        const api_call = await fetch(`
        https://api.openweathermap.org/data/2.5/weather?q=
        ${city},${country}&appid=${API_KEY}&units=metric
        `)

        const data = await api_call.json()

        if(city && country) {
        
        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
        })
        
    }
    else {

        this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "Якщо вас цікавить яка там погода - введіть місто і країну що цікавлять."
        })

    }
}


    render(){
        console.log(this.state)
        return(
            <div>

              <div className="wrapper">
                  <div className="main">
                      <div className="container">
                          <div className="row">
                              <div className="col-xs-5 title-container">
                              <Titles />
                              </div>
                               <div className="col-xs-7 form-container">
                                <Form getWeather={this.getWeather}/>
                                <Weather 
                                temperature={this.state.temperature}
                                city={this.state.city}
                                country={this.state.country}
                                humidity={this.state.humidity}
                                description={this.state.description}
                                error={this.state.error}
                                />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>               
            </div>
        )
    }

}


export default App

