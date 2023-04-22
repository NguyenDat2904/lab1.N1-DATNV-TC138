// Tính số chính phương cho từng số
let num = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let tich = [];

for (let i = 0; i < num.length; i++) {
  tich.push(num[i] ** 2);
}
console.log("Bình phương các số của mảng num: " + tich);

// tim so nguyen to
let num2 = [3, 5, 6, 6, 7, 8, 8, 8, 9, 33];
let nguyenTo = [];
for (let i = 0; i < num2.length; i++) {
  for (let j = 2; j <= Math.sqrt(num2[i]); j++) {
    if (num2[i] % j != 0) {
      nguyenTo.push(num2[i]);
    }
  }
}
console.log("------------------------------------");
console.log("Các số nguyên tố: " + nguyenTo);

// tao gio hang co cac qua tao(ten qua, mau, noi san xuat, ngay het han, don vi phan phoi(ten don vi, dia chi don vi)). In ra thong tin san pham.
//Output
// STT
// Ten san pham : ???
// gia : ???;
// ngay het han : ???;
// don vi phoi: ten don vi - dia chi
// sua ngay het han theo index;
// tao index => nhap index => nhap ngay het han ung voi index.
let cart = [];

let fuit_1 = {
  name: "Táo",
  color: "Green",
  price: 10000,
  madeIn: "Nam Định",
  outOfdate: "30/4/2023",
  distributor: {
    company: "NTD",
    address: "Hà Nội",
  },
};
let fuit_2 = {
  name: "Cam",
  color: "Orange",
  price: 20000,
  madeIn: "Vũng Tàu",
  outOfdate: "1/5/2023",
  distributor: {
    company: "HCT",
    address: "Hồ Chí Minh",
  },
};
let fuit_3 = {
  name: "Mít",
  color: "Yellow",
  price: 30000,
  madeIn: "Thanh Hóa",
  outOfdate: "2/5/2023",
  distributor: {
    company: "ACB",
    address: "Nghệ An",
  },
};
cart.push(fuit_1, fuit_2, fuit_3);
for (let i = 0; i < cart.length; i++) {
  console.log("------------------------------------");
  console.log("STT: " + (i + 1));
  console.log("Tên sản phẩm: " + cart[i].name);
  console.log("Giá: " + cart[i].price);
  console.log("Ngày hết hạn: " + cart[i].outOfdate);
  console.log(
    "Đơn vị phân phối: " +
      cart[i].distributor.company +
      " - " +
      cart[i].distributor.address
  );

  
}
let index = Number(prompt("Nhập STT cần sửa:"));
for(var i = 0; i < cart.length; i++) {
    if (index === i + 1) {
    let updateOutOfDate = prompt("Nhập ngày cần sửa: ");
    cart[i].outOfdate = updateOutOfDate;
    console.log("------------------------------------");
    console.log(`Ngày hết hạn mới của ${cart[i].name}: ` + cart[i].outOfdate);
  }
}

//6h : CN
