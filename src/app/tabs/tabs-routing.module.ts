import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'ofertas',
        loadChildren: () => import('../ofertas/ofertas.module').then(m => m.OfertasPageModule)
      },
      {
        path: 'tiendas',
        loadChildren: () => import('../tiendas/tiendas.module').then(m => m.TiendasPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)

      },
      {
        path: 'catalogo',
        loadChildren: () => import('../catalogo/catalogo.module').then(m => m.CatalogoPageModule)

      },
      {
        path: 'boxes',
        loadChildren: () => import('../boxes/boxes.module').then(m => m.BoxesPageModule)
        
      },
      {
        path: 'box-detail',
        loadChildren: () => import('../box-detail/box-detail.module').then(m => m.BoxDetailPageModule)
        
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
