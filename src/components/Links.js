import PropTypes from 'prop-types';
import React from 'react';

const padNum = (num) => num.toString().padStart(2, '0')

const CalendarLink = (props) => {
  const {title, date, description} = props
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description)
  // Oh ya I did.  Formatting these dates the "right" way was awful.
  const startDate = date.replace(/\.\d\d\d/, '').replace(/[-:.]*/g, '')
  // Add three hours to start date.  Sounds good to me!
  const endDate = startDate.replace(/T(\d\d)/, (_, m1) => `T${padNum(parseInt(m1)+3)}`)
  const link = `http://www.google.com/calendar/event?action=TEMPLATE&text=${encodedTitle}&dates=${startDate}/${endDate}&details=${encodedDescription}`

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