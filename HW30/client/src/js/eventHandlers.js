import axios from "axios";
import { basicUrl } from './common.js';
import { createElement } from './domHelpers.js';
import { removeElement } from './domHelpers.js';

let products = [];
const cart = [];

export function createAlert(parent, content, type) {
    createElement('div', parent, content, {id: 'alert', className: type, role: 'alert'});
    return alert;
}

export async function handleCategoryClick(event) {
    const categoryId = event.target.getAttribute('data-id');
    const { data } = await axios(`${basicUrl}/api/products/${categoryId}`);
    products = data;
    data.forEach(item => {
        createElement(
            'button',
            item.configurable ? '#burgers' : '#drinks',
            `${item.name} $${item.price}`,
            { 'data-category': categoryId, 'data-product': item.id, type: 'button', className: 'btn btn-primary' },
            { click: item.configurable ? handleConfigurableItemClick : handleProductClick });
        makeProductChosen();
    });
}
function handleProductClick (event) {
    const categoryId = event.target.getAttribute('data-category');
    const productId = event.target.getAttribute('data-product');
    pushOrder();
    const product = getProduct(productId);
    cart.push(product);
    axios.post(`${basicUrl}/api/order`, { categoryId, productId });
}
function handleConfigurableItemClick (event) {
    //TODO
    //2. In click handler combine selected data using class Hamburger
    //3. The object we get (with toppings, etc with calculated price - ADD TO CART)
    const productId = event.target.getAttribute('data-product');
    const categoryId = event.target.getAttribute('data-category');
    const product = getProduct(productId);
    cart.push(product);
    //showModal();
    axios.post(`${basicUrl}/api/order`, { categoryId, productId });
}
function getProduct (productId) {
    const myProduct = products.find(item => item.id == productId);
    console.log(myProduct);
    return myProduct;
}
export function showModal() {
    const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();
}
function makeProductChosen () {
    const buttons = document.querySelectorAll('.btn.btn-primary');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('btn-primary')) {
                button.classList.remove('btn-primary');
                button.classList.add('btn-success');
            }
        });
    });
}
function pushOrder () {
    const pushOrderForm = document.getElementById('pushOrder');
    const btnPushForm = document.getElementById('push-order');
    pushOrderForm.classList.remove('visually-hidden');
    btnPushForm.addEventListener('click', () => {
        document.getElementById('modal-text').textContent = 'Do you want to add something else to your order?';
        document.getElementById('btn-push').textContent = 'No';
        document.getElementById('btn-close').textContent = 'Yes';
        showModal();
    })
}

function showUserForm () {
    const userForm = document.getElementById('userForm');
    userForm.classList.remove('visually-hidden');
}

export function handleShowUserForm () {
    const showUserFormButton = document.getElementById('btn-push');
    const pushBtn = document.getElementById('pushOrder');
    showUserFormButton.addEventListener('click', () => {
        if (pushBtn) {
            removeElement(pushBtn);
            showUserForm();
        }
    })
}


/*
function getSelectedStuff () {
    const cheese = document.getElementById('cheese').checked;
    const salad = document.getElementById('salad').checked;
    const potato = document.getElementById('potato').checked;

    if (cheese) {
        return Burger.STUFFING_CHEESE;
    } else if (salad) {
        return Burger.STUFFING_SALAD;
    } else if (potato) {
        return Burger.STUFFING_POTATO
    }
}
function getSelectedTopping() {
    const spices = document.getElementById('spices').checked;
    const mayo = document.getElementById('mayo').checked;
    const selectedToppings = [];

    if (spices && mayo) {
        selectedToppings.push(Burger.TOPPING_SPICES, Burger.TOPPING_MAYO);
    } else if (spices) {
        selectedToppings.push(Burger.TOPPING_SPICES);
    } else if (mayo) {
        selectedToppings.push(Burger.TOPPING_MAYO);
    }

    return selectedToppings;
}
export function showOrder () {
    const size = getSelectedSize();
    const selectedStuffing = getSelectedStuff();
    const selectedToppings = getSelectedTopping();
    const burger = new Burger(size);
    const parent = document.querySelector('.modal-body');
    const priceContainer = createElement('div', parent, '', {className: 'total__price'});

    burger.addTopping(selectedStuffing);

    selectedToppings.forEach( (topping) => {
        burger.addTopping(topping);
    })

    priceContainer.textContent = `Price: ${burger.showPrice()}`;
    showModal();
}
//----------------------------
*/



