const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("it is a string", () => {
    const num = addCommas(200000);
    expect(typeof num).toBe("string");
  });
  test("it contains correct commas", () => {
    const num = addCommas(200000000);
    expect(num).toEqual("200,000,000");
  });
  test("it contains correct commas with decimal", () => {
    const num = addCommas(200000000.934);
    expect(num).toEqual("200,000,000.934");
  });
});
