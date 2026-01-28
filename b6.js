let bookName = prompt("Nhập tên sách:");
let bookNumber = prompt("Nhập số thứ tự của sahcs trong thư viện");
//Xủa lý dữ liệu
bookName.trim();
bookName.toUpperCase();
let bookCode = `LIB - ${String(bookName).trim().toUpperCase()} - ${bookNumber}`;
//in ra
console.log("Tên sách gốc:",bookName);
console.log("Mã sách sau khi chuẩn hóa:",bookCode);

