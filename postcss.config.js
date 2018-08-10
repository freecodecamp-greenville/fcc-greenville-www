module.exports = ({ env }) => ({
  plugins: [
    require('tailwindcss')('./tailwind.js'),
    env === 'production'
      ? require('@fullhuman/postcss-purgecss')({
          content: ['./dist/**/*.html']
        })
      : false,
    env === 'production' ? require('cssnano')({ preset: 'default' }) : false
  ]
});
