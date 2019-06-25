import React , {Component} from 'react';
import Weather from './components/Weather';
import Form from './components/Form'


const API_KEY = "36215746aaf42691155ba6d861694bdf";
class App extends Component {
 state = {
     temp:'',
     city:'',
     country:'',
     humidity:'',
     description:'',
     error:'',
 }
    getWeather = async (e) => {
     e.preventDefault();
     const city = e.target.elements.city.value;
     const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data = await api.json(); 
    if (city && country) {
        this.setState({
            temp:data.main.temp,
            city:data.name,
            country:data.sys.country,
            humidity:data.main.humidity,
            description:data.weather[0].description,
            error:''
        })
    }else {
        this.setState({
            temp:'',
            city:'',
            country:'',
            humidity:'',
            description:''
        })
    }
}
  render() {
      return(
          <div className="wrapper">
            <div className="form-container">
             <Form getWeather = {this.getWeather}/>
              <Weather 
                 temp={this.state.temp}
                 city={this.state.city}
                 country ={this.state.country}
                 humidity ={this.state.humidity}
                 description= {this.state.description}
                 error = {this.state.error}
              />
              
              </div>
          </div>
      );
  }
}

export default App;
