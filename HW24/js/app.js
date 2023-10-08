'use strict'
/*
    Создать сущность человека:-----------
- имя---DONE
- возраст---DONE
- Метод вывода данных на страницу ---DONE


    Создать сущность автомобиля:------------DONE

- Характеристики автомобиля отдельными свойствами---DONE
    Методы:
- Вывода на экран данных об этом автомобиле на страницу
- Присвоения этому автомобилю объекта владельца
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
    const isValid = validateForm(carRegExps, carFormElements, 'btn-car-confirm');
    if (isValid) {
        const brand = carFormElements.brand.value;
        const color = carFormElements.color.value;
        const year = carFormElements.year.value;
        const country = carFormElements.country.value;

        const car = new Car(brand, color, year, country);

        displayCarData(car);

        const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
        myModal.show();
    }
})






