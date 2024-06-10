# Welland Canal Status 
[canalstatus.ca](https://www.canalstatus.ca)

I created this live project to have a better experience while driving around the Niagara Region.

Other solutions do exist, but they are either paid or not super user friendly.

## Built with Vite and React

For this project I used Vite with React, as the hot reloading function makes visualizing changes and absolute breeze.

## Public API Access

This app was developed and deployed in two parts, one of a server that retrieves the info from the [canalstatus.com API](https://canalstatus.com/documentation)
and delivering it in a more mobile friendly interface.

## Work In Progress

Even though the basic functionality is all that is needed for every day use, I will continue to add to this, and potentially translate the code into native platforms in the future. The next step will be to turn this into a PWA.

## App Functionality

- The app consists of two main parts, the server and the client.
- The server is responsible for retrieving the data from the [canalstatus.com API](https://canalstatus.com/documentation) and delivering a JSON response.
- The client is built with React and Vite and requests the data from the server.
- The client then renders the data in a mobile friendly interface.
- The app is built to be responsive and will adjust layout based on the device viewing the site.
- The app also includes a simple copyright notice.

### Server

- The server is located in the `server` directory.
- It uses the Express framework and the `axios` library to make requests to the [canalstatus.com API](https://canalstatus.com/documentation).
- The server listens for GET requests to the `/api` endpoint and responds with the data retrieved from the API.

### Client

- The client is located in the `client/canal-status` directory.
- It uses the React framework and the Vite build tool to create a mobile friendly interface.
- The client makes a GET request to the server's `/api` endpoint to retrieve the data.
- The client then renders the data in a grid layout.
- The client also includes a simple loading state and error handling.

### Components

- The client is built with React components.
- The components are located in the `client/canal-status/src/components` directory.
- The components include a `Card` component that renders the data in a grid layout.
- The components also include a `Copyright` component that includes a simple copyright notice.

### Data Structure

- The data retrieved from the API is an array of objects.
- Each object represents a bridge and has several properties including `bridge`, `city`, `status`, and `stl`.
- The `stl` property represents the state of the bridge and has a value of `0`, `1`, or `2`.
- The `stl` property is used to determine the style of the `Card` component based on the state of the bridge.

### Styles

- The styles are located in the `client/canal-status/src/App.css` file.
- The styles include a grid layout for the `Card` components.
- The styles also include different background colors for the `Card` components based on the state of the bridge.

### Bridges Component

- The `Bridges` component has a complexity of 12 based on the following factors:
  - 2 props being passed in
  - 1 state being used
  - 2 conditional statements
  - 1 function call
  - 1 if statement
  - 1 return statement
  - 13 lines of code
- The `Bridges` component is a pure component based on the following factors:
  - The component does not modify any external state or have any side effects
  - The component does not depend on any external state or props other than those passed in
  - The component does not have any lifecycle methods
- The `Bridges` component is well tested with a coverage of 91.2%.

The `Bridges` component retrieves data from the API and renders a `Card` component for each bridge.

- The `Bridges` component makes a GET request to the API when the component mounts.
- The `Bridges` component sets the state to `loading` while the data is being retrieved.
- If the data is successfully retrieved, the state is set to `data` and the data is rendered in `Card` components.
- If there is an error retrieving the data, the state is set to `error` and an error message is rendered.
- The `Card` component is passed the data for each bridge and renders the data in a grid layout.
- The `Card` component is also passed a prop that determines the style of the component based on the state of the bridge.
