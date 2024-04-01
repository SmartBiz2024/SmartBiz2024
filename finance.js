const balanceAmountElement = document.getElementById('balance-amount');
const addIncomeBtn = document.getElementById('add-income-btn');
const addExpenseBtn = document.getElementById('add-expense-btn');
const transactionsList = document.getElementById('transactions-list');

let balance = 5000;
balanceAmountElement.textContent = balance;

addIncomeBtn.addEventListener('click', () => {
  const incomeAmount = prompt('أدخل قيمة الإيراد:');
  balance += parseInt(incomeAmount);
  balanceAmountElement.textContent = balance;
  const transactionItem = document.createElement('div');
  transactionItem.textContent = `+ ${incomeAmount} دولار (إيراد)`;
  transactionsList.appendChild(transactionItem);
});

addExpenseBtn.addEventListener('click', () => {
  const expenseAmount = prompt('أدخل قيمة المصروف:');
  balance -= parseInt(expenseAmount);
  balanceAmountElement.textContent = balance;
  const transactionItem = document.createElement('div');
  transactionItem.textContent = `- ${expenseAmount} دولار (مصروف)`;
  transactionsList.appendChild(transactionItem);
});

document.addEventListener('DOMContentLoaded', function() {
  var addRowButton = document.getElementById('add-row-btn');
  var tableBody = document.querySelector('#my-table tbody');

  addRowButton.addEventListener('click', function() {
    // إنشاء صف جديد
    var newRow = document.createElement('tr');

    // إنشاء خلايا جديدة وتعيين محتواها
    var cell1 = document.createElement('td');
    cell1.contentEditable = true;
    cell1.textContent = 'New Data 1';
    var cell2 = document.createElement('td');
    cell2.contentEditable = true;
    cell2.textContent = 'New Data 2';
    var cell3 = document.createElement('td');
    cell3.contentEditable = true;
    cell3.textContent = 'New Data 3';
    var cell4 = document.createElement('td');
    cell4.contentEditable = true;
    cell4.textContent = 'New Data 4';

    // إضافة الخلايا إلى الصف الجديد
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);
    newRow.appendChild(cell4);

    // إضافة الصف الجديد إلى جسم الجدول
    tableBody.appendChild(newRow);
  });
});
document.addEventListener('DOMContentLoaded', function() {
  var table = document.querySelector('.u-align-center table');
  var addRowButton = document.createElement('button');
  addRowButton.textContent = 'Add Row';
  addRowButton.addEventListener('click', addRow);
  table.parentNode.insertBefore(addRowButton, table.nextSibling);

  function addRow() {
    var newRow = document.createElement('tr');
    newRow.addEventListener('click', selectRow);

    for (var i = 0; i < table.rows[0].cells.length; i++) {
      var newCell = document.createElement('td');
      newCell.contentEditable = true;
      newCell.addEventListener('input', updateData);
      newRow.appendChild(newCell);
    }

    table.tBodies[0].appendChild(newRow);
  }

  function selectRow(event) {
    var row = event.currentTarget;
    row.classList.toggle('selected');
  }

  function updateData(event) {
    var cell = event.currentTarget;
    var column = cell.cellIndex;
    var row = cell.parentNode.rowIndex;
    var value = cell.textContent;
    console.log('Updated data:', 'Row:', row, 'Column:', column, 'Value:', value);
  }

  // Enable editing for existing cells
  var cells = table.getElementsByTagName('td');
  for (var i = 0; i < cells.length; i++) {
    cells[i].contentEditable = true;
    cells[i].addEventListener('input', updateData);
  }
});