import "./style.css";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <img class="photo" src="images/teddy_number_1.jpeg" alt="Teddy is better than Cookie." />
    <h1>Welcome to my website!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p>
      <pre>if(cookie < teddy) // infinite loop</pre>
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
