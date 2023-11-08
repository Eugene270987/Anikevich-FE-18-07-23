'use strict'
function Person (user, car) {
    this.user = user;
    this.car = car;
}
Person.prototype.generateAllInfo = function () {
    const userData = this.user.generateUserInfo();
    const carData = this.car.generateCarInfo();

    return userData + carData;
};