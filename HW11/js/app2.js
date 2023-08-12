// Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?

let kmDistance = parseInt(prompt('Enter the distance in km'));
let footDistance = parseInt(prompt('Enter the distance in foots'));

let kmDistanceInMeters = kmDistance * 1000;
let footDistanceInMeters = footDistance * 0.305;

if (kmDistanceInMeters > footDistanceInMeters) {
    alert('Distance in KM is bigger');
} else if (kmDistanceInMeters === footDistanceInMeters) {
    alert('both are equal');
} else {
    alert('Distance in foots is bigger');
}


//DONE