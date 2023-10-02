//Using the DOMContentLoaded event listener to ensure that the code is executed after the DOM has loaded.
//Using the getElementById() function to get references to DOM elements.
//Using the fetch() API to make HTTP requests to the server.
const navBar = document.getElementById("character-bar");
document.addEventListener("DOMContentLoaded", () => {
    
// Using fetch to get the character details from the API
    async function getCharacterDetails() {
// Fetch the character details from the API (adjust the API endpoint)
      return fetch("http://localhost:3000/characters")
        .then((response) => response.json())
        .then((characters) => {
// Depopulating the character-bar
          navBar.innerHTML = "";
  console.log(characters)
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
    alert("Invalid Input");
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
  
// Creating an object using the character details
  const newCharacter = {
    name: nameInput.value,
    image: imageUrlInput.value,
    votes: 0,
  };
  
  // Adding a new character to the character bar
  function updateNewCharacter() {
    return fetch("http://localhost:3000/characters", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: nameInput.value,
        image: imageUrlInput.value,
        votes: 0,
      }),
    });
  }
  updateNewCharacter();
    });
  
 //Invoking the getCharacterDetails() function to get character details
    getCharacterDetails();
  });

  