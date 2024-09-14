import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Settings, ChevronLeft, ChevronRight } from "lucide-react";
import UpperBar from "./component/upperBar/UpperBar.tsx";
import Joke from "./component/joke/Joke.tsx";
import "./component/upperBar/UpperBar.css";

// Componentes de secciones
const ExperienceSection = () => (
  <div className="experience-card">
    <h2 className="text-2xl font-bold mb-4">Experiencia</h2>
    <p className="mb-4">Resumen de experiencia...</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[1, 2, 3].map((job) => (
        <div key={job} className="bg-white p-4 rounded-lg shadow">
          <img
            src={`/api/placeholder/50/50`}
            alt="Logo"
            className="w-12 h-12 mb-2"
          />
          <h3 className="text-lg font-semibold">Trabajo {job}</h3>
          <p>Descripción del trabajo {job}...</p>
        </div>
      ))}
    </div>
  </div>
);

const SkillsSection = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Habilidades</h2>
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
    <h2 className="text-2xl font-bold mb-4">Otros Temas</h2>
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
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState("experience");
  const [showSettings, setShowSettings] = useState(false);

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
        <UpperBar setShowSettings={setShowSettings} showSettings={showSettings} />
      </header>
      <main className="main">
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
        <div className="content-section">{renderActiveSection()}</div>
      </main>
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Configuración</h2>
            <p>Aquí puedes agregar opciones de configuración...</p>
            <button
              onClick={() => setShowSettings(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
