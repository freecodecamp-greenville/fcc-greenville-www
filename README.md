# fcc-greenville-www

## Official website of the freeCodeCamp meetup group in Greenville SC.

## Development

Both Node and Ruby are needed to build the project. To install Ruby dependencies
run `bundler install`. Then run `yarn` or `npm install` to install the Node
dependencies. This project uses [Tailwind CSS](https://tailwindcss.com/) to
generate the styles. Run `npm start` to start a Jekyll development server. The
development server will watch for changes and rebuild the site on the fly. The
Jekyll files are located in `src/`. If you make changes to the Tailwind config
`tailwind.js` or the stylesheet `css/main.css`, you'll need to re-run
`npm start`. To generate a production build, run `npm run build`. The generated
site will be at `dist/`.

## Deploy

This site is deployed on [Netlify](https://www.netlify.com/). The production
website at <https://www.fcc-greenville.com/> is deployed from the master branch
on GitHub at <https://github.com/freecodecamp-greenville/fcc-greenville-www>.
[Netlify CMS](https://www.netlifycms.org/) is configured to push to master on
GitHub. The CMS is served at `/admin`.
