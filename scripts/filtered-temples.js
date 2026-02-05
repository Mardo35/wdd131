//  Basic scripts
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

// 1. Temple Data Array(12 temples)
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 53997,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo_japan_temple-main.jpeg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 19184,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg"
  },

  {
    templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-exterior-1905503.jpg"
  }
];

// 2. Select Elements by ID's
const mainContainer = document.querySelector("#temple-cards");
const categoryTitle = document.querySelector("#category-name");

// 3. Display Function
function displayTemples(filteredTemples) {
    mainContainer.innerHTML = ""; // Clear current display
    filteredTemples.forEach(temple => {
        const card = document.createElement("section");
        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><span class="label">Location:</span> ${temple.location}</p>
            <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
            <p><span class="label">Area:</span> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" 
                 alt="${temple.templeName}" 
                 loading="lazy"
                 width="400"
                 height="250">
        `;
        mainContainer.appendChild(card);
    });
}

// 4. Event Listeners (Filtering Logic)

// Home: Show all
document.querySelector("#home").addEventListener("click", () => {
    categoryTitle.textContent = "Home";
    displayTemples(temples);
});

// Old: Built before 1900
document.querySelector("#old").addEventListener("click", () => {
    categoryTitle.textContent = "Old Temples (Pre-1900)";
    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    });
    displayTemples(oldTemples);
});

// New: Built after 2000
document.querySelector("#new").addEventListener("click", () => {
    categoryTitle.textContent = "New Temples (Post-2000)";
    const newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    });
    displayTemples(newTemples);
});

// Large: Larger than 90,000 sq ft
document.querySelector("#large").addEventListener("click", () => {
    categoryTitle.textContent = "Large Temples (> 90k sq ft)";
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
});

// Small: Smaller than 10,000 sq ft
document.querySelector("#small").addEventListener("click", () => {
    categoryTitle.textContent = "Small Temples (< 10k sq ft)";
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples);
});

// 5. Initial Load Call
displayTemples(temples);