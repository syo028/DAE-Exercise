// Define types for the objects used
type Item = {
    name: string;
    item: string;
    price: number;
  };
  
  type Info = {
    name: string;
    date: string;
    place: string;
  };
  
  type NameList = {
    [key: string]: number;
  };
  
  // Define initial information and data
  let info: Info = {
    name: "聚餐分帳計算器",
    date: "2024/03/21",
    place: "Hong Kong",
  };
  
  let items: Item[] = [];
  
let info = {
    name: "聚餐分帳計算器",
    date: '2024/03/21',
    place: 'Hong Kong'
}
let items = []
function addItems(name,item,price) {
    if(name && item && price){
        items.push(
            {
                name: name,
                item: item,
                price: price
            }
        )
        console.log(item, "is added")
    }else{
        console.log("name or item or price, then skip")
    }
}
let isSplit = false
function calTotal(){
    let total = 0
    for(let item of items){ 
        total = total + item.price 
    }

    console.log('Total (in HKD): ' + parseFloat(total).toFixed(2))
}
let nameList = {} 
function calSplit(){
    for(let item of items){
        if(!nameList[item.name]){ 
            nameList[item.name] = item.price 
        }else{
            nameList[item.name] = nameList[item.name] + item.price 
        }
    }
    for(let name in nameList){
        console.log(name, 'need to pay (in HKD)', parseFloat(nameList[name]).toFixed(2))
    }
}
//Optional
//integrate the cal function
function bill(){
//Optional
console.log("Repeat the order record")
showItems()

if(isSplit){
    calSplit()
}else{
    calTotal()
}
}
//     - 列出詳細清單
function showItems(){
    console.log("==================================")
    console.log("RECORD")
    for(let item of items){
        console.log("nae:", item.name + ", item:", item.item + ", price (in HKD):", parseFloat(item.price).toFixed(2))
    }
    console.log("==================================")
}

//Testing
console.log(info)
addItems("Ken","Rice",100)
addItems("John","Soup",10)
addItems("John","Beef",30)
addItems("Ken","Apple",60)
addItems("Wendy","Pock",55)
showItems()
calSplit()
calTotal()
//bill()