exports.seed = function (knex, Promise) {
  return knex('profiles').del()
    .then(function () {
      return Promise.all([
        knex('profiles').insert({user_id: 99901, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'}),
        knex('profiles').insert({user_id: 99902, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'}),
        knex('profiles').insert({user_id: 99903, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'}),
        knex('profiles').insert({user_id: 99904, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'}),
        knex('profiles').insert({user_id: 99905, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'}),
        knex('profiles').insert({user_id: 99906, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'}),
        knex('profiles').insert({user_id: 99907, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'}),
        knex('profiles').insert({user_id: 99908, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'}),
        knex('profiles').insert({user_id: 99909, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'}),
        knex('profiles').insert({user_id: 99910, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'}),
        knex('profiles').insert({user_id: 99911, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'}),
        knex('profiles').insert({user_id: 99912, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'}),
        knex('profiles').insert({user_id: 99913, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'}),
        knex('profiles').insert({user_id: 99914, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'}),
        knex('profiles').insert({user_id: 99915, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'}),
        knex('profiles').insert({user_id: 99916, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'}),
        knex('profiles').insert({user_id: 99917, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'}),
        knex('profiles').insert({user_id: 99918, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'}),
        knex('profiles').insert({user_id: 99919, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'}),
        knex('profiles').insert({user_id: 99920, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'}),
        knex('profiles').insert({user_id: 99921, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'}),
        knex('profiles').insert({user_id: 99922, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'}),
        knex('profiles').insert({user_id: 99923, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'}),
        knex('profiles').insert({user_id: 99924, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'}),
        knex('profiles').insert({user_id: 99925, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'}),
        knex('profiles').insert({user_id: 99926, image: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/puppy-cut-bichon-frise_5976be8a79056295.jpg?domain=cx.aos.ask.com'})
      ]);
    });
};
