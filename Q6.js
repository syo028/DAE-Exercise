// Define initial information and data
var info = {
    name: "聚餐分帳計算器",
    date: "2024/03/21",
    place: "Hong Kong",
};
var items = [];
// Add an item to the list
function addItems(name, item, price) {
    if (name && item && price >= 0) {
        items.push({
            name: name,
            item: item,
            price: price,
        });
        console.log("".concat(item, " is added"));
    }
    else {
        console.log("Missing name, item, or price. Skipping...");
    }
}
// Calculate the total price of all items
function calTotal() {
    var total = 0;
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        total += item.price;
    }
    console.log("Total (in HKD): " + total.toFixed(2));
    return parseFloat(total.toFixed(2));
}
// Calculate the total tip based on a percentage
function calTip(total, tipPercentage) {
    var tip = (total * tipPercentage) / 100;
    console.log("Tip (in HKD): ".concat(tip.toFixed(2)));
    return parseFloat(tip.toFixed(2));
}
// Calculate the split amounts per person
function calSplit(tipPercentage) {
    var nameList = {};
    for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
        var item = items_2[_i];
        if (!nameList[item.name]) {
            nameList[item.name] = item.price;
        }
        else {
            nameList[item.name] += item.price;
        }
    }
    var total = calTotal();
    var tip = calTip(total, tipPercentage);
    var totalWithTip = total + tip;
    console.log("Total with Tip (in HKD): ".concat(totalWithTip.toFixed(2)));
    var roundedNameList = {};
    var totalRounded = 0;
    // Round individual amounts and ensure they add up correctly
    for (var name_1 in nameList) {
        var individualAmount = (nameList[name_1] / total) * totalWithTip;
        var roundedAmount = parseFloat(individualAmount.toFixed(1));
        roundedNameList[name_1] = roundedAmount;
        totalRounded += roundedAmount;
    }
    // Adjust for rounding errors
    var roundingError = parseFloat(totalWithTip.toFixed(1)) - totalRounded;
    if (Math.abs(roundingError) > 0.01) {
        // Distribute rounding error to the first person
        var firstPerson = Object.keys(roundedNameList)[0];
        if (firstPerson) {
            roundedNameList[firstPerson] += roundingError;
        }
    }
    console.log("Individual Payments:");
    for (var name_2 in roundedNameList) {
        console.log("".concat(name_2, " needs to pay (in HKD): ").concat(roundedNameList[name_2].toFixed(1)));
    }
    return roundedNameList;
}
// Show all items in the list
function showItems() {
    console.log("==================================");
    console.log("RECORD");
    for (var _i = 0, items_3 = items; _i < items_3.length; _i++) {
        var item = items_3[_i];
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
    var testTotal = calTotal();
    console.assert(testTotal === 150, "Test 1 Failed: Expected 150, got ".concat(testTotal));
    // Test 2: Tip Calculation
    var testTip = calTip(150, 10); // 10% tip
    console.assert(testTip === 15, "Test 2 Failed: Expected 15, got ".concat(testTip));
    // Test 3: Split Calculation
    items = [];
    addItems("Alice", "Pasta", 100);
    addItems("Bob", "Salad", 50);
    addItems("Alice", "Drink", 50); // Alice has a total of 150
    var testSplit = calSplit(10); // 10% tip on 200 total
    console.assert(testSplit["Alice"] === 165 && testSplit["Bob"] === 55, "Test 3 Failed: Expected Alice to pay 165 and Bob to pay 55, got Alice: ".concat(testSplit["Alice"], ", Bob: ").concat(testSplit["Bob"]));
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
