import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';

// To ensure single digits have a leading zero
const padNum = (num) => num.toString().padStart(2, '0');

const buildDatesParam = (startDate, durationInHours) => {
  // Oh ya I did.
  // Formatting these dates the "right" way was awful.
  const formattedStartDate = startDate.replace(/\.\d\d\d/, '').replace(/[-:.]*/g, '')
  const formattedEndDate = formattedStartDate.replace(/T(\d\d)/, (_, m1) => {
    return `T${padNum(parseInt(m1)+durationInHours)}`
  })
  return `${formattedStartDate}/${formattedEndDate}`
};

const GoogleCalendarLink = (props) => {
  const encodedDates = buildDatesParam(props.eventStartDate, props.durationInHours);
  const encodedDescription = encodeURIComponent(props.description);
  const encodedLocation = encodeURIComponent(props.location);
  const encodedTitle = encodeURIComponent(props.title);

  return (
    <Button
      className={props.className}
      size="small"
      variant="contained"
      color="secondary"
      href={`http://www.google.com/calendar/event?action=TEMPLATE&text=${encodedTitle}&dates=${encodedDates}&details=${encodedDescription}&location=${encodedLocation}`}
    >ADD TO CALENDAR</Button>
  )
};

GoogleCalendarLink.propTypes = {
  className: PropTypes.string,
  eventStartDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  durationInHours: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GoogleCalendarLink;