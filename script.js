//API Key
const accessKey = "ePNLz4tjVOHPzFBggFPNlqqEb3Nec-0xEbuxpWn8dXA";

//target form tag
const formEl = document.querySelector("form");

//target input tag
const inputEl = document.getElementById("search-input");

//target container that holds all imgs
const searchResults = document.querySelector(".search-results");

//button tag
const showMore = document.getElementById("show-more-button");

//stores key words that are inputed in the input box
let inputData = "";

//page indicator
let page = 1;

async function searchImages(){

    try {
        //sets what is typed in the input box to equal the variable inputData
        inputData = inputEl.value;
    
        //dynamic variable
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
    
        //fetches the data in the url variable
        const response = await fetch(url);
    
        //gets the data and coverts into JSON
        const data = await response.json();
    
        //coverts json data into the imgs and texts
        const results = data.results;
    
        //initalize the page number
        if(page === 1){
            searchResults.innerHTML = "";
        };
    
        //map results variable
        results.map((result) => {
            //push all data into a new div container in "search-results"
            const imageWrapper = document.createElement('div');
            imageWrapper.classList.add("search-result");
    
            //creates the img
            const image = document.createElement('img');
            image.src = result.urls.small;
            image.alt = result.alt_description;
    
            //creates the link (a tag)
            const imageLink = document.createElement('a');
            imageLink.href = result.links.html;
            imageLink.target = "_blank";
            imageLink.textContent = result.alt_description;
    
            //append the elements
            imageWrapper.appendChild(image)
            imageWrapper.appendChild(imageLink)
            searchResults.appendChild(imageWrapper)
        });
    
        //incraese page number
        page++
    
        //if img number > 1, show the "show-more-button"
        if(page > 1){
            showMore.style.display = "block";
        };
    }
    catch(error) {
        console.error(error);
    }
};

//create event listener to catch the inputted text in the input box
formEl.addEventListener("submit", (event) =>{

    //prevent defult
    event.preventDefault()

    //initalize the page
    page = 1;

    //call searchImages
    searchImages();
});

//create event listener to show more images
showMore.addEventListener("click", () =>{

    //call searchImages
    searchImages();
});
