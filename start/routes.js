'use strict'

const Route = use('Route')

Route.get('images/:path', 'ImageController.show')
Route.get('/', ({ request }) => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/users', 'UserController.create');
Route.post('/sessions', 'SessionController.create');
Route.post('properties/:id/Images', 'ImageController.store').middleware('auth')

Route.resource('properties', 'PropertyController')
  .apiOnly()
  .middleware('auth')