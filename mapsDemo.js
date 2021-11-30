var m=new Map();
m.set(0,"Jai");
m.set(1,"Sai");
m.set(2,"Paras");
m.set(3,"Neil");

m.forEach((key,value) => {
    console.log(`Key is ${value} and value is ${key}`);
});

for (const [key,value] of m) {
    console.log(`key is ${key} and value is ${value}`);
}