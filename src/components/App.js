import axios from 'axios';
import Launches from './Launches';
import NavBar from './NavBar';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentWillMount() {
    axios.get('https://api.spacexdata.com/v2/launches/all?order=desc&sort=flight_number')
      .then(res => {
        this.setState({
          // Make sure the launch has details (more interesting)
          items: res.data.filter(item => item.details),
        });
      });
  }

  render() {
    return (
      <div>
        <NavBar />
        <Launches items={this.state.items} />
      </div>
    );
  }
}

export default App;
