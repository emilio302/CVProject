import React, { Component } from "react";
import { Settings } from "lucide-react";
import profilePic from "./profile.svg";
import { Link } from 'react-router-dom';

import "./SettingsMenu.css";

class SettingsMenu extends Component {
  render() {
    const { setShowSettings, showSettings } = this.props;

    return (
      <div className="settings-modal">
      <div className="settings-content">
        <h2 className="text-xl font-bold mb-4">Configuración</h2>
        <p>Aquí puedes agregar opciones de configuración...</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          <Link to="/">Ir Home</Link>
        </button>
      </div>
    </div>
    );
  }
}

export default SettingsMenu;
