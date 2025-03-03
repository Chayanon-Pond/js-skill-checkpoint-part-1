// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้

function calculateTotalPrice (products,promotionCode) {
  let toailprice = 0
  let str = ""

  for(let sum of products) {
    // console.log(sum)
    toailprice += sum.quantity * sum.price 

  }if (promotionCode === "20") {
    toailprice = toailprice - (toailprice*0.2)
    str = `ลด 20% จากมูลค่ารวมของสินค้าในตะกร้า ${toailprice}`

  }else if (promotionCode === "50") {
    toailprice = toailprice - (toailprice*0.5)
    str = `ลด 50% จากมูลค่ารวมของสินค้าในตะกร้า ${toailprice}`
  }else {
    str = `ไม่ได้รับส่วนลด ${toailprice}`

  }return str
}
console.log(calculateTotalPrice(products,promotionCode))