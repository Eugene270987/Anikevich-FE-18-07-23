/*
Создать функцию, которая убирает из строки все символы, которые мы передали вторым
аргументом.
Исходную строку и символы для удаления задаёт пользователь
Пример: 'func("hello world", ['l', 'd'])' вернет нам "heo wor".
 */

// Создаем функцию, с 2 аргументами - первый - то что ввел пользователь, второй - те символы, которые он хочет удалить
// Это две константы, которые записаны ниже.

// Внутри функции задаем
function deleteLetters(userInput, lettersToDelete) {
    let messageString = "";

    for (let i = 0; i < userInput.length; i++) {
        let toDelete = false;

        for (let j = 0; j < lettersToDelete.length; j++) {
            if (userInput[i] === lettersToDelete[j]) {
                toDelete = true;
                break;
            }
        }

        if (!toDelete) {
            messageString += userInput[i];
        }
    }

    return messageString;
}

const userInput = prompt("Enter the words you like: ");
const lettersToDelete = prompt("Enter the symbols you would like to delete: ");

const userOutput = deleteLetters(userInput, lettersToDelete);
console.log("Result is: ", userOutput);

//DONE