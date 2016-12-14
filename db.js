module.exports = {
  addNewUser:addNewUser,
  postBlog:postBlog
}


var development = require('./knexfile').development
var knex = require('knex')(development)




function addNewUser (name, email, image) {
  return knex('users')
    .insert({name:name, email:email})
    .then(id =>
      { return knex('profiles')
    .insert({user_id:id[0], image:image})
  })
}


function postBlog (title) {
  return knex('users')
    .join('posts', 'users.id', '=', 'posts.user_id')
    .select('users.name', 'posts.title')
    .where('users.id', Number(req.params.id))
}
