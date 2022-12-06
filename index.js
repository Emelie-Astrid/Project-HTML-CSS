function myFunction() {
    let x = document.querySelector("#myTopnav");
    if (x.className === "navigation") {
      x.className += " responsive";
    } else {
      x.className = "navigation";
    }
  }