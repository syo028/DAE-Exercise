"use strict";
// Define initial information and data
let info = {
    name: "聚餐分帳計算器",
    date: "2024/03/21",
    place: "Hong Kong",
};
let items = [];
// Add an item to the list
function addItems(name, item, price) {
    if (name && item && price >= 0) {
        items.push({
            name: name,
            item: item,
            price: price,
        });
        console.log(`${item} is added`);
    }
    else {
        console.log("Missing name, item, or price. Skipping...");
    }
}
// Calculate the total price of all items
function calTotal() {
    let total = 0;
    for (let item of items) {
        total += item.price;
    }
    console.log("Total (in HKD): " + total.toFixed(2));
    return parseFloat(total.toFixed(2));
}
// Calculate the total tip based on a percentage
function calTip(total, tipPercentage) {
    const tip = (total * tipPercentage) / 100;
    console.log(`Tip (in HKD): ${tip.toFixed(2)}`);
    return parseFloat(tip.toFixed(2));
}
// Calculate the split amounts per person
function calSplit(tipPercentage) {
    let nameList = {};
    for (let item of items) {
        if (!nameList[item.name]) {
            nameList[item.name] = item.price;
        }
        else {
            nameList[item.name] += item.price;
        }
    }
    const total = calTotal();
    const tip = calTip(total, tipPercentage);
    const totalWithTip = total + tip;
    console.log(`Total with Tip (in HKD): ${totalWithTip.toFixed(2)}`);
    const roundedNameList = {};
    let totalRounded = 0;
    // Round individual amounts and ensure they add up correctly
    for (let name in nameList) {
        const individualAmount = (nameList[name] / total) * totalWithTip;
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
function showItems() {
    console.log("==================================");
    console.log("RECORD");
    for (let item of items) {
        console.log("name:", item.name + ", item:", item.item + ", price (in HKD):", item.price.toFixed(2));
    }
    console.log("==================================");
}
// Unit Tests
function runTests() {
    // Test 1: Total Calculation
    items = [];
    addItems("Alice", "Pasta", 100);
    addItems("Bob", "Salad", 50);
    const testTotal = calTotal();
    console.assert(testTotal === 150, `Test 1 Failed: Expected 150, got ${testTotal}`);
    // Test 2: Tip Calculation
    const testTip = calTip(150, 10); // 10% tip
    console.assert(testTip === 15, `Test 2 Failed: Expected 15, got ${testTip}`);
    // Test 3: Split Calculation
    items = [];
    addItems("Alice", "Pasta", 100);
    addItems("Bob", "Salad", 50);
    addItems("Alice", "Drink", 50); // Alice has a total of 150
    const testSplit = calSplit(10); // 10% tip on 200 total
    console.assert(testSplit["Alice"] === 165 && testSplit["Bob"] === 55, `Test 3 Failed: Expected Alice to pay 165 and Bob to pay 55, got Alice: ${testSplit["Alice"]}, Bob: ${testSplit["Bob"]}`);
    console.log("All tests passed!");
}
// Testing the implementation
console.log(info);
addItems("Ken", "Rice", 100);
addItems("John", "Soup", 10);
addItems("John", "Beef", 30);
addItems("Ken", "Apple", 60);
addItems("Wendy", "Pork", 55);
showItems();
calSplit(10); // Example with a 10% tip
runTests(); // Run unit tests
