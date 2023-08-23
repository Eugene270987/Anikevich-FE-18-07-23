/*
Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел (наприклад [1,2,3])
і генерує список з елементів:
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
Якщо ж у масиві зустрічається масив
(наприклад, [1,2, [1.1,1.2,1.3], 3]) то робити вкладений список. Для перевірки масиву використовуйте Array.isArray();
Наприклад:
    <ul>
        <li>1</li>
        <li>2</li>
        <li>
            <ul>
                <li>1.1</li>
                <li>1.2</li>
                <li>1.3</li>
            </ul>
        </li>
        <li>3</li>
    </ul>
*/
function generateList(array) {
    const ul = document.createElement('ul');

    for (let i = 0; i < array.length; i++) {
        const itemArr = array[i];
        const li = document.createElement('li');

        if (Array.isArray(itemArr)) {
            li.appendChild(generateList(itemArr));
        } else {
            li.textContent = itemArr;
        }

        ul.appendChild(li);
    }

    return ul;
}

const dataArr = [1, 2, [2.1, 2.2, 2.3], 3];
const itemWrapper = document.querySelector('.wrapper');

const generatedList = generateList(dataArr);
itemWrapper.appendChild(generatedList);


