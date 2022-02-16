import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPanelComponent } from './pages/main-panel/main-panel.component';

// Auth Service

// Routes Components
import { SingInComponent } from './pages/sing-in/sing-in.component';

const routes: Routes = [
  {
    path: '',
    component: SingInComponent
  },
  {
    path: 'main-panel',
    component: MainPanelComponent,
    // canActivate: [AuthGuardService]
  },

  // Default Route
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '*', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
