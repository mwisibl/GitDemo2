var User = {
    name:"Milton",
    age:42,
    getInfo:function(){
        console.log(`
        User name is ${this.name} and age is ${this.age}
        `);
    }
};
console.log(User.getInfo());

var Brian={
    name:"Brian",
    age:11,
};

var b=User.getInfo.bind(Brian);
console.log(b());

console.log(User.getInfo.call(Brian));