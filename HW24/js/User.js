'use strict'

function User (name, surname, age, experience) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.experience = experience;
}

User.prototype.generateUserInfo = function() {
    const userProperties = [
        { property: 'Name', value: this.name },
        { property: 'Surname', value: this.surname },
        { property: 'Age', value: this.age },
        { property: 'Experience', value: this.experience }
    ];

    const listItems = userProperties.map(property => {
        return `<li>${property.property}: ${property.value}</li>`;
    });

    const userInfo = `<ul>${listItems.join('')}</ul>`;
    return userInfo;
};