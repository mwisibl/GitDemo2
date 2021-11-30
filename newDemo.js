var Student=function(name,age,course)
{
    this.name=name;
    this.age=age;
    this.course=course;

    this.getfullDetails=function()
    {
        return `${this.name}:${this.age}:${this.course}`;
    }
}

Student.prototype.getName=function()
{
    return `${this.name}`;
};
var s=new Student("Milton",42,"JS");
console.table(s);
console.log(s.getfullDetails());
console.log(s.getName());