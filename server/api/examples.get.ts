import example from "@/server/database/repositories/exampleRepository";

export default defineEventHandler(async () => {
  return await example.getExamples();
});
