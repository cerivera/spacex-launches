import PropTypes from 'prop-types';
import React from 'react';

const padNum = (num) => num.toString().padStart(2, '0')

const getEventDates = (dateStr) => {
  // Oh ya I did.  Formatting these dates the "right" way was awful.
  const startDate = dateStr.replace(/\.\d\d\d/, '').replace(/[-:.]*/g, '')
  // Add two hours to start date.  Sounds good to me!
  const endDate = startDate.replace(/T(\d\d)/, (_, m1) => {
    return `T${padNum(parseInt(m1)+2)}`
  })

  return `${startDate}/${endDate}`
}

const CalendarLink = (props) => {
  const {date, description, location, title} = props;

  const dates = getEventDates(date);
  const encodedDescription = encodeURIComponent(description);
  const encodedLocation = encodeURIComponent(location);
  const encodedTitle = encodeURIComponent(title);

  const link = `http://www.google.com/calendar/event?action=TEMPLATE&text=${encodedTitle}&dates=${dates}&details=${encodedDescription}&location=${encodedLocation}`;

  return (
    <a href={link.trim()} target="_blank" rel="noopener noreferrer">Add to Calendar</a>
  )
};

CalendarLink.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

const GenericLink = ({link, title}) => (
  <a target="_blank" rel="noopener noreferrer" href={link}>{title}</a>
)

GenericLink.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export {
  CalendarLink,
  GenericLink,
}