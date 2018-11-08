import { mount } from 'enzyme';
import GoogleCalendarLink from './GoogleCalendarLink';
import React from 'react';

describe('<GoogleCalendarLink />', () => {
  it('renders dates parameter', () => {
    const button = mount(
      <GoogleCalendarLink
        eventStartDate='2018-10-08T02:22:00.000Z'
        description='A'
        durationInHours={5}
        location='B'
        title='C'
      />
    );

    const expectedDates = 'dates=20181008T022200Z/20181008T072200Z'
    expect(button.html()).toContain(expectedDates);
  });
});

