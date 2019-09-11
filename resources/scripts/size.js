function display() {
  document.getElementById("width")
          .textContent
          = window.innerWidth;;
  document.getElementById("height")
          .textContent 
          = window.innerHeight; 
}

( function init() {
    window.addEventListener("resize", (event) => { display()});
    display();
  })()
