// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
let minprice = inventory[0].quantity
let nameall = ""
for (let i =0 ; i < inventory.length ; i++) {

  if(minprice > inventory[i].quantity) {

    minprice = inventory[i].quantity
    nameall = inventory[i].name
  }

}
console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${nameall} ${minprice}`)
