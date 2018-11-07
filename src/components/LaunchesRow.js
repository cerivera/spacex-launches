import Button from '@material-ui/core/Button';
import GoogleCalendarLink from './GoogleCalendarLink';
import PropTypes from 'prop-types';
import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class LaunchesRow extends React.Component {
  render() {
    const { item } = this.props;
    const { links } = item;
    return (
      <TableRow key={item.flight_number}>
        <TableCell component="th" scope="row">
          {(new Date(item.launch_date_utc)).toLocaleDateString()}
        </TableCell>
        <TableCell>{item.mission_name}</TableCell>
        <TableCell>{item.details}</TableCell>
        <TableCell>
          {item.upcoming
            ? <GoogleCalendarLink
                eventStartDate={item.launch_date_utc}
                description="https://apps.cerivera.com/spacex"
                durationInHours={2}
                location={item.launch_site.site_name_long}
                title={`SpaceX Launch - ${item.mission_name}`}
              />
            : null}
          {links.reddit_campaign
            ? <Button
                size="small"
                variant="contained"
                color="primary"
                href={links.reddit_campaign}
              >DISCUSS</Button>
            : null}
          {links.video_link 
           ? <Button
                size="small"
                variant="contained"
                color="secondary"
                href={links.video_link}
             >WATCH</Button>
            : null}
        </TableCell>
      </TableRow>
    );
  }
}

LaunchesRow.propTypes = {
  item: PropTypes.object.isRequired,
};

export default LaunchesRow;