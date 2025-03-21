#The Office Quote Generator
##Description

<b>The Office Quote Generator</b> is an Angular Single Page Application (SPA) that consumes "The Office" API to display quotes from five iconic characters: <b> Michael Scott, Dwight Schrute, Jim Halpert, Kevin Malone, and Creed Bratton </b> for now, other will be add later.

On the <b>home page </b>, users see buttons with character images. Clicking a button fetches a random quote from that character. After receiving a quote, users can click a "<b>Convert to SVG</b>" button to generate an SVG version of the text.

##Concepts

✅ Consume a RESTful API – The application fetches real-time quotes from "The Office" API.

✅ User Interaction – Users can click character buttons to get random quotes and convert them to SVG format.

✅ Multiple Components – The application consists of multiple Angular components, including:

    - Home Component – Displays character buttons.
    - Quote Component – Shows fetched quotes.
    - SVG Generator Component – Converts quote text into an SVG.
