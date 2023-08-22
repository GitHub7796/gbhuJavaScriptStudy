//================map========================

//declare
let m2=new Map();
m2.set('Adam', 67);
m2.set('Bob', 59);
//declare and init
let m=new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);

//添加/更新 key-value
m.set('Adam', 67);
// 是否存在key
m.has('Adam');
//得到 key的value
m.get('Adam'); // 67
//删除 key
m.delete('Adam');
//获取不存在的key
m.get('unKey'); // undefined


//=====================set=========================

let s1 = new Set(); // 空Set
let s2 = new Set([1, 2, 3]); // 含1, 2, 3

//3 '3' 不同元素
var s = new Set([1, 2, 3, 3, '3']);
s; // Set {1, 2, 3, "3"}


s.add(4);
s.delete(4);

//===================iterable==============================
let a = ['A', 'B', 'C'];
let s = new Set(['A', 'B', 'C']);
let m3 = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (let x of a) { // 遍历Array
    console.log(x);
}
for (let x of s) { // 遍历Set
    console.log(x);
}
for (let x of m3) { // 遍历Map
    console.log(x[0] + '=' + x[1]);
}

var a1 = ['A', 'B', 'C'];
a1.forEach(function (element, index, array) {
    console.log(element + ', index = ' + index);
});

var s = new Set(['A', 'B', 'C']);
s.forEach(function (element, sameElement, set) {
    console.log(element);
});

var m4 = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m4.forEach(function (value, key, map) {
    console.log(value);
});