var One=()=>{
    return "One";
}

var Two=()=>{ 
    return new Promise((resolve,reject)=>
    {
    setTimeout(() => {
     resolve("Two")   
    }, 3000);
});
}



var Three=()=>{
     return "Three";
}

var callMethod=async ()=>{
   console.log(One());
   console.log(await Two());
   console.log(Three());
}

callMethod();