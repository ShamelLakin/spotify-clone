import React, { useEffect} from 'react';
import './styles/App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {
  // Run code based on a given condition.
  useEffect(() => {
    const token = getTokenFromUrl();
    console.log('I HAVE A TOKEN', token)
  }, []);
    


  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
