// const { expect } = require("chai");
const supertest = require("supertest");
const app = require("../index");

const request = supertest(app);

describe("Block routes", () => {
  it("should get all blocks", async (done) => {
    const response = await request.get("/blocks");
    expect(response.statusCode).toEqual(200);
    expect(response.body.data).toBeDefined();
    done();
  });
});
