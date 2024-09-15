import React, { Component } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "./LateralBar.css";

const sections = [
  {
    src: "https://cdn-icons-png.flaticon.com/512/1063/1063376.png",
    alt: "Experiencia",
    section: "experience"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/2502/2502399.png",
    alt: "Habilidades",
    section: "skills"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/5129/5129551.png",
    alt: "Joke",
    section: "joke"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/2740/2740648.png",
    alt: "Otros",
    section: "other"
  }
]

function LateralBar({ setActiveSection, collapsed, setCollapsed }) {

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
        {sections.map(section=> <MenuItem
          icon={
            <img
              src={section.src}
              alt={section.alt}
              className="rounded-full"
              width={25}
            />
          }
          onClick={() => setActiveSection(section.section)}
        >
          {section.alt}
        </MenuItem>)}
      </Menu>
    </Sidebar>
  );
}

export default LateralBar;
