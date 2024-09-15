import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Button, Avatar } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

import "./UpperBar.css";

class UpperBar extends Component {
  render() {

    return (
      <div className="upper-bar">
        <div className="profilePic">
          <Avatar 
          src="/resources/images/profile.svg" 
          alt="Perfil" 
          className="avatar"
          sx={{ width: 50, height: 50 }}/>
          <h1 className="cvTitle">Mi CV</h1>
        </div>
        <div className="bSettings">
          <Link to="/settings">
            <Button
              endIcon={<SettingsIcon />}
            >
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default UpperBar;
