import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

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

class PreviousLaunches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentWillMount() {
    axios.get('https://api.spacexdata.com/v2/launches?order=desc&sort=flight_number')
      .then(res => {
        this.setState({
          items: res.data
        });
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <h2>Previous</h2>
        <Table className={classes.root}>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Mission</TableCell>
              <TableCell>Details</TableCell>
              <TableCell>Successful?</TableCell>
              <TableCell>Video</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.items.map(item => (
              <TableRow key={item.flight_number}>
                <TableCell component="th" scope="row">
                  {item.launch_date_utc}
                </TableCell>
                <TableCell>{item.mission_name}</TableCell>
                <TableCell>{item.details}</TableCell>
                <TableCell>{item.launch_success ? 'True' : 'False'}</TableCell>
                <TableCell><Button variant="contained" href={item.links.video_link}>WATCH</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table> 
      </Paper>
    )
  }
}

PreviousLaunches.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(PreviousLaunches);