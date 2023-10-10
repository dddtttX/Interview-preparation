//可遍历的类型
const mapTag = "[object Map]"
const setTag = "[object Set]"
const arrayTag = "[object Array]"
const objectTag = "[object Object]"
//不可遍历类型
const symbolTag = "[object Symbol]"
const regexpTag = "[object RegExp]"
const funTag = "[object Function]"

// 判断类型的方法
function checkType(target) {
    return Object.prototype.toString.call(target)
}

// 判断引用类型的方法
function checkTemp(target) {
    const C = target.constructor
    return new C()
}

function deepClone(target, map = new Map()) {
    // 如果是基本数据类型， 直接返回
    // if (!canForArr.concat(noForArr).includes(type)) return target
    if (typeof target !== "object") return target

    // map中已存储，直接返回
    if (map.get(target)) return map.get(target)

    // 获取类型
    const type = checkType(target)
    // 如果是引用数据类型，需要特殊处理
    const temp = checkTemp(target)

    // 若map中未存储，需要设置
    map.set(target, temp)

    // 1. 处理Map
    if (type === mapTag) {
        target.forEach((v, k) => {
            temp.set(k, deepClone(v, map))
        })
        return temp
    }

    // 2. 处理Set
    if (type === setTag) {
        target.forEach((v, k) => {
            temp.add(deepClone(v, map))
        })
        return temp
    }

    // 3. 处理数组和对象
    if (type === objectTag || type === arrayTag) {
        for (const key in target) {
            // 递归
            temp[key] = deepClone(target[key], map)
        }
        return temp
    }

    // 4. Symbol类型
    if (type === symbolTag) return Object(Symbol.prototype.valueOf.call(target))

    // 5. regexpTag类型
    if (type === regexpTag) return new RegExp(target)

    // 6. 函数类型
    if (type === funTag) return target
}

const a = {
    name: "sunshine_lin",
    age: 23,
    hobbies: { sports: "篮球", tv: "雍正王朝" },
    works: ["2020", "2021"],
    map: new Map([
        ["haha", 111],
        ["xixi", 222],
    ]),
    set: new Set([1, 2, 3]),
}
a.key = a // 环引用
const b = deepClone(a)

console.log(b)
// {
//     name: 'sunshine_lin',
//     age: 23,
//     hobbies: { sports: '篮球', tv: '雍正王朝' },
//     works: [ '2020', '2021' ],
//     map: Map { 'haha' => 111, 'xixi' => 222 },
//     set: Set { 1, 2, 3 },
//     key: [Circular]
// }
console.log(b === a) // false
