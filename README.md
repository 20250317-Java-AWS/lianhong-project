# Joke Generator 🤣

## Description  
The **Joke Generator** is an Angular Single Page Application (SPA) that uses the free [JokeAPI](https://v2.jokeapi.dev/) to fetch and display jokes based on user-selected categories.  

On the **home page**, users can select one or more joke categories such as **Programming**, **Pun**, **Misc**, or **Dark**. When they click the **"New Joke"** button, the app fetches a random joke from those selected categories.  

The app first displays the **setup** part of the joke (like a question). A second button, labeled **"What?"**, lets the user reveal the **delivery** or punchline of the joke.

---

## Concepts  

- ✅ **SPA Route Navigation** – All interaction happens within a single page. Additional routes like `/favorites` or `/svg` can be added later.
- ✅ **Consume a RESTful API** – Uses the [JokeAPI](https://v2.jokeapi.dev/) to fetch real-time jokes based on user-selected categories.
- ✅ **User Interaction** – Users can choose joke categories, get a new joke, and reveal the punchline.
- ✅ **Multiple Components** – The app includes:
  - `HomeComponent`: Displays category options and two liner jokes with interaction
  - `SingleComponent`: Displays category options and one liner jokes with interaction
  - `FavoritesComponent`: View and manage saved jokes

---

## Features

- 🟢 **Home Page (`/`)**
  - Select multiple joke categories
  - "New Joke" button fetches a random joke
  - Add to Favorite button add the joke to the Favorites.
  - Reset button reset everything.
  - Display the setup first
  - "What/Why?" button reveals the punchline

- 🟢 **One-Liner (`/single`)**
  - Select multiple joke categories from drop-down
  - "New Joke" button fetches a random one part joke from the selected category
  - "New Joke" button reveals the next joke in the selected category.
  - 
- 🟢 **Favorites (`/favorites`)**
  - Display all the favorite jokes.
  - "Remove" button the selected joke from the list and remove from display.
    

---

## Technologies Used

- **Frontend Framework**: Angular  
- **API**: [JokeAPI](https://v2.jokeapi.dev/)  
- **Routing**: Angular Router  
- **HTTP**: Angular HttpClient  
- **Styling**: CSS / Bootstrap  

---
