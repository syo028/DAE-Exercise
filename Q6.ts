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
  
  // Add an item to the list
  function addItems(name: string, item: string, price: number): void {
    if (name && item && price >= 0) {
      items.push({
        name: name,
        item: item,
        price: price,
      });
      console.log(`${item} is added`);
    } else {
      console.log("Missing name, item, or price. Skipping...");
    }
  }
  
  // Calculate the total price of all items
  function calTotal(): number {
    let total = 0;
    for (let item of items) {
      total += item.price;
    }
    console.log("Total (in HKD): " + total.toFixed(2));
    return parseFloat(total.toFixed(2));
  }
  // Calculate the total tip based on a percentage
function calTip(total: number, tipPercentage: number): number {
    const tip = (total * tipPercentage) / 100;
    console.log(`Tip (in HKD): ${tip.toFixed(2)}`);
    return parseFloat(tip.toFixed(2));
  }
  
  // Calculate the split amounts per person
  function calSplit(tipPercentage: number): NameList {
    let nameList: NameList = {};
  
    for (let item of items) {
      if (!nameList[item.name]) {
        nameList[item.name] = item.price;
      } else {
        nameList[item.name] += item.price;
      }
    }
  
    const total = calTotal();
    const tip = calTip(total, tipPercentage);
    const totalWithTip = total + tip;
  
    console.log(`Total with Tip (in HKD): ${totalWithTip.toFixed(2)}`);
  
    const roundedNameList: NameList = {};
    let totalRounded = 0;

     // Round individual amounts and ensure they add up correctly
  for (let name in nameList) {
    const individualAmount =
      (nameList[name] / total) * totalWithTip;
    const roundedAmount = parseFloat(individualAmount.toFixed(1));
    roundedNameList[name] = roundedAmount;
    totalRounded += roundedAmount;
  }

  // Adjust for rounding errors
  const roundingError = parseFloat(totalWithTip.toFixed(1)) - totalRounded;

  if (Math.abs(roundingError) > 0.01) {
    // Distribute rounding error to the first person
    const firstPerson = Object.keys(roundedNameList)[0];
    if (firstPerson) {
      roundedNameList[firstPerson] += roundingError;
    }
  }

  console.log("Individual Payments:");
  for (let name in roundedNameList) {
    console.log(`${name} needs to pay (in HKD): ${roundedNameList[name].toFixed(1)}`);
  }

  return roundedNameList;
}

// Show all items in the list
function showItems(): void {
  console.log("==================================");
  console.log("RECORD");
  for (let item of items) {
    console.log(
      "name:",
      item.name + ", item:",
      item.item + ", price (in HKD):",
      item.price.toFixed(2)
    );
  }
  console.log("==================================");
}