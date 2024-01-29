// console.log(document);

// Querying DOM
// Mengambil h1 yang memiliki id "#title"
const titleElement = document.querySelector("#title");
titleElement.innerText = "hello gdsc";

// Mengambil semua li yang memiliki class ".icon"
const iconElements = document.querySelectorAll(".icon");
console.log(iconElements);

// Manipulasi DOM
// window.onload = () => {
//   // Membuat tombol
//   const tombol = document.createElement("button");
//   tombol.innerText = "Klik saya";
//   tombol.setAttribute("id", "send-btn");
//   tombol.style.backgroundColor = "blue";

//   console.log(tombol);

// // membuat unordered list
// const ul = document.createElement("ul");
// ul.innerHTML = `
//   <li>item 1</li>
//   <li>item 2</li>
//   <li>item 3</li>
//   <li>item 4</li>
// `;

// const ul = document.querySelector("ul");
// ul.appendChild(tombol);

// const p = document.createElement("p");
// p.innerText = "ini paragraf";
// // document.insertBefore(ul, p);

// ul.replaceChild(iconElements[0], p);
// };

// Events
const alertBtn = document.querySelector("#alert-btn");

alertBtn.onclick = function () {
  alert("EventHandler");
};

const consoleBtn = document.querySelector("#console-btn");
consoleBtn.addEventListener(
  "click",
  //callback function
  function () {
    console.log("Log 1");
  },
);

consoleBtn.addEventListener(
  "click",
  //callback function
  function () {
    console.log("Log 2");
  },
);