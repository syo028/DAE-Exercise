// 聊天室訊息操作
//   - 建立已傳送訊息的陣列
//   - 使用 push 傳送新訊息
//   - 使用 pop 收回最後一則訊息
//   - 使用 length 檢查已傳送的訊息數量

let sentMessages = ["Hello","Hi"]
console.log(sentMessages)
sentMessages.push("Welcome")
console.log(sentMessages)
console.log(sentMessages.pop())
console.log('已傳送的訊息數量: ' + sentMessages.length)

// - 學生成績登記
//   - 建立學生名單陣列和對應的成績陣列
//   - 使用 includes 檢查特定學生是否已登記成績
//   - 使用 indexOf 查詢學生在名單中的索引位置
//   - 使用 map 產生學生成績報表（例：「小明：90 分、小華：85 分」）

const studentNames = ['小明','小華']
const studentGrades = [90,85]
const fullStudentDetails = [studentNames[0], studentGrades[0]]
const fullStudentDetails1 = [studentNames[1], studentGrades[1]]
const studentReport = fullStudentDetails.join(" :") +' '+ fullStudentDetails1.join(" :")
console.log(studentReport)

console.log('report:',
studentNames.map((name,index)=>`${name}: ${studentGrades[index]}`)
)

// function isStudentRegistered(studentReport){
//     return studentNames.indexOf(studentReport) >= 0
// }

console.log(studentReport.includes("小明")) //true
console.log(studentReport.includes("小華"))//true
console.log(studentReport.includes("Zenobia"))//false
console.log(studentReport.indexOf("小明"))//0
console.log(studentReport.indexOf("小華"))//7

