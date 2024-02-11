/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');

let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
/* Function: getTemples() */
const getTemples = async () => {
    try {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (!response.ok) {
        throw new Error(`Error fetching temple data: ${response.statusText}`);
    }
    const data = await response.json();
    templeList = data;
    console.log(templeList);
    displayTemples(templeList);
    } catch (error) {
    console.error(error);
    }
};


/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
    };

/* filterTemples Function */
const filterTemples = (temples) => {
    reset(); 

    const filter = document.querySelector("#filtered").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(t => t.location.includes("Utah")));
            break;
        case "nonutah":
            displayTemples(temples.filter(t => !t.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(t => new Date(t.dedicated) < new Date(1950, 0, 1)));
            break;
        case "alphabetical":
            displayTemples(temples.slice().sort((a, b) => a.templeName.localeCompare(b.templeName)));
            break;
        case "all":
        default:
            displayTemples(temples);
            break;
    }
};


/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {
    filterTemples(templeList);
});

/*Sorting the temples alphabetically*/
document.querySelector("#filtered").insertAdjacentHTML('beforeend',
    '<option value="alphabetical">Alphabetical</option>');


getTemples();