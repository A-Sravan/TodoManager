import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Subcomponent1Component } from './subcomponent1/subcomponent1.component';
import { ColorcomponentComponent } from './colorcomponent/colorcomponent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { EmployeemoduleComponent } from './dashboard/employeemodule/employeemodule.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
// import { EvenOddCheckPipe } from './even-odd-check.pipe';
@NgModule({
  declarations: [
    AppComponent,
    Subcomponent1Component,
    ColorcomponentComponent,
    DashboardComponent,
    EmployeemoduleComponent,
    LoginComponent,
    // EvenOddCheckPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
