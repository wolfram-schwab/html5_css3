(
  function init() {
    document.getElementById("b01")
            .addEventListener("click", flex01);
    document.getElementById("b02")
    .addEventListener("click", flex02);
    document.getElementById("b03")
    .addEventListener("click", flex03);
}
)();

function flex01() {
  document.querySelector("#flex")
          .setAttribute("style", "display:flex;flex-direction:row");
}

function flex02() {
  document.querySelector("#flex")
          .setAttribute("style", "display:flex;flex-direction:column");
}

function flex03() {
  document.querySelector("#flex")
          .setAttribute("style", "display:flex;flex-direction:row-reverse;");
}
