const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/app.js');
  eleventyConfig.addPassthroughCopy('src/styles.js');
  eleventyConfig.addPassthroughCopy('src/styles.css');
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
