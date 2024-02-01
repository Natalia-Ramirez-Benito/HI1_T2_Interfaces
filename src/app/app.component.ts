import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Inicio', url: '/folder/inicio', icon: 'home', useIonicIcon: true },
    { title: 'Personajes', url: '/folder/personajes', icon: 'personajes', useIonicIcon: false },
    { title: 'Conos de Luz', url: '/folder/conos', icon: 'cono_luz', useIonicIcon: false },
    { title: 'Artefactos', url: '/folder/artefactos', icon: 'reliquia', useIonicIcon: false },
    { title: 'Materiales', url: '/folder/materiales', icon: 'materiales', useIonicIcon: false },
    { title: 'Recursos', url: '/folder/recursos', icon: 'recursos', useIonicIcon: false },
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
