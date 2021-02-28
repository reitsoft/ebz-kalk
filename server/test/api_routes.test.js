const supertest = require("supertest");
const app = require("../index");

const request = supertest(app);

describe("Routes", () => {
  it("should get the basic route", async (done) => {
    const response = await request.get("/");
    expect(response.statusCode).toEqual(200);
    done();
  });

  it("should get the 404 route", async (done) => {
    // TODO Test schreiben
    expect(true).toBe(true);
    done();
  });

  it("should get all blocks", async (done) => {
    const response = await request.get("/blocks");
    expect(response.statusCode).toEqual(200);
    expect(response.body.data).toBeDefined();
    done();
  });

  let block_id;
  it("should create a new block", async (done) => {
    const response = await request.post("/blocks").send({
      name: "Test Block56",
      description: "Test Block description",
    });
    expect(response.statusCode).toEqual(201);
    // expect(response.body).toBeDefined();
    // console.log(response.body);
    // console.log({TestBlockResponse: response})
    // expect(response.statusCode).toEqual(201);

    // expect(response.body.data.name).toBe("Test Block");
    // expect(response.body.data.description).toBe("Test Block description");
    done();
  });

  it("should get one block", async (done) => {
    // TODO Test schreiben
    expect(true).toBe(true);
    done();
  });

  it("should update one block", async (done) => {
    // TODO Test schreiben
    expect(true).toBe(true);
    done();
  });

  it("should delete one block", async (done) => {
    // TODO Test schreiben
    expect(true).toBe(true);
    done();
  });
});
