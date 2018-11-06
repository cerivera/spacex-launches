import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LaunchesRow from './LaunchesRow';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


class LaunchesTable extends React.Component {
  render() {
    const { classes, items} = this.props
    return (
      <Paper className={classes.root}>
        <h2>Launches</h2>
        <Table className={classes.root}>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Mission</TableCell>
              <TableCell>Details</TableCell>
              <TableCell>Links</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(item => (
              <LaunchesRow item={item} />  
            ))}
          </TableBody>
        </Table> 
      </Paper>
    )
  }
}

LaunchesTable.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
}

export default withStyles(styles)(LaunchesTable);