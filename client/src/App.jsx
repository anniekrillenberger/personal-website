import 'react-tooltip/dist/react-tooltip.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Navigation.jsx';
import React, { useEffect } from 'react';
import axios from 'axios';

function App() {

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API_URL}/test`)
      .then(response => {
        console.log("Message from API: ", response.data.message)
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return <Navigation />
}

export default App;