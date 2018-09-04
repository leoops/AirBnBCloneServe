'use strict'

const Route = use('Route')

Route.get('/', ({ request }) => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/user', 'UserController.create');
Route.post('/sessions', 'SessionController.create');