const fruits=["Apple","Banana","Mango","Orange","Grapes"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

const fruits1=["Apple","Banana","Orange","Grapes"];
fruits1.push("Mango");
fruits1.unshift("Kiwi");
console.log(fruits1);

const fruits2=["Apple","Banana","Mango","Orange","Grapes"];
fruits2.shift();
fruits2.pop();
console.log(fruits2);

const arr=[10,20,30,40,50];
let count=0;
for (let i in arr) {
    count++;
}
console.log(count);

const fruits3=["Apple","Banana","Mango","Orange"];
const position=fruits3.indexOf("Banana");
console.log(position);

const fruits4=["Apple","Banana","Mango","Orange"];
const exists=fruits4.includes("Orange");
console.log(exists);

const arr1=[1,2,3,4,5];
const result=arr1.join("-");
console.log(result); 

const arr2=[1,2,3,2,1,4,5];
const unique=[];
for (let i=0;i<arr2.length;i++) {
    let found=false;
    for (let j=0;j<unique.length;j++)
        {
            if (arr2[i]===unique[j]) {
                found=true;
                break;
            }
        } 
        if (!found) {
            unique.push(arr2[i]);
        }
}
console.log(unique);

const arr3 = ["apple", "banana", "cherry", "watermelon"];
let longest = arr3[0];
for (let i = 1; i < arr3.length; i++) {
  if (arr3[i].length > longest.length) {
    longest = arr3[i];
  }
}
console.log(longest);

const arr4 = ["React", "Node", "MongoDB"];
const lengths = [];
for (let i = 0; i < arr4.length; i++) {
  lengths.push(arr4[i].length);
}
console.log(lengths);

const arr5 = [1, 2, 3, 4, 5];
const result1 = [];
for (let i = 0; i < arr5.length; i++) {
  result1.push(arr5[i] * 5);
}
console.log(result1);

const arr6 = [4, -2, 6, -9, 7];
for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] < 0) {
    arr6[i] = 0;
  }
}
console.log(arr6);


