import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import Particles from "react-tsparticles"
import particlesParams from "../data/particles.json"

import Typer from "./Typer"

import Projects from "./Projects"
import projectData from "../data/projects.json"

import Links from "./Links"
import linksData from "../data/links.json"

ReactDOM.render(<React.StrictMode><Particles params={particlesParams}/></React.StrictMode>, document.getElementById("particles"))

ReactDOM.render(<Typer />, document.getElementById("typer"))

ReactDOM.render(<React.StrictMode><Projects data={projectData} /></React.StrictMode>, document.getElementById("projects"))

ReactDOM.render(<Links data={linksData} />, document.getElementById("links"))

window.onload = () => {
  document.getElementById("overlay").remove()
}