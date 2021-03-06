import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PricesComponent } from './components/prices/prices.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {
    path:'protected',
    component:ProtectedComponent,
    canActivate : [AuthGuard]
  },
  {path:'prices', component:PricesComponent},
  {path:'**', pathMatch:'full',redirectTo:'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
