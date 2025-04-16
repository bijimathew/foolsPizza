alert('gadaar is viewing the website')
document.querySelectorAll('.hover-warning').forEach((img) => {
    img.addEventListener('mouseenter',()=>{
        alert('No, Not that one!')
    });
});





const searchInput = document.getElementById("searchInput"); // Get search input field
const suggestionsBox = document.getElementById("suggestions"); // Get the suggestion box

const pizza = {
    chikenPizza: [
        {
            name: "Margherita",
            description: "292 Kcal/100gm",
        }
    ],
    vegPizza: [
        {
            name: "Triple Chicken Feast",
            description: "whole ass chicken",
        }
    ],
    idkPizza1: [
        {
            name: "Chilli Paneer Sizzle",
            description: "Mixed with evil potion",
        }
    ],
    idkPizza2: [
        {
            name: "Chicken Supreme",
            description: "died on war!",
        }
    ],
    idkPizza3: [
        {
            name: "Tandoori Paneer",
            description: "Spicy & smoky flavors",
        }
    ]
};
// When the user types in the input box
searchInput.addEventListener("input", function () {
    let query = searchInput.value.toLowerCase(); // Get text from input
    suggestionsBox.innerHTML = ""; // Clear old suggestions

    if (query !== "") { // If input is not empty
        let results = []; // Create an empty array for matches

        // Loop through all pizza objects
        for (let key in pizza) {
            pizza[key].forEach(function (item) {
                // Check if the pizza name includes the input text
                if (item.name.toLowerCase().includes(query)) {
                    results.push(item.name); // Add matching name to results
                }
            });
        }

        // If we found results, show them
        if (results.length > 0) {
            results.forEach(function (name) {
                let li = document.createElement("li"); // Create new list item
                li.textContent = name; // Set its text
                li.className = "p-2 hover:bg-gray-200 cursor-pointer"; // Add styles

                // When we click a suggestion, put it in the input box
                li.addEventListener("click", function () {
                    searchInput.value = name;
                    suggestionsBox.classList.add("hidden"); // Hide suggestions
                });

                suggestionsBox.appendChild(li); // Add to list
            });

            suggestionsBox.classList.remove("hidden"); // Show the suggestion box
        } else {
            suggestionsBox.classList.add("hidden"); // Hide if no results
        }
    } else {
        suggestionsBox.classList.add("hidden"); // Hide if input is empty
    }
});

// Hide suggestions when clicking outside
document.addEventListener("click", function (event) {
    if (event.target !== searchInput && event.target !== suggestionsBox) {
        suggestionsBox.classList.add("hidden");
    }
});