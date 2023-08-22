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

//判断是否为 Array
Array.isArray(fruits2);
//查找某元素的索引
fruits2.indexOf("apples");

//切片 [start,end）
fruits2.slice(0,2);
//索引 1 到结束
fruits2.slice(1);
//从头到尾截取
fruits2.slice();

//sort 排序
fruits2.sort()

//reverse 翻转
fruits2.reverse()

//concat 合并两个 arrary,返回新的arrary
fruits2.concat(fruits1);
//concat 把所有 arrary 都拆开，放到新的 arrary
var arr = ['A', 'B', 'C'];
arr.concat(1, 2, [3, 4]); // ['A', 'B', 'C', 1, 2, 3, 4]

//join 将arrary按照指定分隔符拼接为 string
var arr = ['A', 'B', 'C', 1, 2, 3];
arr.join('-'); // 'A-B-C-1-2-3'


//splice
//从指定位置 删除或添加 元素
//
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
// 从索引2开始删除3个元素,然后再添加两个元素:
arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// 只删除,不添加:
arr.splice(2, 2); // ['Google', 'Facebook']
arr; // ['Microsoft', 'Apple', 'Oracle']
// 只添加,不删除:
arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
