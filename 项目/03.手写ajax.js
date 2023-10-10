const postInfo = {
    url: "http://www.baidu.com",
    method: "POsT",
    obj: { name: "Tom", age: 12 },
}
const getInfo = {
    url: "http://www.baidu.com",
    method: "GeT",
    obj: { name: "Mike", age: 12 },
}

function myAjax(option) {
    const xhr = new XMLHttpRequest()

    let { url, method, obj } = option
    method = toUpperCase(method)

    if (method === "GET") {
        let str = objToString(obj)
        xhr.open(method, url + "?" + str)
        xhr.send()
    }

    if (method === "POST") {
        xhr.open(method, url)
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        xhr.send(obj)
    }

    // 监听状态的改变
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            console.log("success")
        } else {
            console.log("fail")
        }
    }
}

myAjax(getInfo)

function objToString(obj) {
    // 对数据做一层处理
    let temp = []
    for (const key in obj) {
        temp.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
    }
    return temp.join("&")
}

function toUpperCase(str) {
    if (str === "POST" || str === "GET") str
    return str.toUpperCase()
}
