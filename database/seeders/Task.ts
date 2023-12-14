import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Task from "App/Models/Task";

export default class TaskSeeder extends BaseSeeder {
  public async run () {
    await Task.createMany([
      {
        title: 'estudiar ingles',
        description: 'Adventure, Drama, Sci-Fi',
        state: 'done'
      },
      {
        title: 'cuidar perro',
        description: 'Adventure, Drama, Sci-Fi',
        state: 'done'
      },
      {
        title: 'cortar pasto',
        description: 'Adventure, Drama, Sci-Fi',
        state: 'undone'
      },
    ])
    // Write your database queries inside the run method
  }
}
