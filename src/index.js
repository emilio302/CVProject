import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./styles.css";
import CssBaseline from '@mui/material/CssBaseline';
import "./component/upperBar/UpperBar.css";

import App from "./App";
import Joke from "./component/joke/Joke.tsx"
import SettingsMenu from "./component/SettingsMenu/SettingsMenu.tsx";

const root = createRoot(document.getElementById("root"));
root.render( <Router>
    <div>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/settings" element={<SettingsMenu />} />
      </Routes>
    </div>
  </Router>);
