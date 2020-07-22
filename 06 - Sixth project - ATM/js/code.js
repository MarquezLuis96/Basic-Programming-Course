//Cashier
var cashier = new ATM();

//Money to withdraw
var wdMoney;

var txtF_withdraw = document.getElementById("txtF_Withdraw");

function captureWithdraw() {
    wdMoney = parseInt(txtF_withdraw.value);
    cashier.wdBankNotes(wdMoney);
}

var btn_Withdraw = document.getElementById("btn_Withdraw");
btn_Withdraw.addEventListener("click",captureWithdraw);