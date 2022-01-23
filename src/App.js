import './App.css';
import React from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home  from './routes/Home';
import About from "./routes/About";
import MySkill from "./routes/MySkill";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import Layout from "./Layout";

function App() {
  return (
    <HashRouter className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="MySkill" element={<MySkill/>}/>
          <Route path="Projects" element={<Projects/>}/>
          <Route path="Contact" element={<Contact/>}/>
          <Route path="*" element={<Navigate replace to="/"/>}/>
        </Route>
      </Routes>      
    </HashRouter>
  );
}

export default App;
