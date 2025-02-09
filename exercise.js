// // // 實作簡單計算機功能，計算：
// //    // 1. 兩件商品的總價
// //    // 2. 折扣後的價格（八折）
// //    // 3. 平均價格
// //    let item1 = 199
// //    let item2 = 299

// //    let total = // 你的程式碼
// //    let discount = // 你的程式碼
// //    let average = // 你的程式碼
// //    ```
// let item1 = 199
// let item2 = 299
// console.log(item1 + item2)
// let newPrices = item1 + item2
// console.log((newPrices * 0.8).toFixed(1)) //toFixed(1) = 小數點後1個位
// console.log((newPrices / 2).toFixed(1))

// // 2. **溫度轉換**
// //    ```javascript
// //    // 將攝氏溫度轉換為華氏溫度
// //    // 公式：°F = °C × 9/5 + 32
// //    let celsius = 25
// //    let fahrenheit = // 你的程式碼
// //    ```
// let celsius = 25
// let fahrenheit = console.log(celsius * (9 / 5) + 32)

// // 1. **發票對獎**

// //    ```javascript
// //    // 實作發票對獎程式
// //    // 特別獎號碼：12345678
// //    // 使用者發票號碼：後三碼為 678
// //    // 對中後三碼可得 200 元

// //    let specialNumber = 12345678
// //    let userNumber = 87654678

// //    // 提示：可使用 % 運算子取得後三碼
// //    let lastThreeDigits = // 你的程式碼
// //    let isWinner = // 你的程式碼

// let specialNumber = 12345678
// let userNumber = 87654678
// let specialNumberLastThree = specialNumber % 1000 ///%1000 = slice(-3)
// let userNumberLastThree = userNumber % 1000
// let winner = userNumberLastThree === specialNumberLastThree
// if (winner) {
//     console.log("Bingo")
// } else {
//     console.log("Sorry")
// }

// // 1. **個人名片**

// //    ```javascript
// //    // 建立一個個人名片，包含：
// //    // - 姓名: xxx
// //    // - 職稱: xxx
// //    // - 電話: xxx
// //    // - Email: xxx
// //    let name = "王小明"
// //    let title = "軟體工程師"
// //    let phone = "0912-345-678"
// //    let email = "ming@example.com"

// //    let businessCard = // 使用樣板字串建立名片格式

// let name = "王小明"
// let title = "軟體工程師"
// let phone = "0912-345-678"
// let email = "ming@example.com"
// let greeting = `Hello, this is ${name}, I am a ${title}, please contact me in ${phone} or ${email} if anything.`
// console.log(greeting)
// let businessCard = `
// Name: ${name};
// Title: ${title};
// Phone Number: ${phone};
// Email: ${email}
// `
// console.log(businessCard)

// // . **商品描述**

// //    ```javascript
// //    // 建立商品描述，包含：
// //    // - 商品名稱: xxx
// //    // - 原價: xxx
// //    // - 折扣價: xxx
// //    // - 折扣百分比: xxx
// //    let productName = "機械鍵盤"
// //    let originalPrice = 2999
// //    let discount = 0.8

// //    let description = // 建立完整商品描述
// //    ```    
// let productName = "機械鍵盤"
// let originalPrice = 2999
// let discount = 0.8
// let description = `
// Product Name: ${productName}
// Original Price HKD$${originalPrice}
// Discount: ${discount}
// `
// console.log(description)


// // **訊息格式化**

// //    ```javascript
// //    // 將以下訊息格式化：
// //    // - 訂單編號：20240001 (直接顯示)
// //    // - 消費金額：$1,000,000 (千分位逗號)
// //    // - 訂購日期：2024-03-15 (YYYY-MM-DD)
// //    let orderNumber = 20240001
// //    let amount = 1000000
// //    let orderDate = 20240315

// //    // 提示：可使用字串取代方法
// //    let formattedMessage = // 你的程式碼
// const orderNumber = 20240001
// const purchaseAmount = 1000000
// const formattedMessage = purchaseAmount.toLocaleString()
// const orderDate = 20240315
// const orderDateString = orderDate.toString()
// const formattedDate = orderDateString.slice(0, 4) + '-' + orderDateString.slice(4, 6) + '-' + orderDateString.slice(6, 8)
// console.log(formattedMessage)
// console.log(formattedDate)

// // 1. **變數狀態檢查**

// //    ```javascript
// //    // 檢查以下變數的狀態並顯示適當訊息：
// //    // - 如果是 null，顯示 "尚未設定"
// //    // - 如果是 undefined，顯示 "未宣告"
// //    // - 其他情況顯示該值
// //    let username = null
// //    let age = undefined
// //    let nickname = '小明'

