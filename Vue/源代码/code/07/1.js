// {
//     let a = 100;
//     var b = 10;
// }

// console.log(a); //ReferenceError: a is not defined
// console.log(b);


// // var 的情况
// console.log(a); // 输出undefined
// var a = 10;

// // let 的情况
// console.log(b); // 报错ReferenceError: Cannot access 'b' before initialization
// let b = 10;


// var a = 100;

// if (true) {
//   a = 'abc'; // ReferenceError: Cannot access 'a' before initialization
//   let a;  //let命名将变量a与if条件语句的代码块相绑定，形成一个暂时性死区
// }

// const NUM; //SyntaxError: Missing initializer in const declaration

// const NUM = 10;
// NUM = 100; //TypeError: Assignment to constant variable.

// const Member = ['a','b','c','d']
// console.log(Member);  //['a','b','c','d']
// Member[2] = 'mmm';
// console.log(Member);  //['a','b','mmm','d']

// const TYPE = {
//     name: 'subject',
//     count: 10,
//     color: 'yellow'
// }
// console.log(TYPE); //{ name: 'subject', count: 10, color: 'yellow' }
// TYPE.count = 20;
// console.log(TYPE); //{ name: 'subject', count: 20, color: 'yellow' }


// if (true) {
//     const MAX = 5;
// }

// console.log(MAX); // ReferenceError: MAX is not defined

// console.log(NAME);
// const NAME = 'lucy'; //ReferenceError: Cannot access 'NAME' before initialization

// let a = 10;
// let a = 100; //SyntaxError: Identifier 'a' has already been declared

// const a = 10;
// const a = 100; //SyntaxError: Identifier 'a' has already been declared

// function fn (name, age = 17) {
//     console.log("我的名字是" + name + ",我今年" + age + "岁");
// }
// fn('lucy', 20); //我的名字是lucy,我今年20岁

// (参数) => {函数体}
// 参数 => 函数体

// () => 5;
// a => console.log(a);
// (a, b) => {
//     let res = a + b;
//     return res;
// }

// var fn = v => v;
// //等价于
// var fn = function(a){
//  return a;
// }
// f(1);  //1

// var fn = () => {
//     // 箭头函数里面没有 this 对象，
//     // 此时的 this 是外层的 this 对象，即 Window 
//     console.log(this)
// }
// fn(10)  // Window 

// var fn = () => {
//     console.log(arguments)
// }
// fn(100);  // Uncaught ReferenceError: arguments is not defined

// function fn () {
//     setTimeout(() => {
//         // 箭头函数在此处定义，所以this绑定的是fn中的this对象
//         console.log(this.a);
//     }, 0)
// }
// var a = 20;
// // 将fn的this指向为 {a: 10}
// fn.call({ a: 10 });  // 10

// // ES6之前的写法
// let name = 'lucy';
// let age = 18;
// let sex = '女'
// let obj1 = {
//     name: name,
//     age: age,
//     sex: sex
// }
// // ES6中属性的简写
// let obj2 = {
//     name,
//     age,
//     sex
// }
// console.log(obj1); //{ name: 'lucy', age: 18, sex: '女' }
// console.log(obj2); //{ name: 'lucy', age: 18, sex: '女' }

// let obj1 = {
//     test: function () {
//         console.log("obj1的test函数");
//     }
// }
// obj1.test();
// // ES6简化方法定义
// let obj2 = {
//     test () {
//         console.log("obj2的test函数");
//     }
// }
// obj2.test();


// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let a = "a1";
//         if (a == "a") {
//             resolve("成功");
//         }
//         else {
//             reject("失败");
//         }
//     }, 1000)
// }).then(res => {
//     console.log(res);
//     console.log('成功');
// }, error => {
//     console.log(error);
//     console.log('失败');
// })

// async function test(params){
//     const res = await test1();
// }
// async function test1(){
//     // ...
// }
// test();

async function demo() {
    let result = await Promise.resolve(123);
    console.log(result); //123
}
demo();