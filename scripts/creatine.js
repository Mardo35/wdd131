// last date modified
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;


// Current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent =  currentYear;

const hbButton = document.querySelector('#hamburger-btn');
// Use .list (class) instead of #list (id)
const navList = document.querySelector('.list ul'); 
const headerText = document.querySelector('.list p'); // Targeted the P inside nav

hbButton.addEventListener('click', () => {
    navList.classList.toggle('show');
    headerText.classList.toggle('hide-text');

    if (navList.classList.contains('show')) {
        hbButton.innerHTML = '&#10006;'; // 'X' icon
    } else {
        hbButton.innerHTML = '&#9776;'; // Hamburger icon
    }
});