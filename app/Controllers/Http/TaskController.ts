// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from "App/Models/Task"
export default class TaskController {
  public async index () {
    const tasks = await Task.all()
    return tasks
  }

  public async show ({ params }) {
    const task = await Task.find(params.id)
    return task
  }

  public async create({ request }) {
    const data = request.only(['title', 'description', 'state'])
    const task = await Task.create(data)
    return task
  }

  public async update({ params, request }) {
    // TODO: Validar id, si no throw new error
    const task = await Task.findOrFail(params.id)
    const data = request.only(['title', 'description', 'state'])
    task.merge(data)
    await task.save()
    return task
  }

  public async delete({ params }) {
    const task = await Task.findOrFail(params.id)
    await task.delete()
    return { message: 'Task deleted successfully' }
  }

}
