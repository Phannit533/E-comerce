
let datas = JSON.parse(localStorage.getItem("products"));



//============================Hide===========================================//
function hide(event) {
    event.style.display = 'none';
  }
  //============================Show===========================================//
  function show(event) {
    event.style.display = '';
  }
let content = document.querySelector(".content");
let title = document.querySelector(".title");
let container = document.querySelector(".list-items");
function displayProduct(){
   for(let index in datas){
     

    let card = document.createElement("div");
    card.className = "card";
    card.dataset.index = index;
    let image = document.createElement("img");
    image.src=datas[index]["img"];
    image.addEventListener("click", showDetailsProduct);
    let nameOfProduct = document.createElement("h3");
    nameOfProduct.textContent = datas[index]["name"]
    let priceOfProduct = document.createElement("p");
    priceOfProduct.textContent = datas[index]["price"];
    let cardFooter = document.createElement("div");
    cardFooter.className = "card-footer";
    let star = document.createElement("div");
    star.className = "icons"
    for (let i = 0; i < 5; i++) {
        let i = document.createElement("i");
        i.className = "material-icons";
        i.textContent ="star"
        star.appendChild(i);
    };
    cardFooter.appendChild(star)
    
    let buttonBuy = document.createElement("button");
    buttonBuy.className = "buy";
    buttonBuy.textContent = "Add cart";
    buttonBuy.dataset.index = index;
    // console.log(buttonBuy);
    // buttonBuy.addEventListener("click", addCart);

    cardFooter.appendChild(buttonBuy);
    
    card.appendChild(image);
    card.appendChild(nameOfProduct);
    card.appendChild(priceOfProduct);
    card.appendChild(cardFooter);
    container.appendChild(card);
   }
 }
displayProduct();










//================================================================//

function showDetailsProduct(event){
    hide(container);
    hide(title);
    hide(content);
    let detailProduct = document.querySelector("#detail-product");
    
    let index =event.target.parentElement.dataset.index;
    let imageOfDetail = document.createElement("img");
    imageOfDetail.src= datas[index]["img"];
    detailProduct.appendChild(imageOfDetail);
    let detailText = document.createElement("div");
    detailText.className = "detail-text";

    let nameOfDetail = document.createElement("h3");
    nameOfDetail.textContent = datas[index]["name"];
    detailText.appendChild(nameOfDetail);

    let priceOfDetail = document.createElement("p");
    priceOfDetail.textContent =datas[index]["price"];
    detailText.appendChild(priceOfDetail);
    
    let iconOfDetail = document.createElement("div");
    iconOfDetail.className =  "iconsOfDetail";
    for (let i = 0; i < 5; i++) {
        let i = document.createElement("i");
        i.className = "material-icons";
        i.textContent ="star"
        iconOfDetail.appendChild(i);
    };
    detailText.appendChild(iconOfDetail);

    let textOfDetail = document.createElement("p");
    textOfDetail.textContent = "Fast food is a type of mass-produced food designed for commercial resale.";
    detailText.appendChild(textOfDetail);

    let buttonOfDetail = document.createElement("div");
    buttonOfDetail.className = "detail-footer";
    let buttonBack = document.createElement("button");
    buttonBack.id = "back";
    buttonBack.addEventListener("click",buttonOfBack);
    buttonBack.textContent= "Back";
    buttonOfDetail.appendChild(buttonBack);

    let buttonOfAddCart = document.createElement("button");
    buttonOfAddCart.id = "add-cart";
    buttonOfAddCart.textContent = "Add cart";
    buttonOfDetail.appendChild(buttonOfAddCart);
    detailText.appendChild(buttonOfDetail);
    detailProduct.appendChild(detailText);

}
 //=============================================================//
function buttonOfBack(){
    show(container)
    document.querySelector("#detail-product").style.display="none";
    location.reload();
   
}



//================================================================//
let getSearch = document.querySelector("#search");

getSearch.addEventListener("keyup", researchProduct);
console.log(getSearch);

let card = document.querySelectorAll(".card");

function researchProduct(){
    for (let i in card){
        let word = card[i].children[1].textContent.toLowerCase();
        console.log(word);
        let valueOfSearch = getSearch.value.toLowerCase();
        if (word.indexOf(valueOfSearch)>-1){
            card[i].style.display = "block";
        }
        else{
            card[i].style.display = "none";
        }
        
    }
}
researchProduct();

    

  



displayProducts();



