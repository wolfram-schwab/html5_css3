(
  function init() {
    document.getElementById("b04")
    .addEventListener("click", flex04);
    document.getElementById("b05")
    .addEventListener("click", flex05);
    document.getElementById("b06")
    .addEventListener("click", flex06);
    document.getElementById("b07")
    .addEventListener("click", flex07);
}
)();

function flex04() {
  document.querySelectorAll("section")
          .forEach(e => { e.setAttribute("style", "flex-basis:100px;");});
}

function flex05() {
  document.querySelectorAll("section")
          .forEach(e => { e.setAttribute("style", "lex-basis:500px;");});
}

function flex06() {
  document.querySelectorAll("section")
          .forEach(e => { e.setAttribute("style", "flex:1");});
}

function flex07() {
  flex06();
  document.querySelector("#s05")
          .setAttribute("style", "flex:10");
}
