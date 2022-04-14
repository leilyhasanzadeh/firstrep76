function pow2(array) {
    for(let i = 0; i < array.length; i++ ){
        array[i] = Math.pow(array[i], 4);
    }    
}

let a = [1, 2, 3]
console.debug("a === a.concat() ", a === a.concat())
console.debug("a before:", a);
// pow2(a.concat());
// console.debug("a after:", a);