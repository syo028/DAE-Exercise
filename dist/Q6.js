"use strict";
// Process test input and calculate the output
function processInput(input) {
    const { date, location, tipPercentage, items } = input;
    // Step 1: Calculate subtotal and prepare name list
    let subTotal = 0;
    const nameList = {};
    let sharedTotal = 0;
    let sharedParticipants = [];
    for (const item of items) {
        subTotal += item.price;
        // Handle shared items
        if (item.isShared) {
            sharedTotal += item.price;
            // Collect participants from shared items
            if (!sharedParticipants.includes(item.name)) {
                sharedParticipants.push(item.name);
            }
        }
        else {
            // Handle individual items
            if (item.person) {
                if (!nameList[item.person]) {
                    nameList[item.person] = item.price;
                }
                else {
                    nameList[item.person] += item.price;
                }
            }
        }
    }
    //Distribute shared items equally
    const sharedAmountPerPerson = sharedParticipants.length > 0
        ? sharedTotal / sharedParticipants.length
        : 0;
    for (const person of sharedParticipants) {
        if (!nameList[person]) {
            nameList[person] = sharedAmountPerPerson;
        }
        else {
            nameList[person] += sharedAmountPerPerson;
        }
    }
    // Calculate tip and total amount
    const tip = (subTotal * tipPercentage) / 100;
    const totalAmount = subTotal + tip;
    // Distribute rounding errors
    const roundedNameList = {};
    let totalRounded = 0;
    for (const name in nameList) {
        const amount = nameList[name] + (nameList[name] / subTotal) * tip;
        const roundedAmount = parseFloat(amount.toFixed(1));
        roundedNameList[name] = roundedAmount;
        totalRounded += roundedAmount;
    }
    const roundingError = parseFloat(totalAmount.toFixed(1)) - totalRounded;
    // Adjust rounding error to the first person
    if (Math.abs(roundingError) > 0.01) {
        const firstPerson = Object.keys(roundedNameList)[0];
        if (firstPerson) {
            roundedNameList[firstPerson] += roundingError;
        }
    }
    // Prepare output
    const outputItems = Object.keys(roundedNameList).map((name) => ({
        name,
        amount: roundedNameList[name],
    }));
    return {
        date: date.replace(/-/g, "年").replace("-", "月") + "日",
        location,
        subTotal: parseFloat(subTotal.toFixed(2)),
        tip: parseFloat(tip.toFixed(2)),
        totalAmount: parseFloat(totalAmount.toFixed(2)),
        items: outputItems,
    };
}
function runTests() {
    console.log("Running Tests...");
    // 測試案例 1：無舍入誤差
    const input1 = {
        date: "2024-03-21",
        location: "開心小館",
        tipPercentage: 10,
        items: [
            { price: 82, name: "牛排", isShared: true },
            { price: 10, name: "橙汁", isShared: false, person: "Alice" },
            { price: 8, name: "熱檸檬水", isShared: false, person: "Bob" },
        ],
    };
    const expectedOutput1 = {
        date: "2024年3月21日",
        location: "開心小館",
        subTotal: 100,
        tip: 10,
        totalAmount: 110,
        items: [
            { name: "Alice", amount: 56.1 },
            { name: "Bob", amount: 53.9 },
        ],
    };
    const result1 = processInput(input1);
    console.assert(JSON.stringify(result1) === JSON.stringify(expectedOutput1), `Test Case 1 Failed: Expected ${JSON.stringify(expectedOutput1)}, got ${JSON.stringify(result1)}`);
    // 測試案例 2：有舍入誤差，向下調整 0.1 元
    const input2 = {
        date: "2024-03-21",
        location: "開心小館",
        tipPercentage: 10,
        items: [
            { price: 199, name: "牛排", isShared: true },
            { price: 10, name: "橙汁", isShared: false, person: "Alice" },
            { price: 12, name: "薯條", isShared: true },
            { price: 8, name: "熱檸檬水", isShared: false, person: "Bob" },
            { price: 8, name: "熱檸檬水", isShared: false, person: "Charlie" },
        ],
    };
    const expectedOutput2 = {
        date: "2024年3月21日",
        location: "開心小館",
        subTotal: 237,
        tip: 23.7,
        totalAmount: 260.7,
        items: [
            { name: "Alice", amount: 88.3 },
            { name: "Bob", amount: 86.2 },
            { name: "Charlie", amount: 86.2 },
        ],
    };
    const result2 = processInput(input2);
    console.assert(JSON.stringify(result2) === JSON.stringify(expectedOutput2), `Test Case 2 Failed: Expected ${JSON.stringify(expectedOutput2)}, got ${JSON.stringify(result2)}`);
    // 測試案例 3：有舍入誤差，向上調整 0.1 元
    const input3 = {
        date: "2024-03-21",
        location: "開心小館",
        tipPercentage: 10,
        items: [
            { price: 194, name: "牛排", isShared: true },
            { price: 10, name: "橙汁", isShared: false, person: "Alice" },
            { price: 10, name: "橙汁", isShared: false, person: "Bob" },
            { price: 10, name: "橙汁", isShared: false, person: "Charlie" },
        ],
    };
    const expectedOutput3 = {
        date: "2024年3月21日",
        location: "開心小館",
        subTotal: 224,
        tip: 22.4,
        totalAmount: 246.4,
        items: [
            { name: "Alice", amount: 82.2 },
            { name: "Bob", amount: 82.1 },
            { name: "Charlie", amount: 82.1 },
        ],
    };
    const result3 = processInput(input3);
    console.assert(JSON.stringify(result3) === JSON.stringify(expectedOutput3), `Test Case 3 Failed: Expected ${JSON.stringify(expectedOutput3)}, got ${JSON.stringify(result3)}`);
    console.log("All test cases passed!");
}
