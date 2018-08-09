module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.js'),
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.html', './src/**/*.md']
    }),
    require('cssnano')({ preset: 'default' })
  ]
};
