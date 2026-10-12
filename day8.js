//exercise 1
// const appName = "Grocery App";
// function showInfo() {
//     const category = "Vegetable";
//     function showCategory() {
//         const item = "Spinach";
//         console.log(appName);
//         console.log(category);
//         console.log(item);
//     }
//     showCategory();
// }
// showInfo();

//pada variabel appName, JS pertama-tama akan mencari variabel pada function scope, tetapi variabel tidak ditemukan, maka variabel akan dicari pada parent scope, tetapi tidak ditemukan juga. Lalu variabel akan dicari pada global scope.
//pada variabel category, JS akan mencari terlebih dulu pada function scope, karena tidak ditemukanm variabel kemudian dicari pada parent scope. Di parent scope ada variabel category.
//variabel item dicari pada function scope, dan ada variabel tersebut.


//exercise 2
// let quantity = 5;

// if (true) {
//     let quantity = 10;
//     const unit = "kg";
//     console.log(quantity);
// }

// console.log(quantity);
// console.log(unit);

// for (var i = 0; i < 3; i++) { 
    // loop body 
// } 
// console.log(i); 

// for (let j = 0; j < 3; j++) { 
//     // loop body 
// } 
// console.log(j);

// console.log(price);
// var price = 25000;

// // console.log(quantity);
// let quantity = 2;

// sayHello();

// function sayHello() {
//     console.log("Hello");
// }

// // sayWelcome();

// const sayWelcome = function() {
//     console.log("Welcome");
// };

// let status = "Ready";

// function checkStatus() {
//     console.log(status);
//     let status = "Loading";
// }

// checkStatus();


// exercise 1
// pada variabel appName, JS pertama-tama akan mencari variabel pada function scope, tetapi variabel tidak ditemukan, maka variabel akan dicari pada parent scope, tetapi tidak ditemukan juga. Lalu variabel akan dicari pada global scope.
// pada variabel category, JS akan mencari terlebih dulu pada function scope, karena tidak ditemukanm variabel kemudian dicari pada parent scope. Di parent scope ada variabel category.
// variabel item dicari pada function scope, dan ada variabel tersebut.

// exercise 2
// outputnya 10, 5, dan error.
// eror ada di baris console.log(unit), karena unit dideklarasikan paa block scope, jadi variabel tersebut tidak dapat diakses pada global scope

// exercise 3
// console.log(i) akan menghasilkan 3, karena console.log dipanggil diluar block scope pengulangannya, maka hasilnya adalah yang paling akhir. console.log(j) akan menghasilkan eror, karena variabel j dideklarasikan menggunakan j, maka variabel tidak dapat dipanggil diluar scopenya, yaitu block scope

// exercise 4
//console.log(price) akan menghasilkan undefined dan console.log(quantity) akan menghasilkan eror. jika variabel dideklarasikan dengan var, saat variabel dipanggil sebelum dideklarasi, tipe var akan menghasilkan undefined. sedangkan variabel dengan let, jika dipanggil sebelum dideklarasi maka akan menghasilkan eror


//exercise 5
//hanya function sayHello() saja yang dapat dijalankan sedangkan sayWelcome() menghasilkan error. Ini terjadi karena sayWelcome() disimpan dalam variabel const. variabel const tidak dapat dipanggil sebelum variabel tersebut dideklarasikan.

//exercise 6
//karena variabel dengan const tidak dapat diinisiasi ulang/ reassigment, berbeda dengan let dan var

let status = "Ready";

function checkStatus() {
    console.log(status);
    let status = "Loading";
}

checkStatus();

//Lebih tepatnya, JavaScript tidak menggunakan variabel global karena sudah menemukan binding lokal dengan nama yang sama. Binding lokal tersebut berada dalam TDZ, jadi aksesnya menghasilkan error.