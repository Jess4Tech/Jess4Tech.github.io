function submitOne() {
    var name = document.getElementById("name").value
    var cost = document.getElementById("cost").value
    var budget = document.getElementById("budget").value
    var div = document.getElementById("results");
    var resultString = "<p> Unit Name: " + name + "<br /> Maximum Purchase Amount For Given Budget: " + Math.floor(budget/cost);
    if (name == "" | cost == "" | budget == "") {
        alert("You have not filled in all the fields");
    } else {
        document.getElementById("results").innerHTML += resultString;
    }
}

function submitTwo() {
    var amt = document.getElementById("amt").value
    var cost = document.getElementById("cost2").value
    var name = document.getElementById("name2").value
    var bal = document.getElementById("bal").value
    var resultString = "<p> Balance after buying " + amt + " " + name + ": " + (bal - (amt*cost));
    if (name == "" | amt == "" | cost == "" | bal == "") {
        alert("You have not filled in all the fields")
    } else {
        document.getElementById("results2").innerHTML += resultString;
    }
}