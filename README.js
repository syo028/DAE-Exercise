//DAE-Exercise
console.log(1+2)
console.log("1"+"2")
console.log ('Hi, this is Zeno')
//
let base = 20
let topping = 5
let sum = base+topping 
console.log(sum)
//
let name = "Zeno"
console.log(name+"!")
//
let price = 10
price = 12
console.log(price)
//
let sum1 = (1+2)
let result = Math.max(2,sum1)
console.log(result)
//{object}
let user = {}
user.id=10
user.name="Alice"
console.log(user.name+user.id)
let user1={}
user1.id=11
user1.name="Mickey"
console.log(user1)
//
let message = "Hino, Mickey, Zenobia"
console.log(message)
let names = message.split(',')
console.log(names)
let title = "Mr"
let nickname = "Hino"
console.log(title + nickname)
//let title + nickname = "Fullname"
let firstname = "Zenobia"
let surname = "LAM" 
let fullname = firstname + " " +surname
let sentence = "I am A "
console.log(fullname)
console.log(sentence.length)
let sentence1 = sentence.replace("A",fullname)
console.log(sentence1)
let sentence2 = " , my age is B. "
let sentence3 = sentence2.replace("B", "25")
let newsentence = sentence1 + sentence3
console.log(newsentence)
// check password
let validpassword = 123
console.log("1 criteria has problem ", validpassword.length>=8)
let newvalipassword
//Array
let colors = ['red','pink','yellow']
colors.push('green')
console.log(colors)
colors.unshift('purple')
console.log(colors)
let newcolors = colors.pop()
console.log(newcolors)
let colorstring = colors.join(', ')
console.log(colorstring)
console.log(colors.length)
//
let colorsinchinese = ['紅色','黃色','藍色']
console.log(colorsinchinese)
let filteredcolor = colorsinchinese.filter(coloroinchinese =>coloroinchinese.includes("色"))
//
let testingcolors = ['紅色', '綠色', '藍色', '黃色', '紫色']
let filteredcolors = testingcolors.filter(testingcolors =>!testingcolors.includes('色'))
console.log(filteredcolors)
//
let fruits = ['Apple', 'Banana', 'Cherry']
fruits.forEach(fruits =>console.log("I love" +" "+ fruits))
//
let values = [5, 10, 15]
let total = calculateSum(values)
console.log(total)