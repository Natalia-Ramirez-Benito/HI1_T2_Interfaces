import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'recursos',
    loadChildren: () => import('./recursos/recursos.module').then( m => m.RecursosPageModule)
  },
  {
    path: 'materiales',
    loadChildren: () => import('./materiales/materiales.module').then( m => m.MaterialesPageModule)
  },
  {
    path: 'artefactos',
    loadChildren: () => import('./artefactos/artefactos.module').then( m => m.ArtefactosPageModule)
  },
  {
    path: 'conos',
    loadChildren: () => import('./conos/conos.module').then( m => m.ConosPageModule)
  },
  {
    path: 'personajes',
    loadChildren: () => import('./personajes/personajes.module').then( m => m.PersonajesPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
