import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { MedicoComponent } from './pages/medico/medico.component';
import { ModalClienteComponent } from './modal/modal-cliente/modal-cliente.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [AppComponent, ClienteComponent, MedicoComponent, ModalClienteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,

    // Vex
    VexModule,
    CustomLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
