import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [

  // Rutas sin menú (login, registro)
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
  },

  // Rutas con layout principal (tienen menú)
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: 'catalogo',
        loadChildren: () => import('./catalogo/catalogo.module').then(m => m.CatalogoPageModule)
      },
      {
        path: 'ofertas',
        loadChildren: () => import('./ofertas/ofertas.module').then(m => m.OfertasPageModule)
      },
      {
        path: 'boxes',
        loadChildren: () => import('./boxes/boxes.module').then(m => m.BoxesPageModule)
      },
      {
        path: 'tiendas',
        loadChildren: () => import('./tiendas/tiendas.module').then(m => m.TiendasPageModule)
      },
      {
        path: 'box-detail',
        loadChildren: () => import('./box-detail/box-detail.module').then(m => m.BoxDetailPageModule)
      }
    ]
  },

  // Ruta por defecto (cualquier otra va a login)
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
