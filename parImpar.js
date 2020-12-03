function parImpar (num){
    if (num !== 0){
        return num % 2 == 0 ? "es par " : "es impar";
    }else {
        return "error"
    }
}
console.log(parImpar(0))
console.log(parImpar(2))
console.log(parImpar(3))