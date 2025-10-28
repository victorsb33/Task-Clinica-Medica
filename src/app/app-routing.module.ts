import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { MedicoComponent } from './pages/medico/medico.component';
import { ModalClienteComponent } from './modal/modal-cliente/modal-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: CustomLayoutComponent,
    children: [
      { path: 'cliente', component: ClienteComponent},
      { path: 'medico', component: MedicoComponent}
    ]
  },
     { path: 'modal', component: ModalClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
