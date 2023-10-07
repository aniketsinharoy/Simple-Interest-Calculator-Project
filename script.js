function compute()
{
    console.log("compute function working");
    var principal = document.getElementById("principal").value;
    if(principal=="" || parseInt(principal)<=0)
    {
        alert("Enter positive number.");
        document.getElementById("principal").focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * rate * years)/100;
    var amount = parseInt(interest)+parseInt(principal);
    var year = new Date().getFullYear()+parseInt(years);
    var p = "If you deposit <mark>" + principal+",</mark><br>";
    var r = "at an interest rate of <mark>"+rate+"%. </mark><br>";
    var a = "You will receive an amount of <mark>"+interest+",</mark><br>";
    var am = "in the year <mark>"+year+".</mark><br>";
    document.getElementById("result").innerHTML=p+r+a+am;
}
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        