import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Map extends React.Component {

  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.imgSrc} alt={this.props.location.display_name} />
          <Card.Body>
            <Card.Text>
              {this.props.location.display_name}
            </Card.Text>
            <Card.Text>
              {this.props.location.lat}
            </Card.Text>
            <Card.Text>
              {this.props.location.lon}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default Map;