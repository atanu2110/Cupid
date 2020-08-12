import React from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './Components/Gallery';
import TopNavigation from './Components/TopNavigation';
import  { AppContextProvider } from './Components/context';
import Routes from "./routes/AppRouter";

function App() {
  return (
    // <div>
    // <TopNavigation />
    // <Gallery /></div>
    <AppContextProvider>
    <Routes />
  </AppContextProvider>
    );
}

export default App;
