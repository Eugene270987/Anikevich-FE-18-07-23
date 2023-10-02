'use strict'
//-----------CREATE BUTTON CONTAINER, BUTTONS, ADDING EVENTS ON CLICK
function createButtons () {
    const parentElement = document.getElementById('main');
    const mainSection = createElement('section', parentElement, '', {id: 'main-section', className: 'container-xxl'});
    const btnContainer = createElement('div', mainSection, '', {className: 'btn-group mb-4 d-flex justify-content-center', 'role': 'group'});

    createElement('button', btnContainer, 'HEROES', {type: 'button', className: 'btn btn-primary rounded-pill'},
        {click: () => toggleInfo('.heroes__block', 'people', 'name')});
    createElement('button', btnContainer, 'PLANETS', {type: 'button', className: 'btn btn-warning rounded-pill'},
        {click: () => toggleInfo('.planets__block', 'planets', 'name')});
    createElement('button', btnContainer, 'TRANSPORT', {type: 'button', className: 'btn btn-success rounded-pill'},
        {click: () => toggleInfo('.vehicles__block', 'vehicles', 'name')});
}
//--------CREATE BLOCKS FOR CONTENT-------------------
function createInfoColumns () {
    const parentElement = document.getElementById('main-section');

    const infoRow = createElement('div', parentElement, '', {className: 'row text-center fw-bold d-flex justify-content-center align-items-start'});
    createElement('div', infoRow, '', {className: 'heroes__block col rounded border border-primary'});
    createElement('div', infoRow, '', {className: 'planets__block col rounded border border-warning'});
    createElement('div', infoRow, '', {className: 'vehicles__block col rounded border border-success'});
}
//------ADD CLASS TO AN ELEMENT-------
function addShowClass(element, className) {
    element.classList.add(className);
}
//------REMOVE CLASS TO AN ELEMENT-------
function removeShowClass(element, className) {
    cleanElement(element);
    element.classList.remove(className);
}
//-------------------SHOWING/HIDING INFO WHEN CLICKING ANY OF THREE BUTTONS-------------------------------------
function toggleInfo(blockSelector, infoType, objKey) {
    const blockElement = document.querySelector(blockSelector);
    const blockContent = blockElement.textContent;
    if (!blockContent) {
        //DEFINE THE INITIAL PAGE TO BE SHOWN
        currentPage[infoType] = 1;
        getData(infoType, objKey, blockElement, 'show', currentPage[infoType]);
    } else {
        removeShowClass(blockElement, 'show');
    }
}
function getData(infoType, objKey, element, className, page) {
    const API_BASE = 'https://swapi.dev/api/';

    if (isLoading[infoType] || page === null) {
        return;
    }

    isLoading[infoType] = true;

    axios.get(`${API_BASE}${infoType}/?page=${page}`)
        .then(result => {
            const response = result.data;
            const objects = response.results.map(obj => obj[objKey]);

            console.log(response);
            //CREATING A PARAGRAPH FOR EACH OBJECT NAME AND GIVING IT A CLASS
            objects.forEach(objectName => {
                createElement('p', element, objectName, {className: 'object__item', 'data-bs-toggle': 'modal', 'data-bs-target': '#myModal'});
            });
            //----DELETE THE BUTTON FROM THE PREVIOUS UPLOADED BLOCK
            const prevShowMoreButton = element.querySelector('.btn.btn-danger.my-4');
            if (prevShowMoreButton) {
                prevShowMoreButton.remove();
            }
            //----CREATE BUTTON WHEN UPLOADING INFO FROM THE NEXT PAGE
            if (response.next) {
                createElement(
                    'button',
                    element,
                    'SHOW MORE',
                    { className: 'btn btn-danger my-4' },
                    {click: () => getData(infoType, objKey, element, className, currentPage[infoType])});
            } else {
                createElement('p', element, 'No more data available.', { className: 'no-data-text' });
            }
            //ADDING CLASS IN ORDER TO REMOVE IT LATER WHEN TOGGLING BUTTONS
            addShowClass(element, className);
            //REQUEST IS COMPLETED. NEXT REQUEST CAN BE MADE
            isLoading[infoType] = false;
            //INCREASING PAGE NUMBER WHEN WE CLICK AGAIN 'SHOW MORE'
            currentPage[infoType]++;
        })
}

function createModal () {
    const modal = createElement('div', '#main-section', '', {id: 'myModal', className: 'modal'});
    const modalDialog = createElement('div', modal, '', {className: 'modal-dialog'});
    const modalContent = createElement('div', modalDialog, '', {className: 'modal-content'});

    const modalHeader = createElement('div', modalContent, '', {className: 'modal-header'});
    createElement('h5', modalHeader, 'Brief information about', {className: 'modal-title'});
    createElement('button', modalHeader, '', {type: 'button', className: 'btn-close', 'data-bs-dismiss': 'modal', 'aria-label': 'close'});

    const modalBody = createElement('div', modalContent, '', {className: 'modal-body'});
    createElement('p', modalBody, '', {id: 'modal-info'});

    const modalFooter = createElement('div', modalContent, '', {className: 'modal-footer'});
    createElement('button', modalFooter, 'OK', {type: 'button', className: 'btn btn-success', 'data-bs-dismiss': 'modal'});
}

function showModal () {
    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
}

function showDetailedData() {
    const items = document.querySelectorAll('.object__item');

    items.forEach(item => {
        item.addEventListener('click', () => {
            const objectInfo = item.dataset.info;
            showModal();
        });
    });
}












