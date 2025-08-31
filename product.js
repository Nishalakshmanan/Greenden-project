//selecting sidenavbar and menuicon
var sidenav=document.getElementById("sidenav");
var menuicon=document.getElementById("menuicon");
menuicon.addEventListener("click",function(){
sidenav.style.right="0";
})
var close=document.getElementById("close");
close.addEventListener("click",function(){
sidenav.style.right="-50%";    
})
//product search functionality
var productContainer=document.getElementById("product-container");
var search=document.getElementById("search");
var productList=productContainer.querySelectorAll("div");
search.addEventListener("input",function(){
    var enteredvalue=event.target.value.toUpperCase();
    productList.forEach((product)=>{
        var productname=product.querySelector("h1").textContent.toUpperCase();
        if(productname.indexOf(enteredvalue)>=0){
            product.style.display="block"
        }
        else{
            product.style.display="none"
        }
    })
})