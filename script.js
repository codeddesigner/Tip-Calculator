//Calculate Tip
function calculateTip() {
    let billAmt = document.getElementById("billamt").value;
    let serviceQual = document.getElementById("serviceQual").value;
    let numOfPeople = document.getElementById("peopleamt").value;

    // here i am validating the input // i created an alert dialog box
    if (billAmt === "" || serviceQual == 0 || numOfPeople == 0) {
        alert("Please Pal, U gotta Fill that up");
        return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //Calculate tip
    let total = (billAmt * serviceQual) / numOfPeople;
    
    //2 decimal placess rounding
    total = Math.round(total * 100) / 100;
    
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);

    //Show the tips value // 
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}

//if the Page Reloads hide the tip  amount// not so sure
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//Click the button & call the function
document.getElementById("calculate").onclick = function () {
    calculateTip();

};
