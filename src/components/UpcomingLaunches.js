import LaunchesTable from './LaunchesTable';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const UpcomingLaunches = ({items}) => {
  return (
    <Paper>
      <Toolbar>
        <Typography variant="h6">
          Upcoming Launches
        </Typography>
      </Toolbar>
      <LaunchesTable items={items} />
    </Paper>
  );
}

UpcomingLaunches.propTypes = {
  items: PropTypes.array.isRequired,
};

export default UpcomingLaunches;
