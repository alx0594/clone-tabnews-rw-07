import { createRouter } from "next-connect";
import controller from "infra/controller.js";

const router = createRouter();

router.get(getHandle);

export default router.handler(controller.errorHandlers);

function getHandle(request, response) {
  response.status(200).json({});
}
