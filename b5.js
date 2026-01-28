let bookName = prompt("Nhập tên sách:");
let yearBook = Number(prompt("Nhập Năm xuất bản sách:"));

let year = new Date().getFullYear();

let bookAge = year - yearBook;
// in ra
console.log("Sách:",bookName);
console.log("Năm xuất bản:",yearBook);
console.log("Tuổi của sách:",bookAge,"Năm");


