# Assignment

BB-8 has been commissioned to make a Star Wars encyclopedia so that he can stop being a rolling encyclopedia and be able to focus on more important things, some scrolling around and not answering stupid questions all the time.

he wants his gang to be able to easily find information about everything in the star wars universe. Your important mission is to create encyclopedia and thus help bring peace to the galaxy!

The API you will use is my version of SWAPI : https://swapi.thehiveresistance.com/api

## Basic Requirements

React & React Router
Loading & Error handling
The communication with the API must be in an intermediate layer (ie "service" folder where FETCH/axios communicate itself takes place)
Component based
Typescript
Version control
Indenting
Deploy(?)

## Pass

- be able to browse among movies and characters (incl. simple pagination)
- all resource objects must have links to the respective related resource (eg, on a person you can click on all the films they have been in and get to that film's detail page, and vice versa)

## Pass with Merit

- browse all resources (films, people, planets…)
- pagination using query parameters (should survive page reloads and navigation via the browser's back/forward buttons) eg:
  /people/?page=2
- search function on each resource (the same search form must be used regardless of which resource the component is used in.
  what you searched for should be displayed ("search results for Yoda") and not be linked to what is in the search route)

### Endpoints

All endpoints support pagination and searching. Pagination is done by sending ?page=X and search by sending ?search=X.

The response contains all necessary information, such as total number, link to next/previous page, etc.

Links to all endpoints can be found at the root URL https://swapi.thehiveresistance.com/api.
