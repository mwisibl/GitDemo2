var countries=[
    "India","Pakistan","Srilanka","Thailand"
];

countries.forEach((c) => (console.log(c)));

for(const c of countries)
{
    console.log(c);
}
var emp={
    ename:"Milton",
    empno:1,
    sal:10000,
    display:function()
    {
        return this.ename+"-"+this.empno+"-"+this.sal;
    }
}
for(const c in emp)
{
    console.log(`key is :- ${c} and value is :-${emp[c]}`);
}