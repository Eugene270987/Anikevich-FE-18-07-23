'use strict'

class Burger {
    constructor(size, stuffing, quantity) {
        this.size = size;
        this.stuffing = [];
        this.toppings = [];
        this.quantity = quantity;
    }

    static SIZE_SMALL = {
        price: 50,
        calories: 20
    };

    static SIZE_BIG = {
        price: 100,
        calories: 40
    };

    static STUFFING_CHEESE = {
        price: 10,
        calories: 20
    }

    static SIZE_SALAD = {
        price: 20,
        calories: 5
    };

    static SIZE_POTATO = {
        price: 15,
        calories: 10
    };

    static TOPPING_MAYO = {
        price: 20,
        calories: 5
    }

    static TOPPING_SPICES = {
        price: 15,
        calories: 0
    };

    addTopping(topping, quantity = 1) {
        for (let i = 0; i < quantity; i++) {
            this.toppings.push(topping);
        }
    }

    setQuantity(quantity) {
        this.quantity = quantity;
    }

    calculatePrice () {
        let price = (this.size.price + this.stuffing.price) * this.quantity;
        for (const topping of this.toppings) {
            price += topping.price;
        }
        return price;
    }

    calculateCalories () {
        let calories = (this.size.calories + this.stuffing.calories) * this.quantity;
        for (const topping of this.toppings) {
            calories += topping.calories;
        }
        return calories;
    }
}

