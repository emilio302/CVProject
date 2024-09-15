import React, { Component } from "react";
import { Settings } from "lucide-react";
import profilePic from "./profile.svg";
import { Link } from 'react-router-dom';

import "./UpperBar.css";

class UpperBar extends Component {
  render() {

    return (
      <div className="upper-bar">
        <div className="profilePic">
          <img src="/resources/images/profile.svg" alt="Perfil" className="profilePic" />
          <h1 className="text-xl font-bold">Mi CV</h1>
        </div>
        <Link to="/settings">
        <button
          className="bSettings"
        >
          <Settings size={24} />
        </button>
        </Link>
      </div>
    );
  }
}

export default UpperBar;
