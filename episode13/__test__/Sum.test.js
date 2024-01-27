import { sum } from "../Sum";

test("Test sum of two numbers", () => {
  const result = sum(5, 6);

  //Assertion
  expect(result).toBe(11);
});
