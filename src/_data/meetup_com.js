const axios = require('axios');

module.exports = () =>
  axios.get('https://api.meetup.com/Hack-Greenville/events').then(res => {
    const dateUntil = new Date(
      new Date().getTime() + 180 * 24 * 60 * 60 * 1000
    );
    return res.data
      .filter(event => event.name === 'freeCodeCamp Greenville')
      .filter(
        event => new Date(event.local_date).getTime() < dateUntil.getTime()
      );
  });
