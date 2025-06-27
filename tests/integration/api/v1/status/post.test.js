import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

describe("POST /api/v1/status", () => {
  describe("Usuário anônimo", () => {
    describe("Buscando status corrente do sistema", () => {
      test("Deveria retornar método não permitido", async () => {
        const response = await fetch("http://localhost:3000/api/v1/status", {
          method: "POST",
        });
        expect(response.status).toBe(405);

        const responseBody = await response.json();
        expect(responseBody.name).toEqual("MethodNotAllowed");
        expect(responseBody.action).toBeDefined();
      });
    });
  });
});
