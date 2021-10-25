/**
 * 《JavaScript设计模式与开发实践笔记》
 * 
 * 单例模式
 * 
 * 保证一个类仅有一个实例，并且提供一个它的全局访问点
 * 
 * 单例模式应用场景
 * 
 *  对象只需要一个，线程池，全局缓冲,浏览器当中的window对象以及创建唯一的某个对象
 * 
 * */

let Singleton = function(name) {
    this.name = name;
    this.instance = null;
}

Singleton.prototype.getName = function() {
    console.log(this.name);
}

Singleton.getInstance = name => {
    if(!this.instance) this.instance = new Singleton(name);
    return this.instance;
}

let a = Singleton.getInstance('HJY');
let b = Singleton.getInstance('LJX');

console.log(a===b);
