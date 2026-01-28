import React from "react";
import { MessageCircle, CheckCircle, Import } from "lucide-react"; // Instale: npm i lucide-react
import Navbar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";

export default function App() {
  return (
    <div className="min-w-screen min-h-svh bg-slate-100/50 overflow-x-hidden">
      <div id="Inicio" className="w-full max-w-full h-svh flex flex-col py-6" >
            <Navbar className="overflow-x-hidden" />

            <Hero className="overflow-x-hidden" />
      </div>
      <div id="Sobre" className="w-full overflow-x-hidden"><About /></div>
      <div id="Servicos" className="w-full overflow-x-hidden"><Services /></div>
    </div>
  );
}
