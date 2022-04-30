import { Route, Routes } from 'react-router-dom';
import React, { useContext } from 'react'
import './App.scss';
import Sidebar from './component/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import Dashboard from "./pages/Dashboard/Dashboard";
import Settings from './pages/Settings/Settings';
import Modal from './component/Modal/Modal';

import { ModalContext } from "./component/Context/ModalContenxt";

function App() {

  const { modal } = useContext(ModalContext);

  return (
  <div className='app'>
    <Sidebar />
    <div className="app__content">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/discount/*" element={<Home />} />
        <Route path="/notificition/*" element={<Home />} />
        <Route path="/message/*" element={<Home />} />
        <Route path="/graph/*" element={<Dashboard />} />
        <Route path="/setting/*" element={<Settings />} />
      </Routes>
    </div>

    {modal && <Modal />}
  </div>
  );
}

export default App;
