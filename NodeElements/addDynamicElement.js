var courses=[
{name:"Java Core", price:2.5},
{name:"Java Script", price:1.5},
{name:"React JS", price:5},
{name:"Angular JS", price:7},
];

var loadCourse=()=>{
    var mdiv=document.querySelector(".mainDiv");
    var ul=document.querySelector(".ulListClass");
    ul.innerHTML="";
    courses.forEach(course => {
        var li=document.createElement("li");
        li.className="listClass"
        var c=document.createElement("span");
        c.textContent=course.name;
        c.className="courseName"
        var cp=document.createElement("span");
        cp.className="coursePrice"
        cp.textContent=course.price;
        li.appendChild(c);li.appendChild(cp);
        ul.appendChild(li);
        mdiv.appendChild(ul);
    });
}
window.addEventListener("load",loadCourse());

document.querySelector(".btnClass").addEventListener("click",()=>
{
    
    
    courses.sort((a,b)=>(a.price-b.price));
   
    loadCourse();
}

);

document.querySelector(".btnClass1").addEventListener("click",()=>
{
    
    
    courses.sort((a,b)=>(b.price-a.price));
   
    loadCourse();
}

)