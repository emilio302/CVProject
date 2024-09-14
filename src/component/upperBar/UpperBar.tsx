import React, { Component } from "react";
import { Settings } from "lucide-react";
import profilePic from "./profile.svg";

import "./UpperBar.css";

class UpperBar extends Component {
  render() {
    const { setShowSettings, showSettings } = this.props;

    return (
      <div>
        <div className="profilePic">
          <img src={profilePic} alt="Perfil" className="profilePic" />
          <h1 className="text-xl font-bold">Mi CV</h1>
        </div>
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="bSettings"
        >
          <Settings size={24} />
        </button>
      </div>
    );
  }
}

export default UpperBar;
