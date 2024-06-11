import example from "@/server/database/repositories/exampleRepository";
import { validate } from "../app/services/exampleService";

export default eventHandler(async (event) => {
  const body = await readBody(event);
  const validation = await validate(body);
  if (validation.size > 0) {
    const errors = JSON.stringify(Object.fromEntries(validation));
    return sendError(event, createError({ statusCode: 400, data: errors }));
  }
  return await example.createExample(body);
});
