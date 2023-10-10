function isUrl(str) {
    try {
        const url = new URL(str)
        return url
    } catch (error) {
        return error
    }
}

const _isUrl = url => {
    // 补全代码
    let reg =
        /^((https|http):\/\/)?(([A-Za-z0-9]+-[A-Za-z0-9]+|[A-Za-z0-9]+)\.)+([A-Za-z]{2,6})(:\d+)?(\/.*)?(\?.*)?(#.*)?$/g
    return reg.test(url)
}

/**
 * ^((https|http):\/\/)?: 这部分匹配 URL 的协议部分，例如 http:// 或 https://，该部分是可选的，因此使用 ? 表示零次或一次。
(([A-Za-z0-9]+-[A-Za-z0-9]+|[A-Za-z0-9]+)\.)+: 这部分匹配 URL 的域名部分，它允许域名包含字母、数字和连字符（-），例如 example.com 或 sub-domain.example.com。+ 表示匹配一次或多次。
([A-Za-z]{2,6}): 这部分匹配 URL 的顶级域名（TLD），如 .com、.org 等。{2,6} 表示匹配 2 到 6 个字母。
(:\d+)?: 这部分匹配 URL 中的端口号，例如 :8080。:\d+ 表示匹配冒号后面的一个或多个数字，? 表示该部分是可选的。
(\/.*)?: 这部分匹配 URL 的路径部分，如 /path/to/resource。\/.* 表示匹配斜杠后面的任意字符，? 表示该部分是可选的。
(\?.*)?: 这部分匹配 URL 的查询字符串，如 ?param1=value1&param2=value2。\?.* 表示匹配问号后面的任意字符，? 表示该部分是可选的。
(#.*)?: 这部分匹配 URL 的片段标识符，如 #section1。#.* 表示匹配井号后面的任意字符，? 表示该部分是可选的。
/g: 此标志表示正则表达式将尝试匹配字符串中的所有符合条件的部分。
 */

console.log(_isUrl("https://www.baidu.com:3030/index?name=huangfeihong"))
