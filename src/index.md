---
layout: layouts/default.njk
---
*freeCodeCamp Greenville* is a group that meets once a month in Greenville
South Carolina to work on [freeCodeCamp](https://www.freecodecamp.com/) projects
together. Students of any skill level are welcome to attend.

We meet on the first Thursday of every month at 7 PM at [NEXT on
Main](http://www.greenvillenext.com/next-space-locations/next-main/) on the
3<sup>rd</sup> floor of the Bank of America building in downtown Greenville.
**Please use one of the side entrances inside the adjacent parking garages. The
main entrance to the building is locked after 6:30&nbsp;PM.**

<div class="my-4">
{% include doorbell-button.html %}
</div>

## Next Meetup

{% for meetup in meetup_com limit:1 %}
{% include meetup-event.njk %}
{% endfor %}

<a href="#" id="show-future-meetups">Full Calendar...</a>

<div class="future-meetups hidden">
{% for meetup in meetup_com offset:1 %}
{% include meetup-event.njk %}
{% endfor %}
</div>

Let us know that you're coming on
[Meetup](https://www.meetup.com/Hack-Greenville/)!

## Hack Nights

Evenings devoted to working on FCC projects and challenges. Campers use this
opportunity to receive assistance from other campers and mentors.

## Presentation Nights

We will occasionally have a guest speaker give a presentation. Topics covered
include job hunting, walk-through of freeCodeCamp challenges, and JavaScript
core concepts. After the presentation will be the normal hack night activities.

## Parking

For events at Next on Main, you can park in the Aloft parking garage or the
Richardson Street garage. Both garages are on Richardson Street, on either side
of the Bank of America building. There is an entrance to Next on Main in each
garage. In the Aloft garage the entrance is on the 5th level. In the Richardson
Street garage the entrance is on the 3rd level. During the event there will be a
virtual doorbell on this page so that we can let you in.

## Join us on Slack and Facebook

We have a channel `#freecodecampgvl` on the HackGreenville Slack team. [Go here
to sign up](http://hackgreenville.com/).

Join us on
[Facebook](https://www.facebook.com/groups/free.code.camp.Greenville/).

## Help Make This Website Better

One purpose of this website is to be a project that we can collaborate on. We
want to give our fellow FCC campers real world experience in collaborative
coding and distributed version control using [Git](https://git-scm.com/) and
[GitHub](https://github.com/).

If you have ideas or suggestions for this site, [open an issue or a pull
request](https://github.com/freecodecamp-greenville/fcc-greenville-www). Don't
know what that means? Come to one of our meet-ups and we'll get you started!
