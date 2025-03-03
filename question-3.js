// Question #3
let userPassword = "ssswnalWadqQ";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength (x) {
    let ans = ""
    for(let i = 0; i < userPassword.length ; i++) {
        
        if (i < 6) {
            ans = "Weak"

        }else  if (i <= 6 && i>= 10) {
            ans = "Medium"

        }else if (i > 10) {
            ans = "Strong"
        }


    } return ans
}
console.log(checkPasswordStrength(userPassword))

