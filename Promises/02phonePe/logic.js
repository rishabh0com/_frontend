//catch the icon for money Tansfer
const sendMoneyToContact = document.getElementById("sendMoneyToContact")
const sendMoneyToBank = document.getElementById("sendMoneyToBank")
const sendMoneyToSelf = document.getElementById("sendMoneyToSelf")
const CheckBalance = document.getElementById("CheckBalance")

// catch the popup messages
const wait = document.getElementById("MessageWait");
const MessageforContact = document.getElementById("MessageforContact")
const MessageforBank = document.getElementById("MessageforBank")
const MessageforSelf = document.getElementById("MessageforSelf")
const MessageforBalance = document.getElementById("MessageforBalance")


//catch input boxes
const popupForContact = document.getElementById("popupForContact")
const popupForBank = document.getElementById("popupForBank")
const popupForSelf = document.getElementById("popupForSelf")
const popupForBalance = document.getElementById("popupForBalance")
// global variables 
let balance=10000;

// 1... logic for send money to cntact
sendMoneyToContact.addEventListener("click",()=>{
    popupForContact.style.display='block'
    popupForBank.style.display='none'
    popupForSelf.style.display='none'
    popupForBalance.style.display='none'

    MessageforContact.style.display='none'
    MessageforSelf.style.display='none' 
    MessageforBalance.style.display='none'
    MessageforBank.style.display='none'
    
})
function doForContact(){
    wait.style.display = 'block';
    //catct input elements
    let mobileNumber = document.getElementById("ContactNumber")
    let amount = document.getElementById("contactAmount")
    //catct the display elements
    let displayNo = document.getElementById("contactNo")
    let displayAmount = document.getElementById("sendAmountToContact")
    
    setTimeout(()=>{
        new Promise((resolve,reject)=>{
            resolve("promise : fullfil : message for contact")
         })
         .then(res=>{
            wait.style.display = 'none'
             MessageforContact.style.display='block'
             displayNo.innerText = mobileNumber.value
             displayAmount.innerText = amount.value
             balance -= Number(amount.value)
             console.log(balance)
         })
    },2000)
}

//2.... logic for send money to bank Account number
sendMoneyToBank.addEventListener("click",()=>{
    popupForContact.style.display='none'
    popupForSelf.style.display='none'
    popupForBalance.style.display='none'
    popupForBank.style.display='block'

    MessageforContact.style.display='none'
    MessageforBalance.style.display='none'
    MessageforBank.style.display='none'
    MessageforSelf.style.display='none' 

})
function doForBank(){
    wait.style.display = 'block';
    //catct input elements
    let accNumber = document.getElementById("accNumber")
    let amount = document.getElementById("accAmount")
    //catct the display elements
    let displayAccNo = document.getElementById("accNo")
    let displayAmount = document.getElementById("sendAmountToBank")

    setTimeout(()=>{
        new Promise((resolve,reject)=>{
            resolve("promise : fullfil : message for contact")
         })
         .then(res=>{
            wait.style.display = 'none'
             MessageforBank.style.display='block'
             displayAccNo.innerText = accNumber.value
             displayAmount.innerText = amount.value
             balance -= Number(amount.value)
             console.log(balance)
         })
    },2000)
}

//3.... logic for send money to self money transfer
sendMoneyToSelf.addEventListener("click",()=>{
    popupForContact.style.display='none'
    popupForSelf.style.display='block'
    popupForBalance.style.display='none'
    popupForBank.style.display='none'

    MessageforContact.style.display='none'
    MessageforBalance.style.display='none'
    MessageforBank.style.display='none'
    MessageforSelf.style.display='none' 

})
function doForSelf(){
    wait.style.display = 'block';
    //catct input elements
    let amount = document.getElementById("selfAmount")
    //catct the display elements
    let displayAmount = document.getElementById("sendAmountToSelf")

    setTimeout(()=>{
        new Promise((resolve,reject)=>{
            resolve("promise : fullfil : message for contact")
         })
         .then(res=>{
            wait.style.display = 'none'
             MessageforSelf.style.display='block'
             displayAmount.innerText = amount.value
             balance += Number(amount.value)
             console.log(balance)
         })
    },2000)
}

//4.... logic for checking balance
CheckBalance.addEventListener("click",()=>{
    popupForContact.style.display='none'
    popupForSelf.style.display='none'
    popupForBalance.style.display='block'
    popupForBank.style.display='none'

    MessageforContact.style.display='none'
    MessageforBalance.style.display='none'
    MessageforBank.style.display='none'
    MessageforSelf.style.display='none' 

})
function doForBalance(){
    wait.style.display = 'block';
    //catct input elements
    let amount = balance
    //catct the display elements
    let displayAmount = document.getElementById("BankAmount")

    setTimeout(()=>{
        new Promise((resolve,reject)=>{
            resolve("promise : fullfil : message for contact")
         })
         .then(res=>{
            wait.style.display = 'none'
             MessageforBalance.style.display='block'
             displayAmount.innerText = amount
             console.log(balance)
         })
    },2000)
}