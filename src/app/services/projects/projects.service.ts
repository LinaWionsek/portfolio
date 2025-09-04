import { Injectable } from '@angular/core';

/**
 * Service for managing projects data.
 *
 * This service provides a list of projects, each with an associated image, name, tech stack, description, and links to a demo and GitHub repository.
 */
@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() { }

  /**
   * Array of project objects.
   *
   */
  projects = [
    {
      img: 'dabubble.png',
      name: 'DA Bubble',
      tech_stack: 'Angular | TypeScript | HTML | SCSS | Firebase ',
      description:
        'A real-time chat application for team communication, inspired by Slack. Connect with your team in real time, via direct messages or in a channel.',
      description_de:
        'Eine Echtzeit-Chat-Anwendung für Teamkommunikation, inspiriert von Slack. Tauschen Sie sich in Echtzeit mit Ihrem Team aus: per Direktnachricht oder in einem Channel.',
      demo: 'https://dabubble.lina-wionsek.de/',
      demo_label: 'Live test',
      github: 'https://github.com/LinaWionsek/dabubble',
    },
    {
      img: 'timetracker.jpg',
      name: 'Time Tracker',
      tech_stack: 'Angular | TypeScript | HTML | SCSS | Firebase ',
      description:
        'Application for time tracking. Filter entries by user and evaluate times in weekly and monthly views.',
      description_de:
        'Anwendung zur Arbeitszeiterfassung. Filtern Sie Einträge nach Nutzern und werten Sie Zeiten in Wochen- und Monatsansichten aus.',
      demo: 'https://www.linkedin.com/posts/lina-wionsek-042719297_mein-time-tracker-ist-endlich-fertig-ich-activity-7353688310147346434-M3us?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEfU0fIBcxCdk_r-gqOtooCnjHo5lE03Lcs',
      demo_label: 'LinkedIn',
      github: null,
    },
    {
      img: 'join.png',
      name: 'Join',
      tech_stack: 'JavaScript | HTML | CSS | Firebase ',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      description_de:
        'Aufgabenmanager, inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben per Drag-and-Drop, weisen Sie Benutzer und Kategorien zu.',
      demo: 'https://join.lina-wionsek.de/',
      demo_label: 'Live test',
      github: 'https://github.com/LinaWionsek/join',
    },
    {
      img: 'polloloco.png',
      name: 'Pollo Loco',
      tech_stack: 'JavaScript | HTML | CSS',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      description_de:
        'Spring-, Renn- und Wurfspiel basierend auf objektorientiertem Ansatz. Helfen Sie Pepe dabei, Münzen und Tabasco-Sauce zu finden, um gegen die verrückte Henne zu kämpfen.',
      demo: 'http://polloloco.lina-wionsek.de/',
      demo_label: 'Live test',
      github: 'https://github.com/LinaWionsek/el-pollo-loco',
    },
    {
      img: 'pokedex.png',
      name: 'Pokedex',
      tech_stack: 'JavaScript | HTML | CSS',
      description:
        'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      description_de:
        'Basierend auf der PokéAPI, einer einfachen Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.',
      demo: 'http://pokedex.lina-wionsek.de/',
      demo_label: 'Live test',
      github: 'https://github.com/LinaWionsek/Pokedex',
    },
  ];
}
