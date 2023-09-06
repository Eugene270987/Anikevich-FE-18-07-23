'use strict'
function getCheckedItems(items) {
    const values = [];
    for(let i = 0; i < items.length; i++) {
        if(items[i].checked) {
            values.push(items[i].value);
        }
    }

    return values;
}