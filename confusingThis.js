var emp={
    ename:"Milton",
    sal:10000,
    display:function()
    {
        console.log(this);
        console.log(`${this.ename}-${this.sal}`);
    }
}
    function show()
    {
        console.log(this);
    }
    emp.display();
    show();