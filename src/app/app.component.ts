import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Inicio', url: '/folder/inicio', icon: 'home', useIonicIcon: true },
    { title: 'Personajes', url: '/folder/outbox', icon: 'personajes', useIonicIcon: false },
    { title: 'Conos de Luz', url: '/folder/favorites', icon: 'cono_luz', useIonicIcon: false },
    { title: 'Artefactos', url: '/folder/archived', icon: 'reliquia', useIonicIcon: false },
    { title: 'Materiales', url: '/folder/trash', icon: 'materiales', useIonicIcon: false },
    { title: 'Recursos', url: '/folder/spam', icon: 'recursos', useIonicIcon: false },
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
