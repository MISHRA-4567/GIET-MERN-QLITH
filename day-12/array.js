console.log("Today we are going to learn array")
let arr = [1,2,3,true,"hii",{},[]];
console.log (arr[3]);

let arrObj=new Array(1,2,3,"hii",{});
console.log(arrObj)

console.log(Array(3))
console.log(Array.of(1,2,3,"hii",{})) 

console.log(Array.from("abcdef"))

let num1 = [1,2,3];
num1.push(4,6,7);
console.log(num1)
num1.pop();
console.log(num1)
num1.pop()
console.log(num1)

num1.unshift(0);
console.log(num1);
num1.shift();
console.log(num1)

console.value(num1.at(2));
console.log("index",num1.indexOf(3))
console.log(num1.includes(8));

console.log(num1.reverse());
console.log(num1.join("-"));

console.log(num1.slice(2,5));
console.log(num1)
num1.splice(2,2,"hii");
console.log(num1)

// find the maximum element from an array
let arr12 = [12,33,41,50,];
let maxelement=arr12[0];
for (let n of arr12)
    {
        if(max<n)
            max=n
    }
    console.log(max);

// count even and odd number from an array 
let evenCount=0;
let oddCount=0;
for (let i=0;i<arr12.length;i++){
    if(arr12[i]%2==0){
        evenCount+=1;
    }
    else{
        oddCount++;
    }
}
console.log("even number", evencount);
console.log(oddCount);

// sum of array element 
let arr13=[12,33,41,50];
let sum=0;
for(let value of arr13){
    sum=value+sum;
}
console.log("sum of the array is" +sum)

// 

//

// 

// remove duplicates from array
let dup=[1,2,2,3,4,5,6,6,7]
for (let i=0;i<dup.length;i++){
    for (let j=i+1;j<dup.length;j++){
        if(dup[i]==dup[j]){
            dup.splice(j,1);
        }
    }
}
console.log("dup", dup);

// 

// double each element in the array 
let Arr=[1,2,3,4,5]
for (let i=0;i<=Arr.length-1;i++){
    Arr[i]*=2;
}
console.log(Arr);

// 
let str=["ram","hari","gopal"]
for(let v of str){
    if(v.length>4){
        console.log(v);
    }
}

// 
let arr10=[1,-2,-4,89,5]
for (let v of arr10){
    if(v<0){
        console.log("False");
        break;
    }
}






