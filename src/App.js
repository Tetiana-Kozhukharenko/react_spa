import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavMenu from './components/nav-menu/NavMenu';
import Home from './pages/home/Home';
import Publications from './pages/publications/Publications';
import Photographs from './pages/photographs/Photographs';
import Contacts from './pages/contacts/Contacts';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Routes>
        <Route index element={<Home />} />
        <Route path='publications' element={<Publications />} />
        <Route path='photographs' element={<Photographs />} />
        <Route path='contacts' element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
