function* myGeneration() {
    yield "1"
    yield "2"
    yield "3"
}

// 不会执行
const generation = myGeneration()

for (const iterator of generation) {
    console.log(iterator)
}
