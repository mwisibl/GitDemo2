function add(a)
{
    return function addAgain(b)
    {
        return a+b;
    }
}
var x=add(5);
console.log(x(5));
console.log(add(10)(10));