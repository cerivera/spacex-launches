import Button from '@material-ui/core/Button';
import GoogleCalendarLink from './GoogleCalendarLink';
import PropTypes from 'prop-types';
import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const shortenText = text => {
  return text.replace(/^(.{140}).*/, (_, m1) => {
    return `${m1}...`;
  });
};

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
        <TableCell>{shortenText(item.details)}</TableCell>
        <TableCell>
          {links.reddit_campaign
            ? <Button
                size="small"
                color="primary"
                href={links.reddit_campaign}
              >Reddit</Button>
            : null}
        </TableCell>
        <TableCell>
          {item.upcoming
            ? <GoogleCalendarLink
                eventStartDate={item.launch_date_utc}
                description="https://apps.cerivera.com/spacex"
                durationInHours={2}
                location={item.launch_site.site_name_long}
                title={`SpaceX Launch - ${item.mission_name}`}
              />
            :
              <Button
                  size="small"
                  color="secondary"
                  href={links.video_link}
              >RECORDING</Button>
          }
        </TableCell>
      </TableRow>
    );
  }
}

LaunchesRow.propTypes = {
  item: PropTypes.object.isRequired,
};

export default LaunchesRow;