/*
    Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)
*/

const tableContainer = document.querySelector('.table__wrapper');
const table = document.createElement('table');

for (let i = 1; i <= 10; i++) {
    const tableRow = document.createElement('tr');

    for (let j = 1; j <= 10; j++) {
        const cell = document.createElement('td');
        const cellIndicator = (i - 1) * 10 + j;

        cell.textContent = String(cellIndicator);

        tableRow.appendChild(cell);
    }

    table.appendChild(tableRow);
}

tableContainer.appendChild(table);