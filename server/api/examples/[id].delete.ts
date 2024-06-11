import example from "@/server/database/repositories/exampleRepository";

export default eventHandler(async (event) => {
  const id = event.context.params!.id;
  return await example.deleteExample(parseInt(id));
});
