import LaunchesTable from './LaunchesTable';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';

const PastLaunches = ({items}) => {
  return (
    <Paper>
      <h3>Past Launches</h3>
      <LaunchesTable items={items} />
    </Paper>
  );
}

PastLaunches.propTypes = {
  items: PropTypes.array.isRequired,
};

export default PastLaunches;