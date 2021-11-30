var x;
fetch("https://api.chucknorris.io/jokes/random")
.then((response)=> {return response.json();})
.then((data)=>{x=data.value;document.body.innerHTML = ''; document.write(x);})
.catch()

console.log(Math.max(10,20));

window.open("http://www.google.com");