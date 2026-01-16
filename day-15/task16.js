let count = 0;
const button = document.createElement("button");
button.innerText = "Click Me";
const span = document.createElement("span");
span.innerText = count;
document.body.appendChild(button);
document.body.appendChild(span);
button.addEventListener("click", () => {
  count++;
  span.innerText = count;
});

document.addEventListener("DOMContentLoaded", () => {
    let count = 0;
    const button = document.createElement("button");
    button.innerText = "Click Me";
    document.body.appendChild(button); 
    button.addEventListener("click", () => {
      count++; 
      if (count >= 5) {
        button.innerText = "Limit Reached";
        button.disabled = true;
      }
    });
  });

  const input = document.createElement("input");
  input.type = "text";
  const p = document.createElement("p");
  p.innerText = "0 / 20";
  document.body.appendChild(input);
  document.body.appendChild(p); 
  input.addEventListener("input", () => {
    const length = input.value.length;
    p.innerText = length + " / 20"; 
    if (length > 20) {
      p.style.color = "red";
    } else {
      p.style.color = "black";
    }
  });

  const div = document.createElement("div");
  div.innerText = "Hover";
  div.style.width = "200px";
  div.style.height = "100px";
  div.style.backgroundColor = "lightgray";
  document.body.appendChild(div);
  div.addEventListener("mouseenter", () => {
    div.style.backgroundColor = "orange";
  });
  div.addEventListener("mouseleave", () => {
    div.style.backgroundColor = "lightgray";
  });

  const form = document.createElement("form");
  const nameInput = document.createElement("input");
  nameInput.placeholder = "Name";
  const emailInput = document.createElement("input");
  emailInput.placeholder = "Email"; 
  const button1 = document.createElement("button1");
  button.innerText = "Submit"; 
  const error = document.createElement("p"); 
  form.appendChild(nameInput);
  form.appendChild(emailInput);
  form.appendChild(button);
  form.appendChild(error);
  document.body.appendChild(form);
  form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    if (nameInput.value === "" || emailInput.value === "") {
      error.innerText = "All fields are required";
      error.style.color = "red";
    } else {
      error.innerText = "";
    }
  });

