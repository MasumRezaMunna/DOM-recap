function ClickMe() {
  document.getElementById("demo").innerHTML = Date();
}

// let div = document.createElement("div");
// div.innerHTML = "<p>Hello, this is a new div!</p>";
// document.body.appendChild(div);

// let div = document.createElement("div");
// div.className = "my-class";
// div.id = "my-id";

// let h1 = document.createElement("h1");
// h1.textContent = "Hello, World!";
// div.appendChild(h1);

// document.body.appendChild(div);

// let ul = document.createElement("ul");
// ul.id = "menu";

// let li1 = document.createElement("li");
// li1.textContent = "Home";
// ul.appendChild(li1);

// document.body.appendChild(ul);

// let div = document.createElement("div");
// div.id = "my-div";
// div.className = "container";

// let text = document.createTextNode("This is a text node inside the div.");
// div.appendChild(text);

// let h1 = document.createElement("h1");
// h1.textContent = "Welcome to My Website";
// div.appendChild(h1);

// document.body.appendChild(div);

// let ul = document.createElement("ul");
// ul.id = "menu";

// let li1 = document.createElement("li");
// li1.textContent = "Home";
// ul.appendChild(li1);

// let li2 = document.createElement("li");
// li2.textContent = "about";
// ul.appendChild(li2);

// let li3 = document.createElement("li");
// li3.textContent = "contact";
// ul.appendChild(li3);

// document.body.appendChild(ul);

// let script = document.createElement("script");
// script.src = "script.js";
// document.body.appendChild(script);

let menu = document.querySelector("#menu");

let lang = ["HTML", "CSS", "JavaScript", "Python", "Java"];

let fragment = document.createDocumentFragment();

lang.forEach((Language) => {
  let li = document.createElement("li");
  li.textContent = Language;
  fragment.appendChild(li);
});

menu.appendChild(fragment);
