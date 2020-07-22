//Available money
var avMoney;

//Available bills
var avBills = [];

//Cash delivered
var delvBills = [];

//bankNotes: Number of bankNotes of a denomination to deliver
var bankNotes;

//div: Math.floor division to choose the amount of bills to be delivered
var div;

//ATM Class
class ATM {

    constructor() {
        avBills.push(new Bill(50, 3));
        avBills.push(new Bill(20, 2));
        avBills.push(new Bill(10, 2));
        bankNotes = 0;
        avMoney = this.calculateMoney();
        console.log("Available money: " + this.calculateMoney());
        console.log("Available bills:");
        console.log(avBills);
    }


    seeATM() {
        console.log(avMoney);
    }

    //substractBills; den: denomination ; q: quantity;
    substractBills(den, q) {
        for(var i=0; i < avBills.length; i++) {
            if(avBills[i].value == den) {
                avBills[i].quantity-=q;
                break;
            }
        }
    }

    //delvBankNotes: In this function, the least amount of banknotes are delivered
    delvBankNotes(wdMoney) {
        for(var bi of avBills) {
            bankNotes = 0;
            if(wdMoney > 0) {
                div = Math.floor(wdMoney/(bi.value));
                if(div > bi.quantity) {
                    bankNotes = bi.quantity;
                    this.substractBills(bi.value, bankNotes);
                }
                else {
                    bankNotes = div;
                    this.substractBills(bi.value, bankNotes);
                }

                delvBills.push(new Bill(bi.value, bankNotes));
                wdMoney-=(bi.value * bankNotes);

            }
            avMoney = this.calculateMoney();

        }
        console.log("Delivered bills: ");
        console.log(delvBills);
        console.log("Available money: " + this.calculateMoney());
        console.log("Available bills:");
        console.log(avBills);
    }

    //Calculate de amount of available money
    calculateMoney() {
        var din = 0;
        for(var bi of avBills) {
            din+=(bi.value * bi.quantity);
        }
        return din;
    }

    //wdBankNotes: Check if the cashier has money, if true he withdraws it, if false he shows a message
    wdBankNotes(wdMoney) {
        if(avMoney >= wdMoney) {
            this.delvBankNotes(wdMoney);
        }
        else {
            console.log("No money available");
        }
    }
}