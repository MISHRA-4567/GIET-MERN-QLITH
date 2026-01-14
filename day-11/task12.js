const str = "madam";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
if (str === reversed) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}

const str1 = "hello world from javascript";
let result = "";
for (let i = 0; i < str1.length; i++) {
  if (i === 0 || str1[i - 1] === " ") {
    result += str1[i].toUpperCase();
  } else {
    result += str1[i];
  }
}
console.log(result);

function getStringLength(str) {
    let length = 0;
    for (let char of str) {
      length++;
    }
    return length;
  }
  console.log(getStringLength("Hello World"));

  const str2 = "hello world";
  let result1 = "";
  for (let i = 0; i < str2.length; i++) {
    const code = str2.charCodeAt(i);
    if (code >= 97 && code <= 122) {
      result1 += String.fromCharCode(code - 32);
    } else {
      result1 += str2[i];
    }
  }
  console.log(result1);

  const str3 = "Hello World";
  let count = 0;
  for (let i = 0; i < str3.length; i++) {
    const ch = str3[i].toLowerCase();
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
      count++;
    }
  }
  console.log(count);

  const multiply = (a, b) => a * b;
  console.log(multiply(5, 3));

