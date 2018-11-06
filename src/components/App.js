import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import axios from 'axios'
import PropType from 'prop-types';
import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LaunchesTable from './LaunchesTable';

const styles = {
  root: {
    flexGrow: 1,
  },
};

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
    const { classes } = this.props;
    const { items } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              SpaceX Tracker
            </Typography>
          </Toolbar>
        </AppBar>
        <LaunchesTable items={items} />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropType.object.isRequired,
}

export default withStyles(styles)(App);
