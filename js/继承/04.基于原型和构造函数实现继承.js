/**
 * es5--寄生组合式继承
 * 通过构造函数继承属性，通过原型链继承方法
 */

function Father(name, age) {
    this.name = name
    this.age = age
    // 通过父亲的原型对象增加方法
    Father.prototype.getName = function () {
        console.log("父类获取名字的方法", name)
    }
    Father.prototype.getAge = function () {
        console.log("父类获取年龄的方法", age)
    }
}

function Son(name, age, score) {
    // 通过调用父类的构造函数，改变其this指向继承属性
    Father.call(this, name, age)
    this.score = score
    Son.prototype.getScore = function () {
        console.log("子类获取分数的方法", score)
    }
}

const prototype = Object.create(Father.prototype)
prototype.constructor = Son.prototype.constructor
// 将子类的prototype指向父类的prototype
Son.prototype = prototype

const s = new Son("儿子", 18, 100)
s.getName()
s.getAge()
s.getScore()
