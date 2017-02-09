# fcc-greenville-www

## Official website of the freeCodeCamp meetup group in Greenville SC.

## Build

To build the site only [Jekyll](https://jekyllrb.com/) is needed. To run a local
development server, run `jekyll serve` in the root of this repo. To build the
site for deployment, run `jekyll build`.

## Deploy

Deployment is handled by [Stout](http://stout.is/). Configuration for stout is
in the `deploy.yaml` file. Deploy to staging with the command  `stout deploy
--env dev`. This deploys the site to the `next.fcc-greenville.com` S3 bucket.
Deploy to production with the command `stout deploy --env production`. This
deploys the site to the `www.fcc-greenville.com` S3 bucket.
