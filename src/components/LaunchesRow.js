import PropTypes from 'prop-types';
import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {CalendarLink, GenericLink} from './Links';

class LaunchesRow extends React.Component {
  render() {
    const { item } = this.props;
    const { links } = item;
    return (
      <TableRow key={item.flight_number}>
        <TableCell component="th" scope="row">
          {item.launch_date_utc}
        </TableCell>
        <TableCell>{item.mission_name}</TableCell>
        <TableCell>{item.details}</TableCell>
        <TableCell>
          {item.upcoming
            ? <CalendarLink
                title={`SpaceX Launch - ${item.mission_name}`}
                description="https://apps.cerivera.com/spacex"
                date={item.launch_date_utc}
                location={item.launch_site.site_name_long}
              />
            : null}
          {links.reddit_campaign
            ? <GenericLink link={links.reddit_campaign} title="DISCUSS" />
            : null}
          {links.video_link 
            ? <GenericLink link={links.video_link} title="WATCH" />
            : null}
        </TableCell>
      </TableRow>
    )
  }
}

LaunchesRow.propTypes = {
  item: PropTypes.object.isRequired,
}

export default LaunchesRow;