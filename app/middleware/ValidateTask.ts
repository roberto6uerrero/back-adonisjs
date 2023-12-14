import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator';
import * as _ from 'lodash';


export default class ValidateTask {
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
    const taskSchema = schema.create({
      title: schema.string({}, [
        rules.maxLength(255)
      ]),
      description: schema.string({}, [
        rules.maxLength(500)
      ]),
      state: schema.enum(['pending', 'completed'] as const, [
      ]),
    });

    const messages = {
      required: 'El {{ field }} es obligatorio.',
      maxLength: 'La longitud máxima para {{ field }} es de {{ options.maxLength }} caracteres.',
      enum: 'El {{ field }} es obligatorio y debe ser \'pending\' o \'completed\'.',
    };

    try {
      await request.validate({
        schema: taskSchema,
        messages: messages,
      });
      await next();
    } catch (error) {
      response.badRequest(error.messages)
    }
  }
}
