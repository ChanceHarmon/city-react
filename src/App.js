import React from 'react';
import axios from 'axios';
import Map from './map';
import Weather from './weather';
import Movie from './movies';
import Error from './error';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from 'react-bootstrap/Form';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: {},
      search_query: '',
      imgSrc: '',
      weatherResult: [],
      movieResult: [],
      displyError: false,
      error: ''
    }
  }

  handleUserQuery = async (event) => {
    await this.getLocation(event)
      .then(() => {
        this.getWeather();
        this.getMovies();
      }).catch(err => console.log(err.message))
  }


  getLocation = async (event) => {
    event.preventDefault();
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.search_query}&format=json`;
      const location = await axios.get(url);
      const locationArray = location.data;
      console.log(locationArray)

      this.setState({ location: locationArray[0], imgSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=10` });
      console.log(this.state)
    } catch (error) {
      this.setState({ imgSrc: '', location: {}, searchedResult: [], displayError: true, error: error })
    }
  };


  getWeather = async () => {
    const SERVER = 'https://city-react-server.herokuapp.com'
    // const SERVER = 'http://localhost:3001'
    const forecast = await axios.get(`${SERVER}/weather?lat=${this.state.location.lat}&lon=${this.state.location.lon}`);
    console.log(forecast)
    this.setState({ weatherResult: forecast.data })
  }

  getMovies = async () => {
    const SERVER = 'https://city-react-server.herokuapp.com'
    // const SERVER = 'http://localhost:3001'
    const movieResults = await axios.get(`${SERVER}/movies?city=${this.state.search_query}`);
    console.log(movieResults)
    this.setState({ movieResult: movieResults.data })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleUserQuery}>
          <input onChange={(event) => this.setState({ search_query: event.target.value })} placeholder="city" />
          <button type="submit">Search For A City!</button>
        </form>
        <h2>Hello From Axi</h2>
        <Map location={this.state.location} imgSrc={this.state.imgSrc} />
        <Weather weatherList={this.state.weatherResult} />
        <Movie movieList={this.state.movieResult} />
        {this.state.displayError &&
          <>
            <Error handleError={this.state.error} />
          </>
        }
      </>
    )
  }
}

export default App;
