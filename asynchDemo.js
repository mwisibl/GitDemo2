var One=()=>{
    console.log("One");
}

var Two=()=>{
    console.log("Two");
    setTimeout(()=>(console.log("hello")),3000);
}

var Three=()=>{
    console.log("Three");
}

One();
Two();
Three();