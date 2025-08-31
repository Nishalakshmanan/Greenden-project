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