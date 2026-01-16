const button = document.createElement("button");
button.innerText = "Click Me";
const para = document.createElement("p");
para.innerText = "Nature's beauty unfolds daily; birds sing sweetly, flowers bloom in vibrant colors, and gentle breezes rustle through lush trees, creating a peaceful atmosphere for all to enjoy.";
document.body.appendChild(button);
document.body.appendChild(para);
button.addEventListener("click", () => {
  para.innerText = "Hello DOM";
});

const button1 = document.createElement("button1");
button1.innerText = "Toggle Class";
const div = document.createElement("div");
div.innerText = "Toggle Me";
div.id = "box";
document.body.appendChild(button1);
document.body.appendChild(div);
button1.addEventListener("click", () => {
  div.classList.toggle("active");
});

const button3 = document.createElement("button3");
button3.innerText = "Add Item";
const ul = document.createElement("ul");
document.body.appendChild(button3);
document.body.appendChild(ul);
button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerText = "Apple, Banana, Orange, Kiwi, Dragonfruit";
  ul.appendChild(li);
});

const ul1 = document.querySelector("ul1");
const count = ul1 ? ul1.querySelectorAll("li").length : 0;
console.log(count);

const button4 = document.createElement("button4");
button4.innerText = "Switch Image";
const img = document.createElement("img");
img.src1 = "car1.jpg";
img.style.width = "200px";
document.body.appendChild(button4);
document.body.appendChild(img);
button4.addEventListener("click", () => {
  img.src = img.src.includes("car1.jpg") ? "car2.jpg" : "car1.jpg";
});









