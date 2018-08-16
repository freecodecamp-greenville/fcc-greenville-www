class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = ({ env }) => ({
  plugins: [
    require('tailwindcss')('./tailwind.js'),
    env === 'production'
      ? require('@fullhuman/postcss-purgecss')({
          content: ['./dist/**/*.html'],
          extractors: [{ extractor: TailwindExtractor, extensions: ['html'] }]
        })
      : false,
    env === 'production' ? require('cssnano')({ preset: 'default' }) : false
  ]
});
