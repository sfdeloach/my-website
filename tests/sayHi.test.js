import { sayHi } from "../src/sayHi";

test("sayHi function returns 'hello world'", () => {
  expect(sayHi()).toBe("hello world");
});
