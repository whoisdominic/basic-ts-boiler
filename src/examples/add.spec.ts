import { add } from "./add";

describe("Add test suite", () => {
  // check if 5 + 5 = 10
  it("check if 5 + 5 = 10", () => {
    expect(add(5, 5)).toEqual(10);
  });

  // check if -5 + 5 = 0
  it("check if -5 + 5 = 0", () => {
    expect(add(-5, 5)).toEqual(0);
  });
});
