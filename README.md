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
  - `HomeComponent`: Displays category options and joke interaction
  - *(Optional)* `FavoritesComponent`: View and manage saved jokes
  - *(Optional)* `SvgComponent`: Turn jokes into downloadable SVGs

---

## Features

- 🟢 **Home Page (`/`)**
  - Select multiple joke categories
  - "New Joke" button fetches a random joke
  - Display the setup first
  - "What?" button reveals the punchline

- ⭐ *(Optional)*
  - Save favorite jokes
  - Generate SVGs from jokes
  - Share jokes on social media

---

## Technologies Used

- **Frontend Framework**: Angular  
- **API**: [JokeAPI](https://v2.jokeapi.dev/)  
- **Routing**: Angular Router  
- **HTTP**: Angular HttpClient  
- **Styling**: CSS / Bootstrap  

---