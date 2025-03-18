# Anime Explorer

An Angular Single Page Application (SPA) that uses the Jikan API to show anime details. 
Users can browse trending anime, search for titles, view trailers and reviews, and save favorites to their watchlist.

On the home page, users see a list of popular anime. Clicking on an anime opens a details page with more information. Users can also search for anime by title and add favorites to their personal watchlist.

Concepts
✅ SPA Route Navigation – Clicking on an anime opens its details page (/anime/:id). Users can also search for anime (/search) and go to their watchlist.

✅ Consume a RESTful API – The app gets real-time anime details from the Jikan API.

✅ User Interaction – Users can search, view details, add favorites, and manage a watchlist.

✅ Multiple Components – The app has different Angular components:

- Anime Details – Displays more info, trailers, and reviews.
- Search – Lets users find anime by title.
- Watchlist/FavoriteList– Saves favorite anime for later.