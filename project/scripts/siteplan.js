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

// js for filtered creatine

const creatineBrands = [
    { 
        name: "Optimum Nutrition Micronized", 
        price: 35, 
        category: "Cheap", 
        vegan: true, 
        img: "./images/optimum-nutrition.jpg" 
    },
    { 
        name: "Thorne Creatine", 
        price: 45, 
        category: "Expensive", 
        vegan: true, 
        img: "./images/thorne-creatine.jpg" 
    },
    { 
        name: "MuscleTech Cell-Tech", 
        price: 29, 
        category: "Cheap", 
        vegan: false, 
        img: "./images/muscle-tech.jpg" 
    },
    { 
        name: "Bare Performance Nutrition", 
        price: 42, 
        category: "Expensive", 
        vegan: true, 
        img: "./images/bare-performance.jpg" 
    },
    { 
        name: "BulkSupplements Pure", 
        price: 18, 
        category: "Cheap", 
        vegan: true, 
        img: "./images/bulk-supplement.jpg" 
    },
    { 
        name: "Kaged Muscle C-HCl", 
        price: 38, 
        category: "Expensive", 
        vegan: true, 
        img: "./images/kaged-muscle.jpg" 
    },
    { 
        name: "Transparent Labs HMB", 
        price: 50, 
        category: "Expensive", 
        vegan: true, 
        img: "./images/transparent-lab.jpg" 
    },
    { 
        name: "MyProtein Monohydrate", 
        price: 22, 
        category: "Cheap", 
        vegan: true, 
        img: "./images/my-protein.jpg" 
    },
    { 
        name: "Nutricost Creatine", 
        price: 20, 
        category: "Cheap", 
        vegan: true, 
        img: "./images/nutricost.jpg" 
    },
    { 
        name: "Legion Recharge", 
        price: 48, 
        category: "Expensive", 
        vegan: true, 
        img: "./images/legion-recharge.jpg" 
    },
    { 
        name: "Ghost Size", 
        price: 45, 
        category: "Expensive", 
        vegan: false, 
        img: "./images/ghost-size.jpg" 
    },
    { 
        name: "Animal Micronized", 
        price: 28, 
        category: "Cheap", 
        vegan: true, 
        img: "./images/animal-microzined.jpg" 
    },
    { 
        name: "Beyond Raw Chemistry", 
        price: 30, 
        category: "Cheap", 
        vegan: true, 
        img: "./images/beyond-raw.png" 
    },
    { 
        name: "Promix Creatine", 
        price: 40, 
        category: "Expensive", 
        vegan: true, 
        img: "./images/promix.jpg" 
    },
    { 
        name: "EFX Sports Kre-Alkalyn", 
        price: 32, 
        category: "Cheap", 
        vegan: false, 
        img: "./images/efx-sports.jpg" 
    },
    { 
        name: "Onnit Creatine", 
        price: 35, 
        category: "Expensive", 
        vegan: true, 
        img: "./images/onnit-creatine.jpg" 
    },
    { 
        name: "Jacked Factory", 
        price: 24, 
        category: "Cheap", 
        vegan: true, 
        img: "./images/jacked-creatine.jpg" 
    },
    { 
        name: "Gnarly Creatine", 
        price: 55, 
        category: "Expensive", 
        vegan: true, 
        img: "./images/gnarly-creatine.jpg" 
    },
    { 
        name: "Cellucor COR-Performance", 
        price: 27, 
        category: "Cheap", 
        vegan: true, 
        img: "./images/cellulor-cor.jpg" 
    },
    { 
        name: "Naked Nutrition Creatine", 
        price: 58, 
        category: "Expensive", 
        vegan: true, 
        img: "./images/naked-nutrition.jpg" 
    }
];
const displayArea = document.getElementById("brand-display-area");


function displayBrands(brands) {
    displayArea.innerHTML = ""; 
    
    brands.forEach(brand => {
        const card = document.createElement("div");
        card.className = "brand-card";
        
        card.innerHTML = `
            <img src="${brand.img}" alt="${brand.name}" loading="lazy">
            <h2>${brand.name}</h2>
            <p>Category: ${brand.category}</p>
            <p>Price: $${brand.price}</p>
            <p>Lifestyle: ${brand.vegan ? "Vegan Friendly" : "Non-Vegan"}</p>
        `;
        displayArea.appendChild(card);
    });
}

// Event Listeners for Filter IDs
document.getElementById("All").addEventListener("click", () => displayBrands(creatineBrands));

document.getElementById("Cheap").addEventListener("click", () => {
    const cheapBrands = creatineBrands.filter(b => b.category === "Cheap");
    displayBrands(cheapBrands);
});

document.getElementById("Expensive").addEventListener("click", () => {
    const expensiveBrands = creatineBrands.filter(b => b.category === "Expensive");
    displayBrands(expensiveBrands);
});

document.getElementById("Vegan").addEventListener("click", () => {
    const veganBrands = creatineBrands.filter(b => b.vegan === true);
    displayBrands(veganBrands);
});

// Initialize page with all brands
displayBrands(creatineBrands);