let a = "block";
let b = "none";
document.getElementsByClassName("container")[0].style.display=a;
document.getElementsByClassName("menu-page1")[0].style.display = b;




function onClickMenu(){
  document.getElementById("menu").classList.toggle("icon");
  if(a=="block"){
    document.getElementsByClassName("container")[0].style.display = b;
    document.getElementsByClassName("menu-page1")[0].style.display = a;
    a = "none"; 
    b = "block";
  }
  else{
    document.getElementsByClassName("container")[0].style.display = b;
    document.getElementsByClassName("menu-page1")[0].style.display = a;
    a= "block" ;
    b = "none";
  }
  // document.getElementById("nav").classList.toggle("change");
}