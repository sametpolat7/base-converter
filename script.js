// When the Enter key is pressed, convertNumber() works.
function Enter(event) {
    if(event.key === "Enter") {
        convertNumber();
    }
}

// Also, when the button is pressed convertNumber() works.
function convertNumber() {
    let selectedOption = document.getElementById("choice").value;
    
// Checks the value of the <select> element and and runs a function depending on it.
    if(selectedOption === "Dec2Bin") { 
        dec2Bin();
    } else if(selectedOption === "Bin2Dec") {
        bin2Dec();
    }
}

// Decimal to Binary Function (dec = decimal, bin = binary)
function dec2Bin() {
    let decData = document.getElementById("base-converter").value;

    // Period or comma control in input
    if(decData.includes(",") || decData.includes(".")) {
        return document.getElementById("output").innerHTML =
        "Please do not use decimal separator.";
    }

    // Number value converted to binary.
    let binResult = (decData >>> 0).toString(2);

    // Added 0, until it is 32 characters long.
    binResult = binResult.padStart(32,"0"); 

    // Added space after every 4 characters.
    let newBin = "";
    for(let i = 0; i < binResult.length; i++) { 
        newBin += binResult[i];
        if((i + 1) % 4 == 0 && (i + 1) != binResult.length) { 
            newBin += " ";
        }
    }
    document.getElementById("output").innerHTML = newBin;
}

// Binary to Decimal Function
function bin2Dec() {
    let binData = document.getElementById("base-converter").value;

    // Period or comma control in input
    if(binData.includes(",") || binData.includes(".")) {
        return document.getElementById("output").innerHTML =
        "Binary number cannot contain commas or periods.";
    }

    // Number value converted to decimal.
    let decResult = parseInt(binData, 2).toString(10);

    // Checking if there are digits greater than 2 in the number
    for(let i = 0; i < binData.length; i++) {
        let basamak = parseInt(binData[i]);

        if(basamak >= 2) {
            document.getElementById("output").innerHTML =
            "Binary has only 0 and 1."
        }
        else {
            document.getElementById("output").innerHTML = decResult;
        }
    }
}

