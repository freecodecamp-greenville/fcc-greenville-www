module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/app.js');
  eleventyConfig.addPassthroughCopy('src/styles.js');
  eleventyConfig.addPassthroughCopy('src/styles.css');
  eleventyConfig.addPassthroughCopy('src/admin/config.yml');
  eleventyConfig.addFilter('timeToDate', time => new Date(time).toISOString());

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
