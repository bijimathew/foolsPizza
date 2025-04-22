alert('gadaar is viewing the website')
document.querySelectorAll('.hover-warning').forEach((img) => {
    img.addEventListener('mouseenter',()=>{
        alert('No, Not that one!')
    });
});





const searchInput = document.getElementById("searchInput"); 
const suggestionsBox = document.getElementById("suggestions");

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

searchInput.addEventListener("input", function () {
    let query = searchInput.value.toLowerCase(); 
    suggestionsBox.innerHTML = ""; 

    if (query !== "") { 
        let results = []; 


        for (let key in pizza) {
            pizza[key].forEach(function (item) {
               
                if (item.name.toLowerCase().includes(query)) {
                    results.push(item.name); 
                }
            });
        }


        if (results.length > 0) {
            results.forEach(function (name) {
                let li = document.createElement("li"); 
                li.textContent = name; 
                li.className = "p-2 hover:bg-gray-200 cursor-pointer";

            
                li.addEventListener("click", function () {
                    searchInput.value = name;
                    suggestionsBox.classList.add("hidden"); 
                });

                suggestionsBox.appendChild(li); 
            });

            suggestionsBox.classList.remove("hidden"); 
        } else {
            suggestionsBox.classList.add("hidden");
        }
    } else {
        suggestionsBox.classList.add("hidden");
    }
});

// Hide suggestions when clicking outside
document.addEventListener("click", function (event) {
    if (event.target !== searchInput && event.target !== suggestionsBox) {
        suggestionsBox.classList.add("hidden");
    }
});
