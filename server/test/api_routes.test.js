const supertest = require("supertest");
const { expect } = require("chai");
const app = require("../index");

const request = supertest(app);

describe("Block Routes:", () => {
  it("should get the basic route", async () => {
    const response = await request.get("/");
    expect(response.statusCode).to.equal(200);
  });

  it("should get the 404 route", async () => {
    const response = await request.get("/xyz");
    expect(response.statusCode).to.equal(404);
  });

  it("should get all blocks", async () => {
    const response = await request.get("/blocks");
    expect(response.status).to.equal(200);
    expect(response.body.data).to.be.instanceOf(Array);
    const data = response.body.data[0];
    expect(data).to.have.keys(
      "id",
      "name",
      "description",
      "createdAt",
      "updatedAt"
    );
    expect(data.id).to.have.lengthOf(12);
  });

  let testBlock = {
    id: "",
    name: "Test Block XYZ",
    description: "Test Block description",
  };

  it("should create a new block", async () => {
    const response = await request.post("/blocks").send({
      name: testBlock.name,
      description: testBlock.description,
    });
    expect(response.status).to.equal(201);
    const data = response.body;
    expect(data).to.have.keys(
      "id",
      "name",
      "description",
      "createdAt",
      "updatedAt"
    );
    expect(data.name).to.equal(testBlock.name);
    expect(data.description).to.equal(testBlock.description);
    testBlock.id = data.id;
  });

  it("should get one block", async () => {
    const response = await request.get("/blocks/" + testBlock.id);
    expect(response.status).to.equal(200);
    const data = response.body.data;
    expect(data.id).to.equal(testBlock.id);
    expect(data.name).to.equal(testBlock.name);
    expect(data.description).to.equal(testBlock.description);
  });

  it("should update a block by id", async () => {
    const response = await request.put("/blocks/" + testBlock.id).send({
      name: "Test Block XYZZ",
      description: "Test Block description XYZZ",
    });
    expect(response.status).to.equal(200);
    const data = response.body.data[1][0];
    expect(data.name).to.equal("Test Block XYZZ");
    expect(data.description).to.equal("Test Block description XYZZ");
  });

  it("should delete a block by id", async () => {
    const response = await request.delete("/blocks/" + testBlock.id);
    expect(response.status).to.equal(204);
  });
});
