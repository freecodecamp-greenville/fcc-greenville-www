const fs = require('fs');

const axios = require('axios');

axios.get('https://api.meetup.com/Hack-Greenville/events').then(res => {
  const dateUntil = new Date(new Date().getTime() + 90 * 24 * 60 * 60 * 1000);
  const meetups = res.data
    .filter(event => event.name === 'freeCodeCamp Greenville')
    .filter(
      event => new Date(event.local_date).getTime() < dateUntil.getTime()
    );
  fs.writeFile(
    'src/_data/meetup_com.json',
    JSON.stringify(meetups, null, 2),
    err => {
      if (err) throw err;
      console.log('meetup_com.json written');
    }
  );
});
