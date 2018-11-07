import axios from 'axios';
import LaunchesTable from './LaunchesTable';
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
        const items = res.data;
        this.setState({
          // Launches with details are more interesting
          items: items.filter(item => item.details)
        });
      });
  }

  render() {
    return (
      <div>
        <NavBar />
        <LaunchesTable items={this.state.items} />
      </div>
    );
  }
}

export default App;
