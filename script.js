function isSameType(value1, value2) {
    // Convert inputs to numbers
    let num1 = Number(value1);
    let num2 = Number(value2);

    // Check if both values are NaN
    if (Number.isNaN(num1) && Number.isNaN(num2)) {
        return true;
    }

    // Compare original types (not converted ones)
    return typeof value1 === typeof value2;
}

// Do not change the code below
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Ensure correct type handling
alert(isSameType(value1, value2));
