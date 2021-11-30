var counter=document.querySelector(".counters");
console.log(counter.innerHTML);
var count=0;
setInterval(()=>{
if(count<1000)
{
 counter.innerHTML=count;
 console.log(counter.innerHTML); 
 count++;
}
},1);

var t=document.querySelector(".message");
setTimeout(() => {
    t.innerHTML="Followers on Instagram";
}, 5000);