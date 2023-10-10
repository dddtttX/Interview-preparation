function bigSum(str1, str2) {
    let maxLen = Math.max(str1.length, str2.length)
    // 补零
    str1 = str1.padStart(maxLen, "0")
    str2 = str2.padStart(maxLen, "0")

    let res = []
    let carry = 0
    for (let i = maxLen - 1; i >= 0; i--) {
        let cur = Number(str1[i]) + Number(str2[i]) + carry
        if (cur >= 10) {
            carry = 1
            cur = cur - 10
        } else {
            carry = 0
        }
        res.unshift(cur)
    }

    carry === 1 ? res.unshift(carry) : res
    return res.join("")

    // console.log(str1, str2)
}

console.log(bigSum("191919191919191919191919", "151511477788"))

function add(a, b) {
    //取两个数字中最大长度， b 比 a 长，maxLength 就是 b 的 length
    let maxLength = Math.max(a.length, b.length)
    //padStart(targetLength,padString)
    //targetLength 即补齐后的目标长度，padString 即填充字符串
    //用 0 去补齐长度
    a = a.padStart(maxLength, 0) //结果 "0009007199254740991"
    b = b.padStart(maxLength, 0) //结果 "1234567899999999999"
    //声明加法过程中需要用到的变量
    let t = 0
    let f = 0 //"进位"
    let sum = "" // sum 声明为空字符串
    // 从个位数开始遍历数字
    for (let i = maxLength - 1; i >= 0; i--) {
        t = parseInt(a[i]) + parseInt(b[i]) + f
        // 取地板数，比如 9/10 取 0， 11/10 取 1
        f = Math.floor(t / 10)
        // 取模，个位数与 10 取模为它本身，即余数
        // 因为 sum 声明为空字符串，所以数字会被转换成字符串
        // 比如 8 + "9" 输出为字符串 "89"
        sum = (t % 10) + sum
    }
    //最后得到的 sum 时， f 为 1 即在前加 1
    //假设此时 sum 为 "xxx", f 为 1，则返回"1xxx"
    if (f == 1) {
        sum = "1" + sum
    }
    return sum
}

console.log(add("191919191919191919191919", "151511477788"))
