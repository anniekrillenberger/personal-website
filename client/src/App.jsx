import axios from 'axios';
import Navigation from './Navigation.jsx';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-tooltip/dist/react-tooltip.css'

function App() {

  return <Navigation/>

// // https://dev.to/techcheck/creating-a-react-node-and-express-app-1ieg !!


// //data will be the string we send from our server
// const apiCall = () => {
//   axios.get('http://localhost:8080').then((data) => {
//     console.log(data);
//   })
// }

//   return (
//     <div className="App">
//       <header className="App-header">

//         <button onClick={apiCall}>Make API Call!</button>

//       </header>
//     </div>
//   );
}

export default App;



/**
 * Notes:
 *      - WAVE tool for acessability
 * 
 * TODO: 
 *      - copyright statement: "redirect to VKLLC.com"
 *      - navbar
 *        - dropdown menu styling
 */