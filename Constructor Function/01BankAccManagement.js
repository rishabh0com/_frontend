//constructor function 
function BankAccount(accountNumber,name,type,balance,isActive){

    //store argument values :
    this.accNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.isActive = isActive;

    //create method ::

    //deposit methot : for depodite the amount
    this.deposit = function(amount){
        if(isActive == true){
            console.log('A/C '+ this.accNumber +" your balance is : "+ this.balance)
            this.balance += amount;
            console.log('A/C '+ this.accNumber + " deposit amount : +"+amount);
            console.log('A/C '+ this.accNumber + ' your current balance is : '+ this.balance);
        }
        else{
            console.log('A/C '+ this.accNumber + ' your account is not active.');
        }
    }

    //withdraw method : for withdraw amount 
    this.withdraw = function(amount){
        if(isActive == true){
            console.log('A/C '+ this.accNumber +" your balance is : "+ this.balance)
            this.balance -= amount;
            console.log('A/C '+ this.accNumber + " withdraw amount : -"+amount);
            console.log('A/C '+ this.accNumber + ' your current balance is : '+ this.balance);
        }
        else{
            console.log('A/C '+ this.accNumber + ' your account is not active.');
        }
    }

    //balance method : for checking account balance 
    this.checkBalance = function(){
        if(isActive == true){
            console.log('A/C '+ this.accNumber + " your current balance is : "+ this.balance);
        }
        else{
            console.log('A/C '+ this.accNumber + " checking balance is not possible because your account is not Active.")
        }
        
    }

    //Active method : for checking account is active or not
    this.Active = function(){
        if(isActive == true){
            console.log('A/C '+ this.accNumber + ' your account is Active.')
        }
        else{
            console.log('A/C '+ this.accNumber + " your account is not Active.")
        }
    }
    //

}


let acc1 = new BankAccount(1234567,"rishabh","saving",5000,true);
acc1.deposit(4000);

let acc2 = new BankAccount(7654321,"Rahul","current",17000,true);
acc2.withdraw(7000);

let acc3 = new BankAccount(7856342,"Akash","saving",18000,false);
acc3.checkBalance();
acc3.Active();

let arr = [acc1,acc2,acc3];

let getTotal = function(){
    let sum = 0;
    arr.forEach((ele)=>{
        if(ele.isActive == true){
        sum += ele.balance;
        }
    })
    console.log("All active account balance is : "+sum);
}
//total balance of active account :
getTotal()


