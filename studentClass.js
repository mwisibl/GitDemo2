 class Student{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    courseList=[];
    getStudentData()
    {
        return {name:`Name is ${this.name}`, age:`Age is ${this.age} `};
    }
    
    enrollCourse(s)
    {
        this.courseList.push(s);
    }

    coursesEnrolled()
    {
        return this.courseList;
    }
}

module.exports=Student;

