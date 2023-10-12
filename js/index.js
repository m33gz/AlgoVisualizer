// Find the container and button elements by their IDs
const contentContainer = document.getElementById("algo-container");
const sortButton = document.getElementById("sort-button");
const searchButton = document.getElementById("search-button");
const pathButton = document.getElementById("pathfind-button");

// Function to show/hide content based on the clicked button
function showContent(contentId) {
    // Hide all content sections
    document.getElementById("sort-content").style.display = "none";

    // Getting user input for number of bars
    // Get a reference to the input element using its id
    var elementCountInput = document.getElementById("elementCount");

    // Add an event listener for the "Enter" key (key code 13)
    elementCountInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            // Access the value entered by the user
            var elementCount = elementCountInput.value;
            console.log("Number of elements: " + elementCount);

            const array=[]

            for(let i = 0; i < elementCount; i++)
            {
                array[i] = Math.random();
            }
            
            for(let i = 0; i < array.length; i++)
            {
                const bar = document.createElement("div");
                bar.style.height = array[i] * 100 + "%";
                bar.classList.add("bar");
                // Select the element with the class "algo-box"
                var algoBox = document.querySelector('.algo-box');

                // Assuming 'bar' is the element you want to append
                algoBox.appendChild(bar);
            }
        }
    });

    


    document.getElementById("search-content").style.display = "none";
    document.getElementById("path-content").style.display = "none";

    // Show the selected content section
    document.getElementById(contentId).style.display = "flex";
}

// Add event listeners to the buttons
sortButton.addEventListener("click", () => showContent("sort-content"));
searchButton.addEventListener("click", () => showContent("search-content"));
pathButton.addEventListener("click", () => showContent("path-content"));




