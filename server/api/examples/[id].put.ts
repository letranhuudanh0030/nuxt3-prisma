import example from "@/server/database/repositories/exampleRepository";

export default eventHandler(async (event) => {
  const id = event.context.params!.id;
  const body = await readBody(event);
  return await example.updateExample(body, parseInt(id));
});
