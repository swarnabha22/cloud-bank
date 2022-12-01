import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreatePbComponent } from './create-pb/create-pb.component';
import { CreatePpaComponent } from './create-ppa/create-ppa.component';
import { PpaFormComponent } from './ppa-form/ppa-form.component';
import { PbFormComponent } from './pb-form/pb-form.component';
import { PpaTableComponent } from './ppa-table/ppa-table.component';
import { UtilityDashboardComponent } from './utility-dashboard/utility-dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GeneratorsComponent } from './generators/generators.component';
import { TradingComponent } from './trading/trading.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';

// import { PaginationModule } from 'ngx-bootstrap/pagination';
// import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreatePbComponent,
    CreatePpaComponent,
    PpaFormComponent,
    PbFormComponent,
    PpaTableComponent,
    UtilityDashboardComponent,
    WelcomeComponent,
    GeneratorsComponent,
    TradingComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // PaginationModule.forRoot(),
    // CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
