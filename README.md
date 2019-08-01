# fcc-greenville-www

## Official website of the freeCodeCamp meetup group in Greenville SC.

## Development

Only Node is needed to build the project. To install Node dependencies run `npm
install`. This project uses [Tailwind CSS](https://tailwindcss.com/) to generate
the styles. Run `npm start` to start a development server. The development
server will watch for changes, rebuild, and reload the site on the fly. The
source files are located in `src/`. If you make changes to the Tailwind config
`tailwind.js` you'll need to re-run `npm start`. To generate a production build,
run `npm run build`. The generated site will be at `dist/`.

## Deploy

This site is deployed on [Netlify](https://www.netlify.com/). The production
website at <https://www.fcc-greenville.com/> is deployed from the master branch
on GitHub at <https://github.com/freecodecamp-greenville/fcc-greenville-www>.
[Netlify CMS](https://www.netlifycms.org/) is configured to push to master on
GitHub. The CMS is served at `/admin`.
