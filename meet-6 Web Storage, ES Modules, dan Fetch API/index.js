import pertambahan, { cetakPesan as cetakPesan2, nama } from "./cetak.js";

/** Multiline comment */

// cetakPesan2();

// // cetakPesan();
// console.log(pertambahan(1, 2));

// console.log(nama);

// fetch("https://reqres.in/api/users")
//   .then(function (res) {
//     return res.json();
//   })
//   .then(json => {
//     const data = json.data;

//     for (let i = 0; i < data.length; i++) {
//       const user = data[i];

//       document.body.innerHTML += `
//       <div>
//         <p>firstname: ${user.first_name}</p>
//         <p>lastname: ${user.last_name}</p>
//         <img src="${user.avatar}"/>
//       </div>`;
//     }
//   })
//   .catch(e => console.log(e));

// async function ambilDanCetakData() {
//   try {
//     const response = await fetch("https://reqres.in/api/users");
//     const json = await response.json();
//     const data = json.data;

//     for (let i = 0; i < data.length; i++) {
//       const user = data[i];

//       document.body.innerHTML += `
//           <div>
//             <p>firstname: ${user.first_name}</p>
//             <p>lastname: ${user.last_name}</p>
//             <img src="${user.avatar}"/>
//           </div>`;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

async function buatData() {
  try {
    const response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "vallen", job: "programmer" }),
    });
    const json = await response.json();

    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

buatData();

// ambilDanCetakData();

// localStorage.setItem("theme", "light");
// localStorage.setItem("key1", "1");
// localStorage.setItem("key2", "2");
// localStorage.setItem("key3", "3");
// localStorage.setItem("key4", "4");

// console.log(localStorage.getItem("theme"));

// // localStorage.removeItem("theme");
// localStorage.clear();

// sessionStorage.setItem("theme", "light");
// sessionStorage.setItem("key1", "1");
// sessionStorage.setItem("key2", "2");
// sessionStorage.setItem("key3", "3");
// sessionStorage.setItem("key4", "4");

// console.log(sessionStorage.getItem("theme"));

// // sessionStorage.removeItem("theme");
// sessionStorage.clear();