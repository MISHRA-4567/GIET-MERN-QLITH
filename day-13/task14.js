const arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.forEach(num => {
  console.log(num * 2);
});

const arr1 = [1, 2, 3, 4, 5];
let sum = 0;
arr1.forEach(num => {
  sum += num;
});
console.log(sum);

const people = [
    { name: "A", age: 21 },
    { name: "B", age: 25 },
    { name: "C", age: 19 }
  ];
  people.forEach(person => {
    console.log(person.name);
  });

  const arr2 = [1, 2, 3, 4, 5, 6, 8];
  let count = 0;
  arr2.forEach(num => {
    if (num % 2 === 0) {
      count++;
    }
  });
  console.log(count);

  const arr3 = [1, 2, 3, 4, 5];
  const squares = arr3.map(num => num * num);
  console.log(squares);

  const arr4 = ["React", "Node", "MongoDB"];
  const lengths = arr4.map(str => str.length);
  console.log(lengths);

  const users = [
    { name: "A", age: 20 },
    { name: "B", age: 30 }
  ];
  const ages = users.map(user => user.age);
  console.log(ages);

  const products = [
    { name: "Pen", price: 10 },
    { name: "Book", price: 50 }
  ];
  
  const updatedProducts = products.map(product => {
    return {
      ...product,
      tax: product.price * 0.10
    };
  });
  console.log(updatedProducts);

  const arr5 = [1, 2, 3, 4, 5, 6];
  const evenNumbers = arr5.filter(num => num % 2 === 0);
  console.log(evenNumbers);

  const arr6 = ["Hi", "React", "JS", "Node", "Vue"];
  const longStrings = arr6.filter(str => str.length > 3);
  console.log(longStrings);

  const students = [
    { name: "A", marks: 80 },
    { name: "B", marks: 30 },
    { name: "C", marks: 50 }
  ];
  const passedStudents = students.filter(student => student.marks >= 50);
  console.log(passedStudents);

  const products1 = [
    { name: "Pen", inStock: true },
    { name: "Book", inStock: false },
    { name: "Pencil", inStock: true }
  ];
  const inStockProducts = products1.filter(product => product.inStock);
  console.log(inStockProducts);

  const arr7 = [1, 2, 3, 4, 5];
  const sum1 = arr7.reduce((acc, num) => acc + num, 0);
  console.log(sum1);

  const arr8 = [1, 2, 3, 4, 5, 6, 7];
  const oddCount = arr8.reduce((acc, num) => {
    return num % 2 !== 0 ? acc + 1 : acc;
  }, 0);
  console.log(oddCount);

  const arr9 = [1, 2, 2, 3, 1];
  const frequency = arr9.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  console.log(frequency);

  const arr10 = [5, 12, 8, 20, 3];
  const max = arr10.reduce((acc, num) => (num > acc ? num : acc), arr10[0]);
  console.log(max);

  const arr11 = [10, 25, 45, 60, 30];
  const hasGreaterThan50 = arr11.some(num => num > 50);
  console.log(hasGreaterThan50);

  const products2 = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 80 }
  ];
  const expensiveProduct = products2.some(product => product.price > 1000);
  console.log(expensiveProduct);

  const students1 = [
    { name: "A", marks: 40 },
    { name: "B", marks: 30 },
    { name: "C", marks: 50 }
  ];
  const hasFailed = students1.some(student => student.marks < 35);
  console.log(hasFailed);

  const arr12 = [1, 2, 3, 4, 5];
  const allPositiveIntegers = arr12.every(num => Number.isInteger(num) && num > 0);
  console.log(allPositiveIntegers);

  const arr13 = ["Alice", "Bob", "Charlie"];
  const allStrings = arr13.every(name => typeof name === "string");
  console.log(allStrings);

  const users1 = [
    { name: "A", age: 20 },
    { name: "B", age: 25 },
    { name: "C", age: 17 }
  ];
  const allAdults = users1.every(user => user.age >= 18);
  console.log(allAdults);

  const arr14 = [1, 3, 5, 6, 7, 8];
  const firstEven = arr14.find(num => num % 2 === 0);
  console.log(firstEven);

  const students2 = [
    { name: "A", marks: 85 },
    { name: "B", marks: 92 },
    { name: "C", marks: 88 }
  ];
  const topStudent = students2.find(student => student.marks > 90);
  console.log(topStudent);

  const products3 = [
    { id: 1, name: "Pen" },
    { id: 2, name: "Book" },
    { id: 5, name: "Laptop" },
    { id: 3, name: "Mouse" }
  ];
  const product = products3.find(p => p.id === 5);
  console.log(product);

  const arr15 = ["JS", "React", "Node", "JavaScript", "MongoDB"];
  const longString = arr15.find(str => str.length > 5);
  console.log(longString);











