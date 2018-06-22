import React, { Component } from 'react';
import './App.css';
import Weather from './components/Weather';
import Form from './components/Form'
import Title from './components/Title';


const API_key = "9e338b93146311f187172ab19377b921";


class App extends Component {

  state = {
    temprature : undefined,
    pressure : undefined,
    city : undefined,
    country : undefined,
    speed : undefined,
    description : undefined,
    minTemp : undefined,
    maxTemp : undefined,
    error : undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;
    const api_call = await fetch(`
    http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);
    const data = await api_call.json();
    // data.onreadystatechange = function(){
    //   if(this.readyState === 4 && this.status === 200){
    //     console.log(data);
    //   }
    // };
    // var data = new XMLHttpRequest();
    // data.open("GET","http://api.openweathermap.org/data/2.5/weather?q="+city+","+country+"&appid="+API_key, true);
    // data.onload = function(){
    //   var responseText = data.response;
    // }
    // data.send(); AJAX NOT WORKING
    // axios.get('http://api.openweathermap.org/data/2.5/weather?q="+city+","+country+"&appid="+API_key').then(response => {
    //   data = response.text;
    // })
    if(city && country){
      this.setState({
        temprature : data.main.temp,
        pressure : data.main.pressure,
        city : data.name,
        country : data.sys.country,
        speed : data.wind.speed,
        description : data.weather[0].description,
        minTemp : data.main.temp_min,
        maxTemp : data.main.temp_max,
        error: ""
      })
    }
    else{
      this.setState({
        temprature : undefined,
        pressure : undefined,
        city : undefined,
        country : undefined, 
        speed : undefined,
        description : undefined,
        minTemp : undefined,
        maxTemp : undefined,
        error : "Please check the the input of the city and country"
      })
    }

    }
  
  render(){
    return(
      <div>
        <Title title={this.state.city}/>
        <Form getWeather={this.getWeather}/>
        <Weather 
          country={this.state.country}
          temprature={this.state.temprature}
          pressure={this.state.pressure}
          city={this.state.city}
          country={this.state.country}
          speed={this.state.speed}
          description={this.state.description}
          minTemp={this.state.minTemp}
          maxTemp={this.state.maxTemp} 
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
