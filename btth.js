//khai báo các biến cần thiết
let bookName = "   Lập trình web với JavaScript   ";
let authorName = "Nguyễn Văn A";
let publish = 2022;
let price =100000;
let quantity = 100;

//Chuẩn hóa dữ liệu
// Tên sách: Loại bỏ khoảng trắng thừa ở 2 đầu (trim) và chuyển tất cả thành chữ in hoa.
bookName.trim(); //loại bỏ khaonrg trăng ở đầu và cuối
// chuyển tất cả thành chữ in hoa
bookName.toUpperCase();
console.log("chưỡi sau khi loại bỏ khoảng trắng và chuyển thành in hoa:",bookName.trim().toUpperCase());

console.log("Tên tác giả sau khi chuyển thành chư in hoa:",authorName.toUpperCase());
//Tạo mã định danh

console.log("3 kí tự đầu tên của tác giả:",authorName.slice(0,3));
console.log("Năm xuất bản:",publish);
console.log("Số ngẫu nhiên từ 1 đến 1000 :",Math.ceil(Math.random() * 1000));
let bookCode =`${authorName.slice(0,3)}${publish}-${Math.ceil(Math.random() * 1000)}`;
console.log("Book ID: ",bookCode);

//Tính toán số liệu
console.log('Thời gian hiện tại:',new Date());

//lấy ra năm
 let year = new Date().getFullYear();
 let month = new Date().getMonth()+1;
 let day = new Date().getDay();
 let hour = new Date().getHours();
 let minute = new Date().getMinutes();
 let second = new Date().getSeconds();
 let milisecond = new Date().getMilliseconds();

 console.log("Năm hiện tại:",year);
 console.log("Tháng hiện tại:",month);
 
 // Tính tuổi của sách
 let bookAge = year - publish;
 console.log("Tuổi của sách:",bookAge);

 //Tính tổng giá trị
 let totalPrice = price * quantity;
 console.log("Tổng giá trị của kho sách",totalPrice);

 //in ra phiếu nhập kho

console.log(`
        --- PHIẾU NHẬP KHO ---

    Mã sách: ${bookCode}

    Tên sách: ${bookName.trim().toUpperCase()}

    Tác giả: ${authorName.toUpperCase()}

    Năm xuất bản: ${publish}

    Tuổi sách: ${bookAge} năm

    Tổng giá trị: ${totalPrice} VNĐ

    Ngăn kệ gợi ý: Kệ số ${Math.ceil(Math.random() * 10)}
`);

