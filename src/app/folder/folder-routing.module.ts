import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'inicio',
    loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'personajes',
    loadChildren: () => import('../personajes/personajes.module').then( m => m.PersonajesPageModule)
  },
  {
    path: 'conos',
    loadChildren: () => import('../conos/conos.module').then( m => m.ConosPageModule)
  },
  {
    path: 'artefactos',
    loadChildren: () => import('../artefactos/artefactos.module').then( m => m.ArtefactosPageModule)
  },
  {
    path: 'materiales',
    loadChildren: () => import('../materiales/materiales.module').then( m => m.MaterialesPageModule)
  },
  {
    path: 'recursos',
    loadChildren: () => import('../recursos/recursos.module').then( m => m.RecursosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
