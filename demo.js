console.log("Hello word");

//Khai báo biến:var,let,const
var userName = "Nguyen Văn A";
console.log("userName trước khi khai báo lại= ",userName);

//Khai báo lại giá trị
var userName = "Le văn B";

console.log("userName sau =",userName);

//Gán lại giá trị
userName = "Nguyen Văn C";

console.log("usernam sau khi gán lại giá trị",userName);

//Phạm vi (toàn cục)

//Hoisting (sử dụng biến trước khi khai báo, tuy nhiên giá trị là undefined)
age= 10;
console.log("age:" ,age);
var age=30;

// Nhược điểm :code khó bảo trì,khó kiểm soát đucợ biến,khó phá hiện lỗi

//Từ năm 2015 js phát hành phiên bản ES6 (thêm 2 từ khóa let và const)
let studentName= "Nhuyen Minh nam";
console.log(studentName);


//Khai báo lại
// let userName = "Le Văn A";

//Gán lại giá trị
studentName = "Le Văn B";
console.log("studenName sau khi gán lại:",studentName);

 //Phạm vi (block)


 //Hoising (có) TDZ

 //Từ khóa const
 const PI =3.14;

 //Khbai báo lại(không)

 //Gán lại giá trị (ko)
 //Phạm vi (cục bộ-block)

//hoising (có nhung tương tự nhue let)

//Ccas kiểu dữ liệu cơ bản
//1.Kiểu số
const firstNumber = 10 ;
const secondNumber = 30 ;
console.log("firstName =" ,firstNumber);
console.log("secondcumnbet=" ,secondNumber);
console.log("kiểu dưc liệu của biến firstName:",  typeof firstNumber);


console.log(firstNumber+"+" + secondNumber + " =",firstNumber+secondNumber);
console.log(firstNumber+"-" + secondNumber - " =",firstNumber-secondNumber);
console.log(firstNumber+"*" + secondNumber * " =",firstNumber*secondNumber);
console.log(firstNumber+"/" + secondNumber / " =",firstNumber/secondNumber);
console.log(firstNumber+"%" + secondNumber % " =",firstNumber%secondNumber);


//2.Kiểu chuỗi
const email = "nva@gmail.com";
const address = "Thanh Xuân,Hà Nội";

//2.1 Thao tác nối chuỗi
console.log("email = "+ email +  "- " + "Địa chỉ " +address);

//Template string ('')
console.log(`Email = ${email}; Address=${address}`);

//3.Kiểu boolean (true/false)
console.log(false);

//4. Kiểu undefined
let gender;
console.log("gender",gender);

//5.Kiểu null:khi khai báo một biến,nếu chúng ta chưa muốn hoặc không xác định 
//trước được giá trị của biến đó thì mặc định có thể gán là null
const user = null;

//6.kiểu NaN
console.log("kiểu dữ liệu của NaN:",typeof NaN);
console.log("Result ",10/"abc");

//Chuyển đổi dữ liệu

const mathScore = 10;
const historyScore = "8";
// Chuyển đổi từ 1 chuỗi thành số

console.log(Number(historyScore));
console.log(parseInt(historyScore));
console.log(+historyScore);

//2.Chuyển đổi từ 1 số sang một chuỗi
console.log(String(mathScore));
console.log(mathScore.toString());

// 3.Chuyển đổi boolean

console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean("")); //false
console.log(Boolean(false)); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false

// Cơ chế nhập xuất
// const myName = prompt("Nhập tên của bạn:"); //Kiểu dữ liệu string hoặc null
// const myAge = +prompt("Nhập tuổi của bạn: ");

//console.log("myMane =", myName);
//console.log("myAge =",myAge);

// // Cơ chế xuất tỏng JS
// alert(myName);
// alert(myAge)

//Cơ chế lựa chọn
const isConfirm =confirm("Bạn có xác nhận đăng xuất!");
console.log("isConfirm",isConfirm);











