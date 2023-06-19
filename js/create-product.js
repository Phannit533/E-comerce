let getButtonAdd = document.querySelector("#add-product-button");
let dialog = document.querySelector("#dialog");

//===========================DATAS OF PRODUCTS =========================//
let products = [
  {img: "../images/1.png",name: "Friut lovers",price: "$10", type: "Pizza"},
  {img: "../images/2.png",name: "Cheese",price: "$10", type: "Pizza"},
  {img: "../images/3.png",name: "Greek",price: "$10", type: "Pizza"},
  {img: "../images/4.png",name: "Ham",price: "$10", type: "Pizza"},
  {img: "../images/5.png",name: "Hot & Spicy",price: "$10", type: "Pizza"},
  {img: "../images/6.png",name: "meat",price: "$10", type: "Pizza"},
  {img: "../images/7.png",name: "Monako",price: "$10", type: "Pizza"},
  {img: "../images/8.png",name: "Neapolitan",price: "$10", type: "Pizza"},
  {img: "../images/16.png",name: "Turkey burger",price: "$10", type: "Burger"},
  {img: "../images/17.png",name: "Portobello",price: "$10", type: "Burger"},
  {img: "../images/18.png",name: "Veggie",price: "$10", type: "Burger"},
  {img: "../images/19.png",name: "Wild salmon",price: "$10", type: "Burger"},
  {img: "../images/35.png",name: "Fruits",price: "$10", type: "Cake"},
  {img: "../images/35.png",name: "Fruits",price: "$10", type: "Cake"},
  {img: "../images/35.png",name: "Fruits",price: "$10", type: "Cake"},
  {img: "../images/35.png",name: "Fruits",price: "$10", type: "Cake"},
  {img: "../images/48.png",name: "Heineken",price: "$10", type: "Drinks"},
  {img: "../images/49.png",name: "Tiger",price: "$10", type: "Drinks"},
  {img: "../images/51.png",name: "Chang",price: "$10", type: "Drinks"},
  {img: "../images/52.png",name: "Singha",price: "$10", type: "Drinks"},
  {img: "../images/53.png",name: "Blue berry",price: "$10", type: "Drinks"},
  {img: "../images/54.png",name: "Strawberry",price: "$10", type: "Drinks"},
];


//============================Hide===========================================//
function hide(event) {
  event.style.display = 'none';
}
//============================Show===========================================//
function show(event) {
  event.style.display = 'block';
}



let i = 0;
let table = document.querySelector("#table");
function displayProducts() {
  let myTbody = document.querySelector(".add-tbody");
  if (myTbody != null) {
    myTbody.remove();
  }
  let tbody = document.createElement("tbody");
  tbody.className = "add-tbody";

  //============================= CREATE TABLE =============================//
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    // console.log(product)
    let createTr = document.createElement("tr");
    createTr.dataset.index = i;
    // console.log(createTr)
    let createTd = document.createElement("td");
    createTd.className = "image";
    createTr.appendChild(createTd);
    let image = document.createElement("img");
    
    image.src = product.img;
    createTd.appendChild(image)
    let nameProduct = document.createElement("td");
    nameProduct.textContent = product.name;
    createTr.appendChild(nameProduct);
    let price = document.createElement("td");
    price.textContent = product.price;
    createTr.appendChild(price);
    let td_edit = document.createElement("td");
    td_edit.className = "td_edit";
    let editImage = document.createElement("img");
    editImage.className = "edit_img";
    editImage.addEventListener("click", editProduct);
    editImage.src = "../images/edit.png";
    td_edit.appendChild(editImage);
    createTr.appendChild(td_edit);
    let td_delete = document.createElement("td");
    td_delete.className = "delete";
    deleteImage = document.createElement("img");
    deleteImage.addEventListener("click",removeProduct);
    deleteImage.className = "delete_img"
    deleteImage.src = "../images/delete.png";
    td_delete.appendChild(deleteImage);
    createTr.appendChild(td_delete)
    tbody.appendChild(createTr);
  }
  table.appendChild(tbody);
}
displayProducts();



//============================SAVE DATAS FROM LOCAL STORAGE============================//
function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
  console.log(localStorage.setItem)
}

//============================GET TADAS FROM LOCAL STORAGE============================//
function loadProducts() {
  let productStorage = JSON.parse(localStorage.getItem("products"));
  if (productStorage !== null) {
    products = productStorage;
  }
}
//============================CREATE PRODUCT=============================//
function create() {
  hide(dialog); 
  document.querySelector("#create").textContent ="Create";
  let dic = {};
  let inputOfImage = document.querySelector("#input-image");
  let inputOfName = document.querySelector("#input-name-product");
  let inputOfPrice = document.querySelector("#input-price-product");
  let inputOfType = document.querySelector("#select");
  dic.img = inputOfImage.value;
  dic.name = inputOfName.value;
  dic.price = inputOfPrice.value;
  dic.type = inputOfType.value;
  products.push(dic);
  saveProducts();
  displayProducts();
}

//============================REMOVE PRODUCTS============================//
function removeProduct(event){
  let index = event.target.parentElement.parentElement.dataset.index;
  let text = "Are you sure you want to remove this product?";
  if (confirm(text)==true){
    products.splice(index, 1);
  }
  saveProducts();
  displayProducts();
}

//============================
function editProduct(event){
  show(dialog);
  document.querySelector("#create").textContent = "Edit";

  let index = event.target.parentElement.parentElement.dataset.index;
  let inputOfImage = document.querySelector("#input-image");
  let inputOfName = document.querySelector("#input-name-product");
  let inputOfPrice = document.querySelector("#input-price-product");
  let inputOfTypes = document.querySelector("#select");
  inputOfImage.value = products[index].img;
  inputOfName.value = products[index].name;
  inputOfPrice.value = products[index].price;
  inputOfTypes.value = products[index].type;

  products.splice(index, 1);
  saveProducts();
}






//------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------//
function addProduct() {
  show(dialog);
}

getButtonAdd.addEventListener("click", addProduct);
//----------------------------------------------------------------------------------------//
//
function Cancel() {
  hide(dialog)
}


// saveProducts();
loadProducts();
displayProducts();