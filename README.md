# imageSearch
An image search application developed using HTML, CSS, and JavaScript. You can search for any image you want. Uses an API key to get the images from unsplash.com and matches the key words typed to the image name/description from unsplash.com.

Developed this app to create an easy way to search images in a timely manner. Instead of searching aimlessly through various websites for an image that fits the current requirements, this app displays a large database of images that can be found through a quick search.  

![imageAppGif](https://github.com/Walmufti/imageSearch/assets/79267405/6f934898-9f5f-4dd5-86d2-5c91c175d357)


About the JavaScript code:

This JavaScript code defines a simple image search application that interacts with the Unsplash API to retrieve and display images based on user input. To break down the code step by step:

1. API Key: `accessKey` variable holds the API key required for accessing the Unsplash API.

2. DOM Element Selection:
   - `formEl`: Stores a reference to the `<form>` element in the HTML document.
   - `inputEl`: Stores a reference to the input field with the ID "search-input".
   - `searchResults`: Stores a reference to the container element that holds all the images.
   - `showMore`: Stores a reference to the button element with the ID "show-more-button".

3. Variables:
   - `inputData`: Holds the value entered by the user in the search input field.
   - `page`: Represents the current page number of search results. It starts from 1.

4. Function `searchImages()`: This function is responsible for fetching and displaying images based on the user's input.
   - It retrieves the value from the search input field (`inputData`).
   - Constructs the URL for fetching images from the Unsplash API based on the input data and the current page number.
   - Fetches data from the API using `fetch()` and converts it to JSON format.
   - Extracts image data from the JSON response.
   - Creates HTML elements for each image and its corresponding link, then appends them to the `searchResults` container.
   - Increments the page number for the next request.
   - Shows the "Show More" button if there are more than one page of results.

5. Event Listeners:
   - An event listener on the form element (`formEl`) listens for form submissions. When the user submits the form, it prevents the default form submission behavior, initializes the page number, and calls `searchImages()` to perform the search.
   - Another event listener on the "Show More" button (`showMore`) calls `searchImages()` when clicked, allowing users to load more images.

Overall, this code sets up an image search functionality using the Unsplash API, where users can input keywords, and the application fetches and displays corresponding images.
