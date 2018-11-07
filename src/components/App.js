import axios from 'axios';
import LaunchesTable from './LaunchesTable';
import NavBar from './NavBar';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  componentWillMount() {
    axios.get('https://api.spacexdata.com/v2/launches/all?order=desc&sort=flight_number')
      .then(res => {
        const items = res.data;
        this.setState({
          // Only show launches with details
          items: items.filter(item => item.details)
        });
      });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <NavBar />
        <LaunchesTable items={items} />
      </div>
    );
  }
}

export default App;
