import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GoogleCalendarLink from './GoogleCalendarLink';
import PropTypes from 'prop-types';
import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  link: {
    fontSize: 12,
    minWidth: 150,
  },
  smallLink: {
    fontSize: 10,
  }
});

class LaunchesRow extends React.Component {
  shortenText = text => {
    return text.replace(/^(.{140}).*/, (_, m1) => {
      return `${m1}...`;
    });
  }

  render() {
    const { classes, item } = this.props;
    const { links } = item;
    return (
      <TableRow className={classes.row} key={item.flight_number}>
        <TableCell component="th" scope="row">
          {(new Date(item.launch_date_utc)).toLocaleString()}
        </TableCell>
        <TableCell>{item.mission_name}</TableCell>
        <TableCell>
          <p>{item.details}</p>
          {links.reddit_campaign
            ? <Button 
                variant="outlined"
                color="default"
                className={classes.smallLink}
                size="small" 
                href={links.reddit_campaign}
              >READ MORE</Button>
            : null}
        </TableCell>
        <TableCell>
          {item.upcoming
            ? <GoogleCalendarLink
                className={classes.link}
                eventStartDate={item.launch_date_utc}
                description="https://apps.cerivera.com/spacex"
                durationInHours={2}
                location={item.launch_site.site_name_long}
                title={`SpaceX Launch - ${item.mission_name}`}
              />
            :
              <Button
                className={classes.link} 
                size="small"
                color="secondary"
                href={links.video_link}
                variant="outlined"
              >WATCH</Button>
          }
        </TableCell>
      </TableRow>
    );
  }
}

LaunchesRow.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
};

export default withStyles(styles)(LaunchesRow);