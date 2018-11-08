import { mount } from 'enzyme';
import LaunchesRow from './LaunchesRow';
import LaunchesTable from './LaunchesTable';
import React from 'react';

describe('<LaunchesTable />', () => {
  it('Renders [ADD TO CALENDAR]', () => {
    const items = [{
      flight_number: 1,
      links: {},
      upcoming: true,
      launch_site: {
        site_name_long: "Vandenberg Air Force Base Space Launch Complex 4E"
      },
      launch_date_utc: "2018-10-08T02:22:00.000Z",
    }]

    const table = mount(<LaunchesTable items={items} />);
    expect(table.html()).toContain('ADD TO CALENDAR');
  });

  it('Renders [READ MORE]', () => {
    const items = [{
      flight_number: 1,
      links: {
        reddit_campaign: 'https://wwww.reddit.com'
      },
      launch_site: {
        site_name_long: "Vandenberg Air Force Base Space Launch Complex 4E"
      },
      launch_date_utc: "2018-10-08T02:22:00.000Z",
    }];

    const table = mount(<LaunchesTable items={items} />);
    expect(table.html()).toContain('READ MORE');
  });

  it('Renders [WATCH]', () => {
    const items = [{
      flight_number: 1,
      links: {
        video_link: 'https://youtube.com'
      },
      launch_site: {
        site_name_long: "Vandenberg Air Force Base Space Launch Complex 4E"
      },
      launch_date_utc: "2018-10-08T02:22:00.000Z",
    }];

    const table = mount(<LaunchesTable items={items} />);
    expect(table.html()).toContain('WATCH');
  });
});

