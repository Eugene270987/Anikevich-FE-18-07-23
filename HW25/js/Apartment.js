'use strict'
class Apartment {
    /**
     * JSDoc
     * @param {number} number
     * @param {number} roomsAmount
     * @param {Person[]} people
     */
    constructor(number, roomsAmount, people) {
        this.number = number;
        this.roomsAmount = roomsAmount;
        this.people = people;
    }

    showInfo() {
        console.log(`
            Number: ${this.number}
            Rooms: ${this.roomsAmount}
            People: 
        `);
        this.people.forEach(person => person.showInfo());
    }
    //Также потом удалим, потому что нам не нужен вывод в консоль!
}