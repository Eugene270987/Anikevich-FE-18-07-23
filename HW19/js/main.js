'use strict'
document.getElementById('btn').addEventListener('click', () => {
    const formElements = document.forms[0].elements;
    const mainForm = document.forms[0];
    const mainTable = document.getElementById('infoTable');

    mainForm.classList.add('hidden');
    mainTable.classList.remove('hidden');

    document.getElementById('userNameLabel').textContent = 'Name:';
    document.getElementById('userNameValue').textContent = formElements.userName.value;

    document.getElementById('userSurnameLabel').textContent = 'Surname"';
    document.getElementById('userSurnameValue').textContent = formElements.userSurname.value;

    document.getElementById('userDateLabel').textContent = 'Date of birth:';
    document.getElementById('userDateValue').textContent = formElements.birthDate.value;

    document.getElementById('userGenderLabel').textContent = 'Gender:';
    document.getElementById('userGenderValue').textContent = formElements.gender.value;

    const cityKey = formElements.city.value;
    const city = cities[cityKey];
    document.getElementById('userCityLabel').textContent = 'City:';
    document.getElementById('userCityValue').textContent = city;

    document.getElementById('userAddressLabel').textContent = 'Address:';
    document.getElementById('userAddressValue').textContent = formElements.address.value;


    const languages = getCheckedItems(formElements.languages);
    const allLanguages = document.getElementById('userLanguagesValue');
    document.getElementById('userLanguagesLabel').textContent = 'Languages:';
    allLanguages.textContent = languages.join(', ');
});