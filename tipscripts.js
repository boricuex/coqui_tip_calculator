// Tip scripts

// Functions
function calculateTip() {
    
    // Store the data of the inputs
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var totalPeople = document.getElementById("totalPeople").value;

    // Quick validations
    if(billAmount === "") {
        return window.alert("Please enter the total amount of the bill!");
    }

    if(serviceQuality === "0"){
        return window.alert("Please select how was your service!");
    }

    if(totalPeople == "" || totalPeople <= 1){
        totalPeople = 1;

    } 

    else if(totalPeople >= 2) {
        document.getElementById("totalTip").style.display = "block"
        document.getElementById("each").style.display = "block";
    }

    // Do some math
    var total = (billAmount * serviceQuality) / totalPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    // Display the tip
    document.getElementById("totalTip").style.display = "block"
    document.getElementById("tip").innerHTML = total;
}

// Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Clicking the button calls our custom function
document.getElementById("calculate").onclick = function() { calculateTip(); };