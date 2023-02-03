import './App.css'
import {useState, useEffect} from 'react';

function App() {

  //TODO: Display the list of mission names received from the API response

  fetch("https://api.spacexdata.com/v2/launches")
    .then(response => response.json())
    .then(data => console.log(data))

  return <div/>
}

export default App
