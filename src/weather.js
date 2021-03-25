import React from 'react';

class Weather extends React.Component {

  render() {
    return (
      <>
        <h2>Weather Results</h2>
        {this.props.weatherList.map((item, index) => (
          <div key={index}>
            <h3>{item.description}</h3>
            <h3>{item.date}</h3>
          </div>
        ))}
      </>
    )
  }
}

export default Weather;