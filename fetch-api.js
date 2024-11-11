// Function to fetch data for a specific Pokémon
async function fetchData() {
    try {
      const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  
      // Check if the response is okay
      if (!response.ok) {
        throw new Error("Could not fetch resource");
      }
  
      const data = await response.json();
  
      // Get the Pokémon sprite (image)
      const pokemonSprite = data.sprites.front_default;
  
      // Get Pokémon details (name, ID, and types)
      const pokemonNameDisplay = data.name.charAt(0).toUpperCase() + data.name.slice(1);  // Capitalize first letter
      const pokemonId = data.id;
      const pokemonTypes = data.types.map(type => type.type.name).join(", ");
  
      // Get the elements to display the data
      const pokemonImage = document.getElementById("pokemonSprite");
      const pokemonNameElement = document.getElementById("pokemonNameDisplay");
      const pokemonIdElement = document.getElementById("pokemonId");
      const pokemonTypesElement = document.getElementById("pokemonTypes");
  
      // Clear previous data
      pokemonImage.src = '';
      pokemonNameElement.textContent = '';
      pokemonIdElement.textContent = '';
      pokemonTypesElement.textContent = '';
  
      // Set the Pokémon data
      pokemonImage.src = pokemonSprite;
      pokemonNameElement.textContent = pokemonNameDisplay;
      pokemonIdElement.textContent = `ID: #${pokemonId}`;
      pokemonTypesElement.textContent = `Types: ${pokemonTypes}`;
  
      // Show the result section
      document.querySelector(".pokemon-result").style.display = "block";
    } catch (error) {
      console.error(error);
      alert("Error fetching Pokémon data. Please check the name or try again.");
    }
  }
  
  // Attach the function to the search button
  document.getElementById("searchButton").addEventListener("click", fetchData);
  