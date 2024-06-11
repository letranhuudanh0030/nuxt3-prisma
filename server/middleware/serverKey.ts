import { H3Event } from "h3";

export default eventHandler(async (event) => {
  const isAllowed = await protectRoute(event);

  if (!isAllowed) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "Unauthorized" })
    );
  }
});

async function protectRoute(event: H3Event): Promise<boolean> {
  const serverKey = event.headers.get("server-key");
  if (!serverKey) {
    return false;
  }

  return true;
}
