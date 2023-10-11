'use strict'

class Person {
    constructor(fullName) {
        this.fullName = fullName;
    }
    showInfo() {
        console.log('Name: ' + this.fullName);
    }
    //Это уберем когда будем создавать проект
}