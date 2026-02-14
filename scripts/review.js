document.addEventListener("DOMContentLoaded", () => {
    // 1. Get the current counter from localStorage, or 0 if it doesn't exist
    let reviewCount = Number(window.localStorage.getItem("reviewCount-ls")) || 0;

    // 2. Increment the counter
    reviewCount++;

    // 3. Store the updated counter back to localStorage
    window.localStorage.setItem("reviewCount-ls", reviewCount);

    // 4. (Optional) Display the count to the user on the review.html page
    const displayElement = document.querySelector("#review-display");
    if (displayElement) {
        displayElement.textContent = `Reviews Completed: ${reviewCount}`;
    }
});


// last date modified
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;


// Current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent =  currentYear;