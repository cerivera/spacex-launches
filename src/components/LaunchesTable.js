import PropTypes from 'prop-types';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LaunchesRow from './LaunchesRow';

class LaunchesTable extends React.Component {
  render() {
    const { items} = this.props;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Mission</TableCell>
            <TableCell>Details</TableCell>
            <TableCell>Discuss</TableCell>
            <TableCell>Watch</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(item => (
            <LaunchesRow item={item} key={item.flight_number} />
          ))}
        </TableBody>
      </Table> 
    );
  }
}

LaunchesTable.propTypes = {
  items: PropTypes.array.isRequired,
};

export default LaunchesTable;