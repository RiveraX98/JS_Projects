"use strict";

const request = require("supertest");
const Job = require("../models/job");

const db = require("../db");
const app = require("../app");

const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  u1Token,
  u3Token,
} = require("./_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

const getJob_ = async (filters, values) => {
  let job = await Job.search(filters, values);
  console.log("INSIDETHISS", job[0]);
  return job[0];
};

// async function getJob_(filters, values) {
//   let job = await Job.search(filters, values);
//   console.log("INSIDE", job);
//   return job;
// }

const testJob1 = getJob_(["title = $1"], ["j1"]);
const testJob2 = getJob_(["title = $1"], ["j2"]);

/************************************** POST /jobs */

describe("POST /jobs", function () {
  const newJob = {
    title: "new",
    salary: 1000,
    equity: "0",
    companyHandle: "C1",
  };

  test("ok for admins", async function () {
    const resp = await request(app)
      .post("/jobs")
      .send(newJob)
      .set("authorization", `Bearer ${u3Token}`);
    expect(resp.statusCode).toEqual(201);
    expect(resp.body).toEqual({
      job: newJob,
    });
  });

  test("bad request with missing data", async function () {
    const resp = await request(app)
      .post("/jobs")
      .send({
        title: "new",
        equity: 0,
      })
      .set("authorization", `Bearer ${u3Token}`);
    expect(resp.statusCode).toEqual(400);
  });

  test("bad request with invalid data", async function () {
    const resp = await request(app)
      .post("/jobs")
      .send({
        ...newJob,
        salary: "oneHundredThousand",
      })
      .set("authorization", `Bearer ${u3Token}`);
    expect(resp.statusCode).toEqual(400);
  });

  test("unauth for normal user ", async function () {
    const resp = await request(app)
      .post("/users")
      .send({ newJob })
      .set("authorization", `Bearer ${u1Token}`);
    expect(resp.statusCode).toEqual(401);
  });
});

// /************************************** GET /jobs */

describe("GET /jobs", function () {
  test("ok for anon", async function () {
    const resp = await request(app).get("/jobs");
    expect(resp.body).toEqual({
      jobs: [
        {
          id: `${testJob1.id}`,
          title: "j1",
          salary: 1000,
          equity: "0",
          companyHandle: "c1",
        },
        {
          id: `${testJob2.id}`,
          title: "j2",
          salary: 2000,
          equity: "0",
          companyHandle: "c2",
        },
      ],
    });
  });
});

// /************************************** GET /jobs/:id */

describe("GET /jobs/:id", function () {
  test("works for anon", async function () {
    const resp = await request(app).get(`/jobs/${testJob1.id}`);
    expect(resp.body).toEqual({
      jobs: {
        title: "j1",
        salary: 1000,
        equity: "0",
        companyHandle: "c1",
      },
    });
  });

  test("not found for no such jobs", async function () {
    const resp = await request(app).get(`/jobs/99999999`);
    expect(resp.statusCode).toEqual(404);
  });
});

/************************************** PATCH /jobs/:id*/

describe("PATCH /jobs/:id", function () {
  test("works for admins", async function () {
    const resp = await request(app)
      .patch(`/jobs/${testJob1.id}`)
      .send({
        title: "J1-new",
      })
      .set("authorization", `Bearer ${u3Token}`);
    expect(resp.body).toEqual({
      job: {
        id: 4,
        title: "J1-new",
        salary: 1000,
        equity: "0",
        companyHandle: "c1",
      },
    });
  });

  test("unauth for anon", async function () {
    const resp = await request(app).patch(`/jobs/${testJob1.id}`).send({
      title: "J1-new",
    });
    expect(resp.statusCode).toEqual(401);
  });

  test("unauth for normal user", async function () {
    const resp = await request(app)
      .patch(`/jobs/${testJob1.id}`)
      .send({
        title: "J1-new",
      })
      .set("authorization", `Bearer ${u1Token}`);
    expect(resp.statusCode).toEqual(401);
  });

  test("bad request on invalid data", async function () {
    const resp = await request(app)
      .patch(`jobs/${testJob1.id}`)
      .send({
        salary: "alot",
      })
      .set("authorization", `Bearer ${u3Token}`);
    expect(resp.statusCode).toEqual(400);
  });
});

// /************************************** DELETE /jobs/:id */

describe("DELETE /jobs/:id", function () {
  test("works for admins", async function () {
    const resp = await request(app)
      .delete(`/jobs/${testJob1.id}`)
      .set("authorization", `Bearer ${u3Token}`);
    expect(resp.body).toEqual({ deleted: "j1" });
  });

  test("unauth for anon", async function () {
    const resp = await request(app).delete(`/jobs/${testJob1.id}`);
    expect(resp.statusCode).toEqual(401);
  });

  test("unauth for normal users", async function () {
    const resp = await request(app)
      .delete(`/jobs/${testJob1.id}`)
      .set("authorization", `Bearer ${u1Token}`);
    expect(resp.statusCode).toEqual(401);
  });

  test("not found for no such company", async function () {
    const resp = await request(app)
      .delete(`/jobs/99999`)
      .set("authorization", `Bearer ${u3Token}`);
    expect(resp.statusCode).toEqual(404);
  });
});
