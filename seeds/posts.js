
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('posts').insert({title: 'Thing Explainer', content: 'happy', user_id:99901 }),
        knex('posts').insert({title: 'The GNU Manifesto', content: 'walking', user_id:99902}),
        knex('posts').insert({title: 'GNU Emacs Manual', content: 'running', user_id:99903 })
      ]);
    });
};
