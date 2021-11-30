function add(a,b)
{
    return a+b;
}

console.log(add(10,10));
console.log(add(100,10,100)); ///3  param is ignored
console.log(add(...[10,10])); //spread operator 
console.log(add(...[2,2,2])) //ignores the third element


function restAdd(...args)
{
    let sum=0;
    args.forEach(e => {
        
        sum=sum+e
    });
    return sum;
}

console.log(restAdd(...[10,10,10,10]));

function restAdd2(p,q, ...args)
{
    console.log(`${p} and ${q}`);
    let mul=p*q;
    let sum=0;
    args.forEach(element => {
        sum=sum+element;
    });
    return[mul,sum];
}

console.log(restAdd2(2,3,10,10));