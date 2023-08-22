//这是一个javascript代码
console.log("hello world")

//======================基础数据类型===================================
//string number boolean null undefined
const username="john";
//也可以不加 末尾分号，但一般加上
//const username="john"

//小数、整数 都是number
const age=30;
const rate=4.5;
const isCool=true;
const x=null;
// y、z都是 undefined
const y=undefined;
let z;

//javaScript的错误，x是null类型
console.log(typeof x)

//连接string
//pattern 1
console.log("my name is "+username+" and i am "+age);
//pattern 2
console.log(`my name is ${username} and i am ${age}`)
//pattern 3
const hello=`my name is ${username} and i am ${age}`;
console.log(hello)

//==================string================================================
const s="Hello World!";
//属性 attribution
//length
console.log(`const s length is ${s}`)

//方法 method
//toLowerCase() 统一小写
console.log(`const s toLowerCase() is ${s.toLowerCase()}`)
//toUpperCase() 统一大写
console.log(`const s toUpperCase() is ${s.toUpperCase()}`)
//substring() 切片
console.log(`const s substring() is ${s.substring(0,5)}`)
//split() 切分为数组
console.log(`const s split() is ${s.split('')}`)

//===================数组 array======================================================
//declare pattern 1
const fruits1 = new Array("apples",10,true);
//declare pattern 2
const fruits2 = ["apples",10,true];

//添加或修改元素
fruits2[3]="addNew"

//添加到最后
fruits2.push("addLast")
//添加到第一个
fruits2.unshift("addFirst")
//删除最后
fruits2.pop()
console.log(fruits2);
//判断是否为 Array
console.log(Array.isArray(fruits2));
//查找某元素的索引
console.log(fruits2.indexOf("apples"));

//==================对象 obj=========================================================
//declare obj
const person={
    firstName:"Jogn",
    age:30,
    hobbies:["music","movies","sports"],
    address:{
        street:"5o main st",
        city:"Boston"
    },//最后的逗号，可有可无
};
//添加 attribution
person.newAttribution="new";
console.log(person)
console.log(person.age)
console.log(person.hobbies[1])
console.log(person.address.street)

//通过obj declare var
const {firstName,hobbies,address:{street}}=person;
console.log(`firstName is ${firstName}`)
console.log(`hobbies2 is ${hobbies}`)
console.log(`street is ${street}`)

//declare arrary obj
const todos=[
    {
        id:1,
        text:"take out trash"
    },
    {
        id:2,
        text:"Meeting with boss"
    },
    {
        id:3,
        text:"dentist appt"
    }
]
console.log(todos[2].text)
//obj turn to json
const todoJson=JSON.stringify(todos)
console.log(todoJson)

//=========================if=====================================
const ifx="5";
const ify=6;
//== 不会判断类型
if(ifx == 5){
    console.log(" ifx == 5yes")
}
//=== 会判断类型
if(ifx === 5){
    console.log(" ifx === 5 yes")
}
// |  ||都可以
if( ifx >= 5 | ify > 6){
    console.log(" fx >= 5 || ify > 6 yes")
}
// & &&都可以用
if( ifx >= 5 & ify >= 6){
    console.log(" ifx >= 5 & ify >= 6 yes")
}
//=============Trinocular operator 三目运算符===============
const color=x>10?"red":"blue";
console.log(`color is ${color}`)
//======================switch========================
switch(color){
    case "red":
        console.log("color is red")
        break;
    case "blue":
        console.log("color is blue")
        break;
    default:
        console.log("color is noe red and blue")
}
//===================loop================================
//for
for(let i =0;i<=3;i++){
    console.log(`for loop number i is${i}`)
}
let i=0;
//while
while(i<3){
    console.log(`while loop number i is${i}`)
    i++;
}
//for anther pattern 打印 对象数组
for(let item of todos){
    console.log(item.text)
}