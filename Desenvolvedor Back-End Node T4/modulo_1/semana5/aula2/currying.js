function soma(a) {
    return (b) => {
        return a + b
    }
}

const somaCom100 = soma(100)
console.log(somaCom100(50))