/**
 * @jest-environment jsdom
 */

import { setupCounter } from "../src/counter";

test("counter function returns 0", () => {
  const button = document.createElement("button");
  setupCounter(button);
  expect(button.innerHTML).toBe("count is 0");
});

test("counter function returns 1", () => {
  const button = document.createElement("button");
  setupCounter(button);
  button.click();
  expect(button.innerHTML).toBe("count is 1");
});

test("counter function returns 12", () => {
  const button = document.createElement("button");
  setupCounter(button);

  for (let i = 0; i < 12; i++) {
    button.click();
  }

  expect(button.innerHTML).toBe("count is 12");
});
