const supertest = require("supertest");
const app = require("../index");

const request = supertest(app);

describe("Basic routes", () => {
  it("should get the basic route", async (done) => {
    const response = await request.get("/");
    expect(response.statusCode).toEqual(200);
    done();
  });
});

describe("Block routes", () => {
  it("should get all blocks", async (done) => {
    const response = await request.get("/blocks");
    expect(response.statusCode).toEqual(200);
    expect(response.body.data).toBeDefined();
    expect(true).toBe(true);
    done();
  });
});
