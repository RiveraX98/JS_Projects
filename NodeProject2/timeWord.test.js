const { describe } = require("node:test");
const {
  timeWord,
  getHour,
  getMin,
  getTenthMin,
  createWord,
} = require("./timeWord");

describe("#timeword", () => {
  test("return the time in words", () => {
    expect(typeof timeWord).toBe("function");
    expect(timeWord("08:00")).toBe("Eight o'clock am");
    expect(timeWord("20:00")).toBe("Eight o'clock pm");
    expect(timeWord("00:00")).toBe("midnight");
    expect(timeWord("12:00").toBe("noon"));
    expect(timeWord("14:30").toBe("Two thirty  pm"));
  });
});
describe("getHour", () => {
  test("it should convert two digit string betwwen 00-24 into corresponding hour as a word", () => {
    expect(getHour("00")).toEqual("Twelve");
    expect(getHour("11")).toEqual("Eleven");
    expect(getHour("21")).toEqual("Nine");
  });
});

describe("getTenthMin", () => {
  test("it should convert two digit string into its word", () => {
    expect(getTenthMin("10")).toEqual("ten");
    expect(getTenthMin("12")).toEqual("twelve");
    expect(getTenthMin("50")).toEqual("fifty");
  });
});

describe("getMin", () => {
  test("it should convert two digit string into its word", () => {
    expect(getMin("5")).toEqual("five");
  });
});