// //    function checkValue(value) {
// //      // 你的程式碼
// //    }

// //    console.log('username:', checkValue(username))
// //    console.log('age:', checkValue(age))
// //    console.log('nickname:', checkValue(nickname))

// let username = null
// let age = undefined
// let nickname = "Zeno"
// function checkValue(value) {
//     if (value === null)
//         return "This value is Null "
//     if (value === undefined)
//         return "This value is undefined"
//     return `This value is : ${value}`
// }
// console.log(checkValue(username))
// console.log(checkValue(age))
// console.log(checkValue(nickname))

// // let a: bigint = 9007199254740991n
// // let b: bigint = BigInt(2) //BigInt(2) = 2n; (2) - variables,can be string
// // let num = 3.7;

// // console.log(Math.floor(num));   // 3  （向下取整）
// // console.log(Math.ceil(num));    // 4  （向上取整）
// // console.log(Math.round(num));   // 4  （四捨五入）
// // console.log(Math.trunc(num));   // 3  （截斷小數部分）

// // 去買牛奶。
// // 如果芝士有促銷，就買芝士。
// let hascheesepromotion = true
// let buyMilk = true
// let buyCheese = hascheesepromotion //if buycheese =true = has cheese promotion

// if (buyMilk && hascheesepromotion)
//     console.log("Great!", 100)
// else if (buyMilk && !hascheesepromotion) //=== =exactly the same; !== = opposite with !==; !=false
//     console.log("No Cheese Promotion", 50)
// else if(!buyMilk && !hascheesepromotion) //else: no condition; elseif (condition)
//     console.log("Go another Suppermarket!", 0)

// let a = 4
// let b = 6
// let c = 9
// let d = 10
// let e = 15
// console.log(a<b && b<c && c<d && d<e )

// let radius = 5
// let π = 3.1415
// let area = π * radius**2
// console.log(area)

// let length = 10
// let width = 5
// let perimeter = 2*(length+width)
// console.log(perimeter)

// let firstScore = 85
// let secondScore = 90
// let thirdScore = 78
// let sumScore = firstScore + secondScore + thirdScore
// console.log(sumScore)
// let averageScore = sumScore/3
// console.log(averageScore.toFixed(1)) //if no "+"at the front - string, otherwise, number

// // let score = [86]
// // if (score < 50) {
// //     console.log("Fail")
// // }else if (score>=50){
// //     console.log("Pass")
// // }else if (score >=80 && score <90){
// //     console.log("Great")
// // }else if (score >=90)
// //     console.log("Well Done")

// let score=[89]
// if (score >= 90) {
//     console.log("Well Done")
// }else if (score>= 80&& score <90){
//     console.log("Great")
// }else if (score >=50){
//     console.log("Pass")
// }else if (score <=50)
//     console.log("Fail")

// //switch case must use break
// let color = 'green'
// switch (color) {
// case 'red':
//     console.log('紅色')
// case 'green':
//    console.log('綠色')
// }
// //for loop
// //display 10 times "I love coding"
// for (let i=0; i<10; i++){
//     console.log("I love coding")
// }

// //display "1" to "10"
// for (let i=0;i<11;i++){
//     console.log(`number:${i}`)
// }

// //display "10" to "1"
// for (let i=10; i>0; i--){
//     console.log(`number:${i-1}`)
// }

// //display 以 2 為間距顯示由 1 至 9 的數字，即顯示 1、3、5、7、9
// for (let i=1;i<=9;i+=2){
//     console.log(`number:${i}`)
// }

// //while loop
// let count = 0
// let dice1
// let dice2
// let dice3
// do {
//     dice1 = Math.floor(Math.random() * 6) + 1;
//     dice2 = Math.floor(Math.random() * 6) + 1;
//     dice3 = Math.floor(Math.random() * 6) + 1;
//     count++;
//     console.log(dice1, dice2, dice3)
// } while (dice1 + 1 !== dice2 || dice2 + 1 !== dice3)
// console.log(count)

// 使用 break 語句：尋找 1 到 100 之間的第一個同時是 7 和 11 的倍數的數字
let num = 1;
while (num <= 100) {
    if (num % 7 === 0 && num % 11 === 0) {
        console.log(`找到了！${num} 是 7 和 11 的公倍數`);
        break;
    }
    num++;
}
console.log(num)

import readline from 'readline'

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let number = Math.floor(Math.random()*10)

rl.question("Halo, what is your name ", displayName => {
    console.log('Hi', `${displayName}!`)
    rl.question("Give me a number", userNumber => {
        console.log("Thanks!")
        if (number == userNumber){
            console.log("Correct")
        }else
        console.log("try again~")
        rl.close()
    })

})

























