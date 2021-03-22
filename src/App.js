import React from 'react';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: {},
      search_query: '',
      imgSrc: ''
    }
  }


  getLocationInfo = async (event) => {
    event.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.search_query}&format=json`;
    const location = await axios.get(url);
    const locationArray = location.data;
    console.log(locationArray)

    this.setState({ location: locationArray[0], displayFlag: true, imgSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=10` });
    console.log(this.state)
  };

  render() {
    return (
      <>
        <form onSubmit={this.getLocationInfo}>
          <input onChange={(event) => this.setState({ search_query: event.target.value })} placeholder="city" />
          <button type="submit">Search For A City!</button>
        </form>
        <h2>Hello From Axi</h2>
        <img src={this.state.displayFlag === true ? this.state.imgSrc : ''} alt={this.state.location.display_name} />
      </>
    )
  }
}

export default App;
