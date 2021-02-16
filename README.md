# Vehicle Service
> Front-end vehicle service scheduler widget built with Reactjs and GraphQL

## Deployment
- WIP

## Development
- Reactjs 
- Webpack 5 (+ Module Federation)
- GraphQL (+ Apollo client & server)
- React-intl
- Styled-components

## Features (Fully working features)
- Implemented a vehicle service scheduler widget with 4 different states; SET_SCHEDULE, COMPLETE, LOADING, ERROR 
- Webpack 5 with module federation externaizing the widget to the host for seamless integration
- GraphQL server running by Apollo server, providing a set of data to the client after quering only necessary data
- Apollo client caching graphql queries on the browser side for better latency and better user experience
- useSteps custom hook to handle state navigation
- Internationalization with i18n providing both English & Korean languages for better accessibility
- Styled-components to design custom UI components & wrap the whole app with a global theme for design consistency

## To-Do list
- UI design upgrade
- Unit test

### How to Run
```
git clone the repo
cd into the repo
yarn
yarn start
```

### Requirements
Nodejs

## Meta Data
- april9288@gmail.com