import 'react-tooltip/dist/react-tooltip.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Navigation.jsx';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/test')
      .then(response => {
        console.log("Message from API: ", response.data.message)
        setMessage(response.data.message)
   } )
      .catch(error => console.error('Error:', error));
  }, []);

  return <Navigation />
}

export default App;