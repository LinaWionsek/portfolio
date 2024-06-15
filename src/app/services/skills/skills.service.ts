import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }


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
