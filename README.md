# Star wars clone

## About

In this project I use React for the first time to seach for movies, characters, planets etc from the Star Wars universe. May the force be with you 🪐

## Features

- be able to browse among movies and characters (incl. simple pagination)
- all resource objects must have links to the respective related resource (eg, on a person you can click on all the films they have been in and get to that film's detail page, and vice versa)
- browse all resources (films, people, planets…)
- pagination using query parameters (should survive page reloads and navigation via the browser's back/forward buttons) eg:
  /people/?page=2
- search function on each resource (the same search form must be used regardless of which resource the component is used in.
  what you searched for should be displayed ("search results for Yoda") and not be linked to what is in the search route)

## Learning points

- React & React Router
- Loading & Error handling
- The communication with the API must be in an intermediate layer (ie "service" folder where FETCH/axios communicate itself takes place)
- Component based

- ## Tech stack
- React
- react-router
- axios
- sass
- netlify CLI

## Setup
In your terminal run these commands:

1. `npm install`
2. `npm run dev`

  
## Deplopyed at
https://starpaws.netlify.app
