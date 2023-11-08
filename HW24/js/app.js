'use strict'
/*
    Создать сущность человека:-----------DONE
- имя---DONE
- возраст---DONE
- Метод вывода данных на страницу ---DONE
    Создать сущность автомобиля:------------DONE
- Характеристики автомобиля отдельными свойствами---DONE
    Методы:----DONE
- Вывода на экран данных об этом автомобиле на страницу ----DONE
- Присвоения этому автомобилю объекта владельца ----DONE
- Все данные о человеке и об автомобиле получать от пользователя (через form inputs). ---DONE
- Реализовать необходимые проверки на корректность ввода (пустые поля, возраст >18 для человека). ---DONE
*/
document.getElementById('btn-user-confirm').addEventListener('click', event => {
    event.preventDefault();
    const isValid = validateForm(userRegExps, userFormElements, 'btn-user-confirm');
    if (isValid) {
        const name = userFormElements.name.value;
        const surname = userFormElements.surname.value;
        const age = userFormElements.age.value;
        const experience = userFormElements.experience.value;

        const user = new User(name, surname, age, experience);

        displayUserInfo(user);

        const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
        myModal.show();
    }
});
document.getElementById('btn-close').addEventListener('click', event => {
    hideForm('userForm');
    showForm('carForm');
})

document.getElementById('btn-car-confirm').addEventListener('click', event => {
    const elements = document.forms[1].elements;
    const isUserValid = validateForm(userRegExps, userFormElements, 'btn-car-confirm');
    const isCarValid = validateForm(carRegExps, carFormElements, 'btn-car-confirm');
    if (isUserValid && isCarValid) {
        const name = userFormElements.name.value;
        const surname = userFormElements.surname.value;
        const age = userFormElements.age.value;
        const experience = userFormElements.experience.value;

        const brand = carFormElements.brand.value;
        const color = carFormElements.color.value;
        const year = carFormElements.year.value;
        const country = carFormElements.country.value;

        const user = new User(name, surname, age, experience);
        const car = new Car(brand, color, year, country);

        const person = new Person(user, car);

        displayPersonData(person);

        const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
        myModal.show();
        document.getElementById('btn-car-confirm').style.display = 'none';
        Array.from(elements).forEach((element) => {
            element.setAttribute('disabled', 'disabled');
        });
    }
})






