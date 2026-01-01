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

let ul = document.createElement("ul");
ul.id = "menu";

let li1 = document.createElement("li");
li1.textContent = "Home";
ul.appendChild(li1);

document.body.appendChild(ul);
