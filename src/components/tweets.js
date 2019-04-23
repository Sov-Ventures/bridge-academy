import React from "react";

const tweets = [
  {
    embed: '<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">One final picture from Nomadic Mixer 2019 organised by <a href="https://twitter.com/join_bridge?ref_src=twsrc%5Etfw">@join_bridge</a> and <a href="https://twitter.com/IndieHackers?ref_src=twsrc%5Etfw">@IndieHackers</a> at Tribe Theory Startup Hostels, Kormangala. 😁 <a href="https://t.co/SVpD89GSrR">pic.twitter.com/SVpD89GSrR</a></p>&mdash; Bridge Academy (@join_bridge) <a href="https://twitter.com/join_bridge/status/1119256369276706821?ref_src=twsrc%5Etfw">April 19, 2019</a></blockquote>',
  },
  {
    embed: '<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">One final picture from Nomadic Mixer 2019 organised by <a href="https://twitter.com/join_bridge?ref_src=twsrc%5Etfw">@join_bridge</a> and <a href="https://twitter.com/IndieHackers?ref_src=twsrc%5Etfw">@IndieHackers</a> at Tribe Theory Startup Hostels, Kormangala. 😁 <a href="https://t.co/SVpD89GSrR">pic.twitter.com/SVpD89GSrR</a></p>&mdash; Bridge Academy (@join_bridge) <a href="https://twitter.com/join_bridge/status/1119256369276706821?ref_src=twsrc%5Etfw">April 19, 2019</a></blockquote>',
  },
  {
    embed: '<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">One final picture from Nomadic Mixer 2019 organised by <a href="https://twitter.com/join_bridge?ref_src=twsrc%5Etfw">@join_bridge</a> and <a href="https://twitter.com/IndieHackers?ref_src=twsrc%5Etfw">@IndieHackers</a> at Tribe Theory Startup Hostels, Kormangala. 😁 <a href="https://t.co/SVpD89GSrR">pic.twitter.com/SVpD89GSrR</a></p>&mdash; Bridge Academy (@join_bridge) <a href="https://twitter.com/join_bridge/status/1119256369276706821?ref_src=twsrc%5Etfw">April 19, 2019</a></blockquote>',
  },
  {
    embed: '<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">One final picture from Nomadic Mixer 2019 organised by <a href="https://twitter.com/join_bridge?ref_src=twsrc%5Etfw">@join_bridge</a> and <a href="https://twitter.com/IndieHackers?ref_src=twsrc%5Etfw">@IndieHackers</a> at Tribe Theory Startup Hostels, Kormangala. 😁 <a href="https://t.co/SVpD89GSrR">pic.twitter.com/SVpD89GSrR</a></p>&mdash; Bridge Academy (@join_bridge) <a href="https://twitter.com/join_bridge/status/1119256369276706821?ref_src=twsrc%5Etfw">April 19, 2019</a></blockquote>',
  },
  {
    embed: '<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">One final picture from Nomadic Mixer 2019 organised by <a href="https://twitter.com/join_bridge?ref_src=twsrc%5Etfw">@join_bridge</a> and <a href="https://twitter.com/IndieHackers?ref_src=twsrc%5Etfw">@IndieHackers</a> at Tribe Theory Startup Hostels, Kormangala. 😁 <a href="https://t.co/SVpD89GSrR">pic.twitter.com/SVpD89GSrR</a></p>&mdash; Bridge Academy (@join_bridge) <a href="https://twitter.com/join_bridge/status/1119256369276706821?ref_src=twsrc%5Etfw">April 19, 2019</a></blockquote>',
  },
  {
    embed: '<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">One final picture from Nomadic Mixer 2019 organised by <a href="https://twitter.com/join_bridge?ref_src=twsrc%5Etfw">@join_bridge</a> and <a href="https://twitter.com/IndieHackers?ref_src=twsrc%5Etfw">@IndieHackers</a> at Tribe Theory Startup Hostels, Kormangala. 😁 <a href="https://t.co/SVpD89GSrR">pic.twitter.com/SVpD89GSrR</a></p>&mdash; Bridge Academy (@join_bridge) <a href="https://twitter.com/join_bridge/status/1119256369276706821?ref_src=twsrc%5Etfw">April 19, 2019</a></blockquote>',
  },
  {
    embed: '<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">One final picture from Nomadic Mixer 2019 organised by <a href="https://twitter.com/join_bridge?ref_src=twsrc%5Etfw">@join_bridge</a> and <a href="https://twitter.com/IndieHackers?ref_src=twsrc%5Etfw">@IndieHackers</a> at Tribe Theory Startup Hostels, Kormangala. 😁 <a href="https://t.co/SVpD89GSrR">pic.twitter.com/SVpD89GSrR</a></p>&mdash; Bridge Academy (@join_bridge) <a href="https://twitter.com/join_bridge/status/1119256369276706821?ref_src=twsrc%5Etfw">April 19, 2019</a></blockquote>',
  },
  {
    embed: '<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">One final picture from Nomadic Mixer 2019 organised by <a href="https://twitter.com/join_bridge?ref_src=twsrc%5Etfw">@join_bridge</a> and <a href="https://twitter.com/IndieHackers?ref_src=twsrc%5Etfw">@IndieHackers</a> at Tribe Theory Startup Hostels, Kormangala. 😁 <a href="https://t.co/SVpD89GSrR">pic.twitter.com/SVpD89GSrR</a></p>&mdash; Bridge Academy (@join_bridge) <a href="https://twitter.com/join_bridge/status/1119256369276706821?ref_src=twsrc%5Etfw">April 19, 2019</a></blockquote>',
  },
  {
    embed: '<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">One final picture from Nomadic Mixer 2019 organised by <a href="https://twitter.com/join_bridge?ref_src=twsrc%5Etfw">@join_bridge</a> and <a href="https://twitter.com/IndieHackers?ref_src=twsrc%5Etfw">@IndieHackers</a> at Tribe Theory Startup Hostels, Kormangala. 😁 <a href="https://t.co/SVpD89GSrR">pic.twitter.com/SVpD89GSrR</a></p>&mdash; Bridge Academy (@join_bridge) <a href="https://twitter.com/join_bridge/status/1119256369276706821?ref_src=twsrc%5Etfw">April 19, 2019</a></blockquote>',
  },
  {
    embed: '<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">One final picture from Nomadic Mixer 2019 organised by <a href="https://twitter.com/join_bridge?ref_src=twsrc%5Etfw">@join_bridge</a> and <a href="https://twitter.com/IndieHackers?ref_src=twsrc%5Etfw">@IndieHackers</a> at Tribe Theory Startup Hostels, Kormangala. 😁 <a href="https://t.co/SVpD89GSrR">pic.twitter.com/SVpD89GSrR</a></p>&mdash; Bridge Academy (@join_bridge) <a href="https://twitter.com/join_bridge/status/1119256369276706821?ref_src=twsrc%5Etfw">April 19, 2019</a></blockquote>',
  },
  {
    embed: '<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">One final picture from Nomadic Mixer 2019 organised by <a href="https://twitter.com/join_bridge?ref_src=twsrc%5Etfw">@join_bridge</a> and <a href="https://twitter.com/IndieHackers?ref_src=twsrc%5Etfw">@IndieHackers</a> at Tribe Theory Startup Hostels, Kormangala. 😁 <a href="https://t.co/SVpD89GSrR">pic.twitter.com/SVpD89GSrR</a></p>&mdash; Bridge Academy (@join_bridge) <a href="https://twitter.com/join_bridge/status/1119256369276706821?ref_src=twsrc%5Etfw">April 19, 2019</a></blockquote>',
  },
];

export default function Tweets() {
  return (
    <section id="tweets">
      <div className="container">
        <div className="communities-container row">
          {tweets.map(cur => (
            <TweetCard
              embed={cur.embed}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TweetCard({ embed }) {
  return (
    <div className="col-md-4">
      <div className="community-item card ">
        <div className="card-body">
          <div style={{ marginTop: "10px" }} className="card-text">
          <p className="description" dangerouslySetInnerHTML={{ __html: embed }} />
          </div>
        </div>
      </div>
    </div>
  );
}
