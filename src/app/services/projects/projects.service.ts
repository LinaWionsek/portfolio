import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  projects = [
    {
      img: 'join.png',
      name: 'Join',
      tech_stack: 'Angular | TypeScript | HTML | CSS | Firebase ',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      demo: 'https://join.lina-wionsek.de/',
      github: 'https://github.com',
    },
    {
      img: 'polloloco.png',
      name: 'Pollo Loco',
      tech_stack: 'JavaScript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      demo: 'http://polloloco.lina-wionsek.de/',
      github: 'https://github.com',
    },
    {
      img: 'pokedex.png',
      name: 'Pokedex',
      tech_stack: 'JavaScript | HTML | CSS',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      demo: 'http://pokedex.lina-wionsek.de/',
      github: 'https://github.com',
    },
  ]
}
