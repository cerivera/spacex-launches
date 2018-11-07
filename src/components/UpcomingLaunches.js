import LaunchesTable from './LaunchesTable';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';


const UpcomingLaunches = ({items}) => {
  return (
    <Paper>
      <h3>Upcoming Launches</h3>
      <LaunchesTable items={items} />
    </Paper>
  );
}

UpcomingLaunches.propTypes = {
  items: PropTypes.array.isRequired,
};

export default UpcomingLaunches;
