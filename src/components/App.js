import axios from 'axios';
import NavBar from './NavBar';
import PastLaunches from './PastLaunches';
import React, { Component } from 'react';
import UpcomingLaunches from './UpcomingLaunches';

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
        <UpcomingLaunches items={this.state.upcomingItems} />
        <PastLaunches items={this.state.pastItems} />
      </div>
    );
  }
}

export default App;
