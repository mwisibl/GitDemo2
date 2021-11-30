var r=document.querySelector(".red");
var b=document.querySelector(".blue");
var g=document.querySelector(".green");
var p=document.querySelector(".pink");
var a=document.querySelector(".aqua");
var y=document.querySelector(".yellow");
var c=document.querySelector(".center");

var redColor=window.getComputedStyle(r).backgroundColor;
var blueColor=window.getComputedStyle(b).backgroundColor;
var greenColor=window.getComputedStyle(g).backgroundColor;
var pinkColor=window.getComputedStyle(p).backgroundColor;
var aquaColor=window.getComputedStyle(a);
var yelloColor=window.getComputedStyle(y);

r.addEventListener("mouseover",()=>{
    c.style.background=redColor;
})

b.addEventListener("click",()=>{
    document.body.style.background=blueColor;
   // c.style.background=blueColor;
})