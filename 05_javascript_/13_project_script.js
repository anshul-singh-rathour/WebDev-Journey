'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Anshul Singh Rathour',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2026-07-20T14:11:59.604Z',
    '2026-07-19T10:51:36.790Z',
    '2026-07-22T17:01:17.194Z',
    '2026-07-22T22:36:17.929Z',
  ],
  currency: 'INR',
  locale: 'en-IN', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


// set username for each account
accounts.forEach((account)=>account.username = account["owner"].split(' ').map((name)=>name[0].toLowerCase()).join(''));
// current account variable
let currentAccount , timer;

//  function to format date
const dateformater = function(usedDate){
    const calcdayspassed = (date1,date2)=>Math.round(Math.abs(date2-date1)/(1000*60*60*24));
    const dayspassed = calcdayspassed(new Date(),usedDate);
    if (dayspassed===0) return 'Today';
    if (dayspassed===1) return 'Yesterday';
    if (dayspassed<=7) return `${dayspassed} days ago`;
    const date = new Date(usedDate);
    return new Intl.DateTimeFormat(currentAccount.locale).format(date);
    }
  // function to format currency
  const formatCurrency = function(amount) {
    return new Intl.NumberFormat(currentAccount.locale, {
      style: 'currency',
      currency: currentAccount.currency
    }).format(amount);
  };

// display movements for each account
const displayMovements = function (account,sort=false){
   containerMovements.innerHTML ='';
   const combinemovdates=account.movements.map((mov,i)=>({movements:mov, date :account.movementsDates[i] }));
   if(sort){
    combinemovdates.sort((a,b)=>a.movements-b.movements);
   }
    combinemovdates.forEach(function({movements:movementValue,date:movementDate},i) {
     const displayDate=dateformater(new Date(movementDate));
     const formattedMov = formatCurrency(movementValue);
     const type = movementValue>0 ? 'deposit' : "withdrawal";
     const movement= ` <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1}  ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formattedMov}</div>
        </div>`;
      containerMovements.insertAdjacentHTML("afterbegin",movement);
   });
  }

// calculate current balance for each account
const calculateBalance = function (account){
  account.accountBalance= account.movements.reduce((acc,mov)=>acc+mov,0);
  labelBalance.textContent=formatCurrency(account.accountBalance);
}

// calculate summary for each account
const calculateSummary = function (account){
  const incomes =account.movements.filter((mov)=>mov>0).reduce((acc,cur)=>acc+cur,0);
  const outcomes=account.movements.filter((mov)=>mov<0).reduce((acc,cur)=>acc+cur,0);
  labelSumIn.textContent=formatCurrency(incomes);
  labelSumOut.textContent=formatCurrency(Math.abs(outcomes));
  const interest = account.movements.filter((mov)=>mov>0).map((deposit)=>deposit*(account.interestRate)/100).filter((int)=>int>10).reduce((acc,deposit)=>acc+deposit,0);
  labelSumInterest.textContent=formatCurrency(interest);
};

// update ui
const updateUI=function(currentAccount){
   // Display movements
    displayMovements(currentAccount);
    // Display balance
    calculateBalance(currentAccount);
    // Display summary
    calculateSummary(currentAccount);    
}


// function to start timer
const startLogoutTimer = function(){
   // call function after a specific every time 
  const tick =function(){
     // show in min and sec
  let min = String(Math.trunc(count/60)).padStart(2,0);
  let sec = String(Math.trunc(count%60)).padStart(2,0);
    // every time print time
    labelTimer.textContent=`${min}:${sec}`;
    // after time log out
    if (count === 0){
      clearInterval(timer);
      labelWelcome.textContent='Login to get started';
      containerApp.style.opacity=0;
    }
    count--;
  };
  // set time to five minutes
  let count = 5*60;
  tick();
  timer = setInterval(tick,1000);
  return timer;
};

// login functionality
btnLogin.addEventListener('click',function(e) {
  e.preventDefault();
  currentAccount = accounts.find((acc)=> acc.username===inputLoginUsername.value);
  if (currentAccount?.pin === Number(inputLoginPin.value)){
    // clear input fields
    inputLoginUsername.value=inputLoginPin.value='';
    inputLoginPin.blur();
    inputLoginUsername.blur();
    // Display UI and message
    labelWelcome.textContent=`Welcome Back ! ${currentAccount.owner.split(' ')[0]}`;
    // date 
    const currdate= new Date();
    const options = { 
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long'
    };
    // const locale = navigator.language;
    labelDate.textContent= new Intl.DateTimeFormat(currentAccount.locale, options).format(currdate); 
    containerApp.style.opacity=100;
    // start timer
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();
    // update ui
    updateUI(currentAccount);
  }
})

// transfer button 
btnTransfer.addEventListener('click',function(e){
  e.preventDefault();
  const amount =Number(inputTransferAmount.value);
  const receiverAcc= accounts.find((acc)=> acc.username===inputTransferTo.value);

  // transfer check
  if ( amount>0 && receiverAcc && amount<=currentAccount.accountBalance && receiverAcc?.username !== currentAccount.username ){ 
  // deduct from current account
  currentAccount.movements.push(-amount);
  // add to the account
  receiverAcc.movements.push(amount);

  //  add transfer date
  currentAccount.movementsDates.push(new Date().toISOString());
  receiverAcc.movementsDates.push(new Date().toISOString());
  // update ui
    updateUI(currentAccount);
    // clear
    inputTransferAmount.value = inputTransferTo.value='';
    inputTransferAmount.blur();
    inputTransferTo.blur();
  // reset timer
  clearInterval(timer);
   timer = startLogoutTimer();
  }
})

//  close account button
btnClose.addEventListener('click',function(e){
  e.preventDefault();
  if (inputCloseUsername.value===currentAccount.username && Number(inputClosePin.value)===currentAccount.pin){
     const index =accounts.findIndex((acc)=>acc.username===currentAccount.username);
    //  DELETE account
     accounts.splice(index);
    //  log out
    containerApp.style.opacity=0;
    inputCloseUsername.value = inputClosePin.value='';
    // reset timer
    clearInterval(timer);
  }
});

// loan button
btnLoan.addEventListener('click',function(e){
 e.preventDefault();
 const amount = Math.floor(inputLoanAmount.value);
 if( amount >0 && currentAccount.movements.some((mov)=>mov>=0.1*amount)){
    setTimeout(function(){
    // add loan
    currentAccount.movements.push(amount);
    // add loan date
    currentAccount.movementsDates.push(new Date().toISOString());
    // updateUI
    updateUI(currentAccount);
    clearInterval(timer);
    timer = startLogoutTimer();
    },2500);
 }
 inputLoanAmount.value='';
 inputLoanAmount.blur();
});

// sort button
let sorted=false;
btnSort.addEventListener('click',function(e){
  e.preventDefault();
  displayMovements(currentAccount,!sorted);
  sorted=!sorted;
});
