let login = document.querySelector(".cantainer");
//============================Hide===========================================//
function hide(event) {
    event.style.display = 'none';
  }
  //============================Show===========================================//
  function show(event) {
    event.style.display = '';
  }  

let h1 = document.createElement("h1");
h1.textContent ="Login your account";
login.appendChild(h1);
let p = document.createElement("p");
p.textContent ="Please fill in this form to create an account";
login.appendChild(p);
let email = document.createElement("label");
let 
