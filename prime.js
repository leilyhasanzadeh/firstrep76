function towerBuilder(nFloors) {
    let result = [];
    for(let i = 1; i <= nFloors; i++) {        
        result.push([...Array(nFloors - i).fill(" "), ...Array(2 * i - 1).fill("*"), ...Array(nFloors - i).fill(" ")].join(""));
    }   
    return result; 
}

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));