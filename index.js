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

// let menu = document.querySelector("#menu");

// let lang = ["HTML", "CSS", "JavaScript", "Python", "Java"];

// let fragment = document.createDocumentFragment();

// lang.forEach((Language) => {
//   let li = document.createElement("li");
//   li.textContent = Language;
//   fragment.appendChild(li);
// });

// menu.appendChild(fragment);


// let menu = document.querySelector("#menu");

// let li = document.createElement("li");
// li.textContent = "Home";

// menu.insertBefore(li, menu.firstElementChild)

// let app = document.querySelector("#menu")
// let names = ["Eshan", "MIshan", "fishaan"]

// let DOMScript = names.map((names)=>{
//   let li = document.createElement("li");
//   li.textContent = names;
//   return li;
// })
// app.append(...DOMScript);



// let apps = document.querySelector("#menus");
// let lan = ["typescript", "python", "javascript", "go"];

// let details = lan.map((languages)=>{
//   let li =document.createElement("li");
//   li.innerHTML = languages;
//   return li;
// })
// apps.prepend(...details);

// let menu = document.querySelector("#menu")

// let li = document.createElement("li");
// li.textContent = ["Home","mome"];
// menu.replaceChild(li, menu.lastElementChild);

// menu.removeChild(menu.firstElementChild)
// menu.removeChild(menu.lastElementChild)

// let cloneNode = menu.cloneNode(true);

// cloneNode.id = "cloneId"

// document.body.appendChild(cloneNode)

// let btn = document.querySelector("#btn");
// if(btn){
//   btn.setAttribute("name", "pAYEL")
// }

// let btn = document.querySelector("#btn");

// if(btn){
//   let target = btn.getAttribute("target");
//   console.log(target);
// }

// let removeButton = btn.hasAttribute("target");
// console.log(removeButton);

// console.log(btn.hasAttribute("class"))

// let menu = document.querySelector("#menu")
// menu.style.color = "red"
// menu.style.backgroundColor = "yellow"
// menu.style.width = "20%"


// let menu = document.querySelector("#menu");
// let style = getComputedStyle(menu, "::first-letter");
// console.log(style.fontWeight)



// let h2 = document.querySelector("h2");

// console.log(h2.className) 

// let menu = document.querySelector("#menu")
// menu.classList.add("munna", "hablu", "bhaia")
// menu.classList.remove("bhaia")


let btn = document.querySelector("#btn");

// btn.addEventListener("click", function(e){
//   alert("Button was clicked")
// })

function clicked (){
  alert("The Button Was Clicked")
}