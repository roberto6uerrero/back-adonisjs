import { schema, rules } from '@ioc:Adonis/Core/Validator';

const TaskSchema = schema.create({
  title: schema.string({}, [
    rules.maxLength(255),
    rules.required(),
  ]),
  description: schema.string({}, [
    rules.maxLength(500),
    rules.required(),
  ]),
  state: schema.enum(['pending', 'completed'] as const, [
    rules.required(),
  ]),
});

export default TaskSchema;