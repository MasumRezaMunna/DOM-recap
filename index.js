// function ClickMe() {
//   document.getElementById("demo").innerHTML = Date();
// }

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

// let btn = document.querySelector("#btn");

// btn.addEventListener("click", function(e){
//   alert("Button was clicked")
// })

// function clicked (){
//   alert("The Button Was Clicked")
// }

// let btn = document.querySelector("#btn")
// btn.onclick = function(){
//   alert("This Message From DOM 0 label Handler")
// }

// document.addEventListener("DOMContentLoaded", (e)=>{
//   alert("DOM Is Fully Loaded")
// })

// addEventListener("load", ()=>{
//   alert("content is loaded")
// })

// addEventListener("beforeunload", (e)=>{
//   e.preventDefault();
//   e.returnValue = ''
// })

// let track = document.querySelector("#track")

// track.addEventListener("mousedown", (e) => {
//   console.log(e.type)
// })
// track.addEventListener("mouseup", (e) => {
//   console.log(e.type)
// })
// track.addEventListener("click", (e) => {
//   console.log(e.type)
// })

// function mouseEvent(e){
//   console.log(e.type)
// }

// track.addEventListener("mousedown", mouseEvent)
// track.addEventListener("mouseup", mouseEvent)
// track.addEventListener("click", mouseEvent)
// track.addEventListener("dblclick", mouseEvent)
// track.addEventListener("mouseover", mouseEvent)

// let message = document.querySelector("#message")

// function EventName(e) {
//   console.log(e.key)
// }
// message.addEventListener("keyup", EventName)
// message.addEventListener("keydown", EventName)

// window.onscroll = () =>{
//   console.log("scrolled")
// }

// window.addEventListener("scroll", ()=>{
//   console.log("scrolled")
// })

// let scroller = 0;

// window.addEventListener("scroll", ()=>{
//   let NewScroller = window.scrollYoffset || document.documentElement.scrollTop
//   // if(window.scrollYoffset || document.documentElement.scrollTop > scroller){
//   if(NewScroller > scroller){
//     console.log("scroll is down")
//   }else{
//     console.log("scroll is up")
//   }
//   scroller = NewScroller;
// })

// const MyInput = document.querySelector("#MyInput")

// MyInput.addEventListener("focus", (e) =>{
//   e.target.style.backgroundColor = "red";
// })
// MyInput.addEventListener("blur", (e) =>{
//   e.target.style.backgroundColor = "yellow";
// })

// let Username = document.querySelector("#Username")
// let email = document.querySelector("#email")
// let password = document.querySelector("#password")
// let password2 = document.querySelector("#password2")
// let Form = document.querySelector("#Form")

// console.log(Username)

// function ShowError(input, message) {
//   const FormContain = input.ParentElement
//   FormContain.className = "form-contain error"
//   const small = FormContain.querySelector("small")
//   small.innerText = message;
// }

// function ShowSuccess (input){
//   const FormContain = input.parentElement
//   FormContain.className = "form-contain success"
// }

// function CheckInputLength(input,min,max){
//   if(input.value.length < min){
//     ShowError(input, `${GetFieldName (input)} You Must Be At Least ${min} Characters`)
//   }
//   else if(input.value.length > max){
//     ShowError(input, `${GetFieldName (input)} You Must Be At Least ${max} Characters`)
//   }else{
//     ShowSuccess(input)
//   }
// }

// function GetFieldName (input){
//     return input.id.charAt(0).toUpperCase()+input.id.slice(1);
// }

// function CheckPassWordMatch (input1, input2){
//   if(input1.value !== input2.value){
//     ShowError(input2, "Password is not same")
//   }
// }

// Form.addEventListener("submit", (e)=>{
//   e.preventDefault();

//   CheckInputLength(Username, 3, 20)
//   CheckInputLength(password, 6, 30)
//   CheckPassWordMatch(password, password2)
// })

// const group = document.querySelector(".group");
// const output = document.querySelector(".output");

// const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

// group.innerHTML = sizes.map((size) =>`<div>
//     <input type="radio" id="${size}" value="${size}" name="size">
//     <label for="${size}">${size}</label>

//   </div>`
// ).join(" ");

// const RadioButton = document.querySelectorAll("input")

// for (const radioBtn of RadioButton){
//   radioBtn.addEventListener("change", ShowOutput)
// }

// function ShowOutput (e){
//   console.log(e);
//   if(this.checked){
//     document.querySelector(".output").innerHTML = `You Selected ${this.value}`
//   }
// }

const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  let checkbox = document.querySelectorAll("input[name='color']:checked");

  let values = [];

  checkbox.forEach((checkbox) => {
    values.push(checkbox.value);
  });

  console.log(values);
});
