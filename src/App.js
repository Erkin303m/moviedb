import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from './screens/Home';
import InfoMovie from './screens/InfoMovie';
import InfoPeople from './screens/InfoPeople';
import People from './screens/People';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/infomovie'  element={<InfoMovie/>} />
        <Route path='/people'  element={<People/>} />
        <Route path='/infopeople'  element={<InfoPeople/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
