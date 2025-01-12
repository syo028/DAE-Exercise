// // 實作簡單計算機功能，計算：
//    // 1. 兩件商品的總價
//    // 2. 折扣後的價格（八折）
//    // 3. 平均價格
//    let item1 = 199
//    let item2 = 299

//    let total = // 你的程式碼
//    let discount = // 你的程式碼
//    let average = // 你的程式碼
//    ```
let item1 = 199
let item2 = 299
console.log(item1 + item2)
let newPrices = item1 + item2
console.log((newPrices*0.8).toFixed(1)) //toFixed(1) = 小數點後1個位
console.log((newPrices/2).toFixed(1))

// 2. **溫度轉換**
//    ```javascript
//    // 將攝氏溫度轉換為華氏溫度
//    // 公式：°F = °C × 9/5 + 32
//    let celsius = 25
//    let fahrenheit = // 你的程式碼
//    ```
let celsius = 25
let fahrenheit = console.log(celsius * (9/5) +32)

// 1. **發票對獎**

//    ```javascript
//    // 實作發票對獎程式
//    // 特別獎號碼：12345678
//    // 使用者發票號碼：後三碼為 678
//    // 對中後三碼可得 200 元

//    let specialNumber = 12345678
//    let userNumber = 87654678

//    // 提示：可使用 % 運算子取得後三碼
//    let lastThreeDigits = // 你的程式碼
//    let isWinner = // 你的程式碼

let specialNumber = 12345678
let userNumber = 87654678
let specialNumberLastThree = specialNumber % 1000 ///%1000 = slice(-3)
let userNumberLastThree = userNumber % 1000
let winner = userNumberLastThree === specialNumberLastThree
if (winner){
    console.log("Bingo")
}   else { 
    console.log("Sorry")
}

// 1. **個人名片**

//    ```javascript
//    // 建立一個個人名片，包含：
//    // - 姓名: xxx
//    // - 職稱: xxx
//    // - 電話: xxx
//    // - Email: xxx
//    let name = "王小明"
//    let title = "軟體工程師"
//    let phone = "0912-345-678"
//    let email = "ming@example.com"

//    let businessCard = // 使用樣板字串建立名片格式

let name = "王小明"
let title = "軟體工程師"
let phone = "0912-345-678"
let email = "ming@example.com"
let greeting = `Hello, this is ${name}, I am a ${title}, please contact me in ${phone} or ${email} if anything.`
console.log(greeting)
let businessCard = `
Name: ${name};
Title: ${title};
Phone Number: ${phone};
Email: ${email}
`
console.log(businessCard)

// . **商品描述**

//    ```javascript
//    // 建立商品描述，包含：
//    // - 商品名稱: xxx
//    // - 原價: xxx
//    // - 折扣價: xxx
//    // - 折扣百分比: xxx
//    let productName = "機械鍵盤"
//    let originalPrice = 2999
//    let discount = 0.8

//    let description = // 建立完整商品描述
//    ```    
let productName = "機械鍵盤"
let originalPrice = 2999
let discount = 0.8
let description = `
Product Name: ${productName}
Original Price HKD$${originalPrice}
Discount: ${discount}
`
console.log(description)

















































