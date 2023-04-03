function Calculation() {
    var a = Number(document.getElementById('amount').value);
    var m = Number(document.getElementById('month').value);
    var p = Number(document.getElementById('percent').value);

    var i = ((a*p)/100)/m;

    var monthly = (a+((a*p)/100))/12;

    document.getElementById('monthly_payment').innerHTML = monthly.toFixed(2);
    document.getElementById('total_payment').innerHTML = (monthly*m).toFixed(2);
}