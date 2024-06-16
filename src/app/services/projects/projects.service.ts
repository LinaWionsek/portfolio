import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  projects = [
    {
      img: 'angular.png',
      name: 'Join',
      stack: 'Angular',
      description: 'ggagakkgag',
      demo: 'https://github.com',
      github: 'https://github.com',
    },
  ]
}
