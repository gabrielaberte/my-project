import "antd/dist/antd.css";
import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Menus from "./components/menu";
import Carteirinha from "./pages/Carteirinha";
import TelaInicial from "./pages/TelaInicial";

const App: FC = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicial />}>
          
        </Route>
        <Route path="/Carteirinha" element={<Carteirinha />}>
          
        </Route>
      </Routes>
    </Router>
  </>
);

export default App;
