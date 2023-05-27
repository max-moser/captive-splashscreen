// import our custom CSS
import "../scss/styles.scss";

// import all of bootstrap's JS
import * as bootstrap from "bootstrap";

const button = document.getElementById("button");
button.addEventListener("click", () => {
  alert("dang, you actually clicked me");
});
