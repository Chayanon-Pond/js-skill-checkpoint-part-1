// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
inventory[0].quantity = 200
inventory[1].quantity = 300
inventory[1].price = 20
// เริ่มเขียนโค้ดตรงนี้
let total = 0
for (sum of inventory) {
  total += (sum.quantity *sum.price)

}
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${total}`)
