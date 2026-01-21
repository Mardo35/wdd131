// last date modified
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;


// Current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent =  currentYear;

// code for the toggle button
const hbButton = document.querySelector('#hamburger-btn');
const navList = document.querySelector('#list ul');
const headerText = document.querySelector('header p');

hbButton.addEventListener('click', () => {
    // Toggle the 'show' class on the menu
    navList.classList.toggle('show');

    // 2. Toggle the paragraph visibility
    headerText.classList.toggle('hide-text');

    // Change the icon based on whether the menu is open
    if (navList.classList.contains('show')) {
        hbButton.innerHTML = '&#10006;'; // Unicode for 'X'
    } else {
        hbButton.innerHTML = '&#9776;'; // Unicode for Hamburger
    }
});