// Scroll to section functionality
function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Dummy Data for Pets (You can replace this with API calls)
let pets = [
    { id: 1, name: "Buddy", type: "Dog", breed: "Golden Retriever", age: 3, color: "Golden", size: "Medium", description: "Friendly and playful dog.", imageUrl: "https://via.placeholder.com/300" },
    { id: 2, name: "Fluffy", type: "Cat", breed: "Persian", age: 2, color: "White", size: "Small", description: "Calm and affectionate cat.", imageUrl: "https://via.placeholder.com/300" }
];

// Load pets dynamically in the "View Pets" page
function loadPets() {
    const petsContainer = document.getElementById('pets-container');
    pets.forEach(pet => {
        const petCard = document.createElement('div');
        petCard.classList.add('pet-card');
        petCard.innerHTML = `
            <img src="${pet.imageUrl}" alt="${pet.name}">
            <h3>${pet.name}</h3>
            <p><strong>Type:</strong> ${pet.type}</p>
            <p><strong>Breed:</strong> ${pet.breed}</p>
            <p><strong>Age:</strong> ${pet.age} years old</p>
            <button onclick="adoptPet(${pet.id})">Adopt ${pet.name}</button>
        `;
        petsContainer.appendChild(petCard);
    });
}

// Adoption Request
function adoptPet(petId) {
    alert(`Adoption Request Submitted for Pet ID: ${petId}`);
}

// Payment Form
document.getElementById('payment-form').onsubmit = function (event) {
    event.preventDefault();
    let amount = document.getElementById('amount').value;
    alert(`Payment of $${amount} successful!`);
};

// Call loadPets on page load
if (document.getElementById('pets-container')) {
    window.onload = loadPets;
}
