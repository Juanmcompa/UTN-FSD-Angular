import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms'; //Incluir
import { RegistroComponent } from './pages/registro/registro.component';  //Incluir
import { HttpClientModule  } from '@angular/common/http';//Incluir
import { MenuComponent } from './component/menu/menu.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { FooterComponent } from './component/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component'; 
import { ListadosModule } from './listados/listados.module';
import { ProductoComponent } from './component/producto/producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Materialize
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    DetalleComponent,
    FooterComponent,
    NotFoundComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule, // incluir
    HttpClientModule, //Incluir
    ListadosModule, BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatDividerModule,
    MatGridListModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
