import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()

  return report.healthy
    ? response.ok(report)
    : response.badRequest(report)
})

Route.get('tasks', 'TaskController.index')
Route.post('tasks', 'TaskController.create').middleware('validateTask')
Route.get('tasks/:id', 'TaskController.show') //
Route.put('tasks/:id', 'TaskController.update')
Route.delete('tasks/:id', 'TaskController.delete')

// Route
//   .resource('tasks', 'TaskController')
//   .only(['index', 'show', 'create', 'update'])
//   .apiOnly()
