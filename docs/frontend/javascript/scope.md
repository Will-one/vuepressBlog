---
title: '作用域'
categories:
- frontend
tags:
- javascript
---

## P27 作用域与作用域链
:::tip 前言
1. 分类
    * 全局作用域
    * 函数作用域
    * ES6后才有块作用域
2. 作用
    * 隔离变量，不同作用域下同名变量不会冲突
:::


### 作用域与执行上下文
1. 区别1
    * 全局作用域之外，每个函数都会创建自己的作用域，作用域在函数定义时就已经确定了，而不是在函数调用时
    * 全局执行上下文环境是在全局作用域确定之后，JS代码马上执行之前创建
    * 函数执行上下文是在调用函数时，函数体代码执行之前创建
2. 区别2
    * 作用域是静态的，只要函数定义好了就一直存在，且不会再变化
    * 执行上下文是动态的，调用函数的时候创建，函数调用结束时就会自动释放
3. 联系
    * 上下文环境（对象）是从属于所在的作用域
    * 全局上下文环境 ==> 全局作用域
    * 函数上下文环境 ==> 对应的函数使用域

### 作用域链
1. 理解
    * 多个上下级关系的作用域形成的链，它的方向是从下向上的（从内向外）
    * 查找变量就是通过作用域链来查找的
2. 查找一个变量的查找规则
    * 在当前作用域下的执行上下文中查找对应的属性，如果有直接返回，否则进入2
    * 在上一级作用域的执行上下文中查找对应的属性，如果有直接返回，否则进入3
    * 再次执行2的相同操作，知道全局作用域，如果还找不到就抛出异常，报错之类的

## P28 作用域小测试
:::tip
测试题1
:::
```js
var x = 10;
function fn(){
    console.log(x) // 在自己里面找，没有就去全局找
}
function show(f){
    var x = 20
    f()
}
show(fn) // 10
```

:::tip
测试题2
:::
```js
var fn = function(){
    console.log(fn)
}
fn() // 正常输出函数体

var obj = {
    fn2:function(){
        console.log(fn2) // 先在函数作用域找，没有就到全局找了。（这种情况想输出，得写成this.fn2）
    }
}
obj.fn2() // fn2 is not defined
```