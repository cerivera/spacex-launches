import LaunchesTable from './LaunchesTable';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';

const Launches = ({items}) => {
  return (
    <Paper>
      <LaunchesTable items={items} />
    </Paper>
  );
}

Launches.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Launches;
