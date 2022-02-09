const InputReason = document.querySelector('#input-reason');
const InputAmount = document.querySelector('#input-amount');
const Cancel = document.querySelector('#btn-cancel');
const Add = document.querySelector('#btn-add');
const expenselist = document.querySelector('#expense-list');
const totalExpenseOutput = document.querySelector('#total-expenses');

let totalExpense= 0;

const clear = ()=>{
    InputReason.value='';
    InputAmount.value='';

}

Add.addEventListener('click', () => {
    const enteredReason = InputReason.value;
    const enteredAmount = InputAmount.value;

    if (enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0) {
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;
    expenselist.appendChild(newItem);

    totalExpense+= +enteredAmount;
    totalExpenseOutput.textContent = totalExpense;
    clear();
});

Cancel.addEventListener('click', clear);
