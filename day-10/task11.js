const arr=[1,2,3,4,5,6,7,8,9];
arr.forEach(num => {
    if (num % 2 !==0){
        console.log(num);
    }
}); 

const arr1=[-3,5,0,7,-1,4,9];
let count=0;
for (const num of arr1) {
    if (num>0) {
        count=count+1;
}
    }
console.log(count);

const arr2=[1,2,3,4,5];
const reversed=[];
for (let i=arr2.length-1;i>=0;i--)
{
    reversed.push(arr2[i]);
}
console.log(reversed);

const num=5;
let factorial=1;
for (let i=1;i<=num;i++) {
    factorial=factorial*i;
}
console.log(factorial);

const str="Hello World";
let count1=0;
for (let i=0;i<str.length;i++) {
    const ch=str[i].toLowerCase();
    if (ch==='a' || ch==='e' || ch==='i' || ch==='o' || ch==='u') {
        count1++;
    }
}
console.log(count1);

const arr3 = [3, 7, 2, 9, 5];
let largest = arr3[0];
for (let i = 1; i < arr3.length; i++) {
  if (arr3[i] > largest) {
    largest = arr3[i];
  }
}
console.log(largest);

const n = 10;
let a = 0, b = 1;
for (let i = 1; i <= n; i++) {
  console.log(a);
  let next = a + b;
  a = b;
  b = next;
}

const arr4= [1, 2, 3, 2, 4, 1, 5];
const unique = [];
for (let i = 0; i < arr4.length; i++) {
  let isDuplicate = false;
  for (let j = 0; j < unique.length; j++) {
    if (arr4[i] === unique[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    unique.push(arr4[i]);
  }
}
console.log(unique);

const num1= 17;
let isPrime = true;
if (num1 <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= num1 - 1; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}
console.log(isPrime);

let rows = 5;
let pattern = "";
for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);


