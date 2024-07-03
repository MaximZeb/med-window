import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from "./login-form/login-form.component"; // CLI imports router
import { RegistryComponent } from './registry/registry.component';

const routes: Routes = [
  {
    path: 'login', component: LoginFormComponent
  },
  {
    path: 'registry', component: RegistryComponent
  },
  {
    path: 'cabinet',
    loadChildren: () => import('./cabinet/cabinet/cabinet.module').then(m => m.CabinetModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
