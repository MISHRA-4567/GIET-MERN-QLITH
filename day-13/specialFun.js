console.log("Today we are going to learn special function of the array"); 

let arr = [1,2,3,4,5,6]; 
// for(let v of arr){
// console.log(v)
// }

arr.forEach((v,i)=> {
    console.log(i + ":",v)
})

let updateArr = arr.map(v => v * 2) 
console.log(updateArr)

let filterArr = arr.filter((v) => {
    return v % 2 === 0;
})
console.log(filterArr)

let add = arr.reduce((sum, v) => {
    return sum + v;
}, 0);

console.log(add)

let multiply = arr.reduce((multiply, v) => {
    return multiply * v;
}, 0);

console.log(multiply)

let numarr = [9,5,1,59,15,0,-1];
console.log(numarr.sort((a,b) => {return a-b}));

console.log(numarr.sort((a,b) => {return b-a}));

let value = numarr.some((v) => {return v % 2 === 0});
console.log(value);

let value1 = numarr.some((v) => {return v  >= 0});
console.log(value1);

let allPositive = numarr.every((v) => {return v >= 0});
console.log(allPositive);

console.log(numarr.find((v) => {return v > 2}))

console.log(numarr.find((v) => {return v == 2}))

let newArr = [3,2,11,12,90]
console.log(newArr.find((v) => {return v > 10})); 

console.log([1,2,[4,5],[6,7]].flat());

console.log([1,2,[4,[5,6]],[7,8]].flat(Infinity));

let h1 = document.getElementById("head");
console.log(h1)

let p = document.getElementsByClassName("para");
console.log(p)

let h2 = document.getElementsByTagName("h2");
console.log(h2)


