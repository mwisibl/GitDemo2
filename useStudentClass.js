//import c from "./studentClass";
const st =require("./studentClass");
s=new st("Milton",44);
s.enrollCourse("java Core");
s.enrollCourse("java script");
console.log(s.getStudentData());
console.log(s.coursesEnrolled());
var c=s.coursesEnrolled();
c.forEach(element => {
    console.log(element);
});
console.log(c.length);