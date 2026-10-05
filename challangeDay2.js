// const numbers = [10, 20, 30, 40, 50];

// //1. Print angka pertama
// console.log(numbers[0]);

// //2. Print angka terakhir
// console.log(numbers[numbers.length - 1]);

// //3. Print jumlah item
// console.log(numbers.length);

// //4. Ubah angka 30 menjadi 35
// numbers[2] = 35
// console.log(numbers[2]);

// //5. Tambah 60 di akhir array
// numbers.push(60);
// console.log(numbers);

// //6. Hapus angka terakhir
// numbers.pop();
// console.log(numbers);

// //7. Loop semua angka menggunakan for...of
// for (const number of numbers) {
//     console.log(number);
// }

// //8. Buat variabel total dan gunakan for...of untuk menghitung total seluruh angka
// //9. print hasi akhirnya
// let total = 0;

// for (const number of numbers) {
//     total += number;
// }

// console.log(`First: ${numbers[0]}`)
// console.log(`Last: ${numbers[numbers.length - 1]}`)
// console.log(`Length: ${numbers.length}`)
// console.log(`Total: ${total}`)

const products = [
    {
        id: 1,
        name: "Keyboard",
        price: 500000
    },
    {
        id: 2,
        name: "Mouse",
        price: 250000
    },
    {
        id: 3,
        name: "Monitor",
        price: 2000000
    }
];

console.log(products[0].name);
console.log(products[products.length - 1].price);

products.unshift({
    id: 4,
    name: "Webcam",
    price: 750000
})

const removedProduct = products.shift();
console.log(removedProduct);

products.push({
    id: 5,
    name: "Headset",
    price: 600000
})

for ( const product of products) {
    console.log(`${product.name} - Rp${product.price}`);
}

for (let i = 0; i < products.length; i++) {
    console.log(`${i} - ${products[i].name}`)
}

let total = 0;
for (const totalProduct of products) {
    total += totalProduct.price;
}
console.log(`Total: ${total}`);

//Perbedaan push() & unshift() = push() menambahkan item pada akhir array, sedangkan unshift() menambahkan item pada awal array.

//Perbedaan pop() & shift() = pop() menghapus item pada akhir array, sedangkan shift() menghapus item pada awal array.

//for...of mengembalikan value dari setiap item dalam array, sedangkan for...in mengembalikan index dari setiap item dalam array.