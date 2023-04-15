

function calculate(){

    var t;

    var range = parseInt(document.getElementById("range").value);
    document.getElementById("value-1").textContent = range;

    var range2 = parseInt(document.getElementById("range2").value);
    document.getElementById("value-2").textContent = range2;

    t = range*range2;

    document.getElementById("total").textContent = t;
    document.getElementById("total price").textContent ="₹" +range/range2;   
    
}



   

