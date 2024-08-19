import { Injectable } from '@angular/core';

/**
 * Service to provide a list of skills with images and names.
 *
 * This service is provided in the root and can be injected into
 * any component or other service that requires access to the skills list.
 */
@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor() {}

  /**
   * Array of skill objects.
   */
  skills = [
    {
      img: 'angular.png',
      name: 'Angular',
    },
    {
      img: 'typescript.png',
      name: 'TypeScript',
    },
    {
      img: 'javascript.png',
      name: 'JavaScript',
    },
    {
      img: 'html.png',
      name: 'HTML',
    },
    {
      img: 'scrum.png',
      name: 'Scrum',
    },
    {
      img: 'firebase.png',
      name: 'Firebase',
    },
    {
      img: 'git.png',
      name: 'GIT',
    },
    {
      img: 'css.png',
      name: 'CSS',
    },
    {
      img: 'api.png',
      name: 'Rest-Api',
    },
    {
      img: 'material.png',
      name: 'Material design',
    },
  ];
}
