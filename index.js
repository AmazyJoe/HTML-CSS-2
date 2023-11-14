const Programmers = [
    { name: 'Cow', type: 'Mammal' },
    { name: 'Eagle', type: 'Bird' },
    { name: 'Snake', type: 'Reptile' },
];

function createAnimalCard(animal) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<h2>${animal.name}</h2><p>Type: ${animal.type}</p>`;
    return card;
}

function displayAnimals(animalType) {
    const container = document.getElementById('animalContainer');
    container.innerHTML = '';

    const filteredAnimals = animalType === 'All' ? animals : animals.filter(animal => animal.type === animalType);

    filteredAnimals.forEach(animal => {
        const card = createAnimalCard(animal);
        container.appendChild(card);
    });
}

document.getElementById('allBtn').addEventListener('click', () => displayAnimals('All'));
document.getElementById('mammalsBtn').addEventListener('click', () => displayAnimals('Mammal'));
document.getElementById('birdsBtn').addEventListener('click', () => displayAnimals('Bird'));
document.getElementById('reptilesBtn').addEventListener('click', () => displayAnimals('Reptile'));

// Add an event listener to the submit button
document.getElementById('submit').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the input fields
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;

    // Create a new animal object
    const newAnimal = { name: firstName, type: lastName };

    // Add the new animal to the animals array
    animals.push(newAnimal);

    // Display all animals, including the new one
    displayAnimals('All');
});

displayAnimals('All');


