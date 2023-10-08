'use strict'


function Car (brand, color, year, country) {
    this.brand = brand;
    this.color = color;
    this.year = year;
    this.country = country;
}


Car.prototype.generateCarInfo = function () {
    const carProperties = [
        {property: 'Brand', value: this.brand},
        {property: 'Color', value: this.color},
        {property: 'Year', value: this.year},
        {property: 'Country', value: this.country},
    ];

    const listItems = carProperties.map(property => {
        return `<li>${property.property}: ${property.value}</li>`;
    });

    const carInfo = `<ul>${listItems.join('')}</ul>`;
    return carInfo;
}
