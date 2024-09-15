import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Settings, ChevronLeft, ChevronRight } from "lucide-react";
import UpperBar from "./component/upperBar/UpperBar.tsx";
import Joke from "./component/joke/Joke.tsx";
import Lateralbar from "./component/lateralBar/LateralBar.tsx";
import "./component/upperBar/UpperBar.css";
import {List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

// Componentes de secciones
const ExperienceSection = () => (
  <div className="experience-card">
    <h2>Experiencia</h2>
    <p>Resumen de experiencia...</p>
    <List className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[1, 2, 3].map((job) => (
        <ListItem>
           <ListItemAvatar>
              <Avatar src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText 
            primary ={`Trabajo ${job}`}
            secondary = {`Descripción del trabajo ${job}...`}
          />
        </ListItem>
      ))}
    </List>
  </div>
);

const SkillsSection = () => (
  <div className="p-4">
    <h2>Habilidades</h2>
    <div className="flex flex-wrap gap-2">
      {["TypeScript", "React", "Node.js", "Python", "Excel"].map((skill) => (
        <div
          key={skill}
          className="skill-tag"
        >
          {skill}
        </div>
      ))}
    </div>
  </div>
);

const OtherTopicsSection = () => (
  <div className="p-4">
    <h2 >Otros Temas</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { title: "Aficiones", text: "Leer, viajar, fotografía" },
        { title: "Deportes", text: "Fútbol, natación, ciclismo" },
        { title: "Juegos", text: "Ajedrez, Sudoku, videojuegos de estrategia" },
      ].map((topic, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">{topic.title}</h3>
          <p>{topic.text}</p>
        </div>
      ))}
    </div>
  </div>
);

// Componente principal
function App() {
  const [collapsed, setCollapsed] = useState(true);
  const [activeSection, setActiveSection] = useState("experience");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "experience":
        return <ExperienceSection />;
      case "skills":
        return <SkillsSection />;
      case "joke":
        return <Joke />;
      case "other":
        return <OtherTopicsSection />;
      default:
        return <div>Selecciona una sección</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <UpperBar />
      </header>
      <main className="main">
        <Lateralbar setActiveSection={setActiveSection} collapsed={collapsed} setCollapsed={setCollapsed}/>
        <div className="content-section">{renderActiveSection()}</div>
      </main>
    </div>
  );
};

export default App;
