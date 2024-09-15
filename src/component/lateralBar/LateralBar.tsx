import React, { Component } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "./LateralBar.css";

function LateralBar({setActiveSection, collapsed, setCollapsed}) {

    return (
      <Sidebar collapsed={collapsed} className="h-screen">
          <Menu>
            <MenuItem
              icon={
                collapsed ? (
                  <ChevronRight size={20} />
                ) : (
                  <ChevronLeft size={20} />
                )
              }
              onClick={() => setCollapsed(!collapsed)}
              className="menu-item"
            >
              {!collapsed && <h2>Menú</h2>}
            </MenuItem>
            <MenuItem
              icon={
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1063/1063376.png"
                  alt="Experiencia"
                  className="rounded-full"
                  width={25}
                />
              }
              onClick={() => setActiveSection("experience")}
            >
              Experiencia
            </MenuItem>
            <MenuItem
              icon={
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2502/2502399.png"
                  alt="Habilidades"
                  className="rounded-full"
                  width={25}
                />
              }
              onClick={() => setActiveSection("skills")}
            >
              Habilidades
            </MenuItem>
            <MenuItem
              icon={
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5129/5129551.png"
                  alt="Joke"
                  className="rounded-full"
                  width={25}
                />
              }
              onClick={() => setActiveSection("joke")}
            >
              Joke
            </MenuItem>
            <MenuItem
              icon={
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2740/2740648.png"
                  alt="Otros"
                  className="rounded-full"
                  width={25}
                />
              }
              onClick={() => setActiveSection("other")}
            >
              Otros Temas
            </MenuItem>
          </Menu>
        </Sidebar>
    );
}

export default LateralBar;
