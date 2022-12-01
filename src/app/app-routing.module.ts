import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { TradingComponent } from './trading/trading.component';
import { GeneratorsComponent } from './generators/generators.component';
import { UtilityDashboardComponent } from './utility-dashboard/utility-dashboard.component';




// const routes: Routes = [];
const routes: Routes = [
  { path: 'utility-dashboard', component: UtilityDashboardComponent },
  { path: 'trading', component: TradingComponent },
  { path: 'generator', component: GeneratorsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
