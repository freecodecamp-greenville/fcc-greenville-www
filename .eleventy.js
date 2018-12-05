const fs = require('fs');

const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/admin/config.yml');

  eleventyConfig.addFilter('timeToDate', time =>
    DateTime.fromJSDate(new Date(time))
      .setZone('America/New_York')
      .toFormat('EEEE, MMMM d, t')
  );

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
