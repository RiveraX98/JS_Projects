const { sqlForPartialUpdate } = require("./sql");
const db = require("../db.js");
const app = require("../app");

beforeEach(async () => {
  const res = await db.query(`INSERT INTO users(username,
        password,
        first_name,
        last_name,
        email)
    VALUES ('u1', 'password', 'fname', 'lname', 'u1@email.com')`);
});
afterEach(async () => {
  await db.query("DELETE FROM users");
});

describe("sqlForPartialUpdate", function () {
  test("returns object with sql placeholder and its values", function () {
    const data = sqlForPartialUpdate(
      {
        first_name: "testfname",
        email: "test@email.com",
      },
      {
        firstName: "first_name",
        email: "email",
      }
    );

    expect(data).toEqual({
      setCols: '"first_name"=$1, "email"=$2',
      values: ["testfname", "test@email.com"],
    });
  });
});
