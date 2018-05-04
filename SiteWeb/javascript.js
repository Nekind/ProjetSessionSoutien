window.onload = function () {

  document.getElementById("wrapper1").addEventListener("click", toggle);
  
  document.getElementById("wrapper2").addEventListener("click", toggle2);

}

function toggle() {

  document.getElementById("paragraphe1id").classList.toggle("hidden");

}

function toggle2() {

  document.getElementById("paragraphe2id").classList.toggle("hidden");

}
