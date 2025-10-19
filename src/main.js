import "./style.css";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Hello My Website!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p>
      Exciting things are coming soon!
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
