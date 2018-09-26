module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/app.js');
  eleventyConfig.addPassthroughCopy('src/styles.js');
  eleventyConfig.addPassthroughCopy('src/styles.css');
  eleventyConfig.addPassthroughCopy('src/admin/config.yml');

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
