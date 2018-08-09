module.exports = ({ env }) => ({
  plugins: [
    require('tailwindcss')('./tailwind.js'),
    env === 'production'
      ? require('@fullhuman/postcss-purgecss')({
          content: ['./src/**/*.html', './src/**/*.md']
        })
      : false,
    env === 'production' ? require('cssnano')({ preset: 'default' }) : false
  ]
});
