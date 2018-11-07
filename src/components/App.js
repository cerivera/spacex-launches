import axios from 'axios';
import LaunchesTable from './LaunchesTable';
import NavBar from './NavBar';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pastItems: [],
      upcomingItems: [],
    };
  }

  componentWillMount() {
    axios.get('https://api.spacexdata.com/v2/launches/all?order=desc&sort=flight_number')
      .then(res => {
        this.setState({
          pastItems: res.data.filter(item => item.details && !item.upcoming),
          upcomingItems: res.data.filter(item => item.details && item.upcoming),
        });
      });
  }

  render() {
    return (
      <div>
        <NavBar />
        <LaunchesTable items={this.state.upcomingItems} />
        <LaunchesTable items={this.state.pastItems} />
      </div>
    );
  }
}

export default App;
