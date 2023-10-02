//Using the DOMContentLoaded event listener to ensure that the code is executed after the DOM has loaded.
//Using the getElementById() function to get references to DOM elements.
//Using the fetch() API to make HTTP requests to the server.

document.addEventListener("DOMContentLoaded", () => {
    const navBar = document.getElementById("character-bar");
  
// Using fetch to get the character details from the API
    function getCharacterDetails() {
// Fetch the character details from the API (adjust the API endpoint)
      return fetch("http://localhost:3000/characters")
        .then((res) => res.json())
        .then((characters) => {
// Depopulating the character-bar
          navBar.innerHTML = "";
  
// Iterating over the characters to add them to the character-bar
      characters.forEach((character) => {
        const characterView = document.createElement("span");
        characterView.id = character.id;
        characterView.innerText = character.name;
        characterView.style.cursor = "pointer";
  
// Add an event listener to the character
        characterView.addEventListener("click", () => {
          const characterName = document.getElementById("name");
          characterName.innerText = character.name;
          const characterImage = document.getElementById("image");
          characterImage.src = character.image;
  
          const currentVotes = document.getElementById("vote-count");
          currentVotes.innerText = character.votes;
        });
  
// Add the character to the character bar
        navBar.appendChild(characterView);
      });
    });
    }
  
// Creating an event listener to update votes
    const votesForm = document.getElementById("votes-form");
    votesForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const votesInput = document.getElementById("votes");
      const currentVotes = document.getElementById("vote-count");
  
  if (!isNaN(votesInput.value)) {
    const newVotes = parseInt(votesInput.value);
    const currentVoteCount = parseInt(currentVotes.innerText);
    currentVotes.innerText = currentVoteCount + newVotes;
  } else {
    alert("Votes can only be in numbers");
  }
  
  // Form Reset
  votesForm.reset();
    });
  
// Adding a submit event listener for the new character
    const characterForm = document.getElementById("character-form");
    characterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = document.getElementById("name2");
      const imageUrlInput = document.getElementById("image-url");
  
  // checking the input values
  if (!nameInput.value || !imageUrlInput.value) {
    alert("Name and Image URL are required fields.");
    return;
  }
  
  // Creating an object using the character details
  const newCharacter = {
    name: nameInput.value,
    image: imageUrlInput.value,
    votes: 0,
  };
  
  // Adding a new character to the character bar
  const characterView = document.createElement("span");
  characterView.innerText = newCharacter.name;
  characterView.style.cursor = "pointer";
  navBar.appendChild(characterView);
  
  //depopulating the input boxes
  nameInput.value = "";
  imageUrlInput.value = "";
  
// Adding an event listener to new character
  characterView.addEventListener("click", () => {
    const characterName = document.getElementById("name");
    characterName.innerText = newCharacter.name;
    const characterImage = document.getElementById("image");
    characterImage.src = newCharacter.image;
    const currentVotes = document.getElementById("vote-count");
    currentVotes.innerText = newCharacter.votes;
  });
    });
  
 //Invoking the getCharacterDetails() function to get character details
    getCharacterDetails();
  });