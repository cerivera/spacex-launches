import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import UpcomingLaunches from './UpcomingLaunches'
import PreviousLaunches from './PreviousLaunches'
import PropType from 'prop-types';
import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              SpaceX Launches Tracker
            </Typography>
          </Toolbar>
        </AppBar>
        <UpcomingLaunches />
        <PreviousLaunches />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropType.object,
}

export default withStyles(styles)(App);
