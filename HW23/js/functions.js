'use strict'
//-----------CREATE BUTTON CONTAINER, BUTTONS, ADDING EVENTS ON CLICK
function createButtons () {
    const parentElement = document.getElementById('main');
    const mainSection = createElement('section', parentElement, '', {id: 'main-section', className: 'container-xxl'});
    const btnContainer = createElement('div', mainSection, '', {className: 'btn-group mb-4 d-flex justify-content-center', 'role': 'group'});

    createElement('button', btnContainer, 'HEROES', {type: 'button', className: 'btn btn-primary rounded-pill'},
        {click: () => showInfo('.heroes__block', 'people', 'name')});
    createElement('button', btnContainer, 'PLANETS', {type: 'button', className: 'btn btn-warning rounded-pill'},
        {click: () => showInfo('.planets__block', 'planets', 'name')});
    createElement('button', btnContainer, 'TRANSPORT', {type: 'button', className: 'btn btn-success rounded-pill'},
        {click: () => showInfo('.vehicles__block', 'vehicles', 'name')});
}
function createInfoColumns () {
    const parentElement = document.getElementById('main-section');

    const infoRow = createElement('div', parentElement, '', {className: 'row text-center fw-bold d-flex justify-content-center align-items-start'});
    createElement('div', infoRow, '', {className: 'heroes__block col rounded border border-primary'});
    createElement('div', infoRow, '', {className: 'planets__block col rounded border border-warning'});
    createElement('div', infoRow, '', {className: 'vehicles__block col rounded border border-success'});
}
function addShowClass(element, className) {
    element.classList.add(className);
}

function removeShowClass(element, className) {
    cleanElement(element);
    element.classList.remove(className);
}

function showInfo(blockSelector, infoType, objKey) {
    const blockElement = document.querySelector(blockSelector);
    const blockContent = blockElement.textContent;
    if (!blockContent) {
        currentPage[infoType] = 1;
        getData(infoType, objKey, blockElement, 'show', currentPage[infoType]);
    } else {
        removeShowClass(blockElement, 'show');
    }
}


//-----------------QUESTION!!!!!---HOW TO COMBINE THESE 2 FUNCTIONS (getData and getMoreData) INTO 1????----------------
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
            cleanElement(element);

            objects.forEach(objectName => {
                createElement('p', element, objectName, { className: 'object__item' });
            });
            if (response.next) {
                createElement('button', element, 'SHOW MORE', { className: 'btn btn-danger my-4' }, {
                    click: () => getMoreData(infoType, objKey, element, response.next)});
            } else {
                createElement('p', element, 'No more data available.', { className: 'no-data-text' });
            }

            addShowClass(element, className);

            isLoading[infoType] = false;
            currentPage[infoType]++;
        })
}
function getMoreData(infoType, objKey, element, page) {
axios.get(page)
    .then(result => {
        const response = result.data;
        const objects = response.results.map(obj => obj[objKey]);

        objects.forEach(objectName => {
            createElement('p', element, objectName, { className: 'object__item' });
        });
        //----DELETE THE BUTTON FROM THE PREVIOUS UPLOADED BLOCK
        const prevShowMoreButton = element.querySelector('.btn.btn-danger.my-4');
        if (prevShowMoreButton) {
            prevShowMoreButton.remove();
        }
        if (response.next) {
            createElement(
                'button',
                element,
                'SHOW MORE',
                { className: 'btn btn-danger my-4' },
                {click: () => getMoreData(infoType, objKey, element, response.next)});
        } else {
            createElement('p', element, 'No more data available.', { className: 'no-data-text' });
        }
        isLoading[infoType] = false;
    })
}











