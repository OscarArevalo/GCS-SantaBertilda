import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/home/items/nosotros/nosotros.component';
import { DirectorioSbComponent } from './components/home/items/directorio-sb/directorio-sb.component';
import { GinecologiaComponent } from './components/home/items/ginecologia/ginecologia.component';
import { PediatriaComponent } from './components/home/items/pediatria/pediatria.component';
import { FaqComponent } from './components/home/items/faq/faq.component';
import { ContactComponent } from './components/home/items/contact/contact.component';
import { InicioComponent } from './components/Login/inicio/inicio.component';
import { NavbarLogComponent } from './components/shared/navbar-log/navbar-log.component';
import { LoginComponent } from './components/shared/login/login.component';
import { AdmClienteComponent } from './components/Login/adm-cliente/adm-cliente.component';
import { AdminInicioComponent } from './components/Login/admin-inicio/admin-inicio.component';
import { AdmUsuarioComponent } from './components/Login/adm-usuario/adm-usuario.component';
import { AdmExamResComponent } from './components/Login/adm-exam-res/adm-exam-res.component';
import { AdmMedicosComponent } from './components/Login/adm-medicos/adm-medicos.component';
import { ServiciosSbComponent } from './components/home/items/servicios-sb/servicios-sb.component';
import { ServiciosEmpComponent } from './components/home/items/servicios-emp/servicios-emp.component';
import { AdmServiciosComponent } from './components/Login/adm-servicios/adm-servicios.component';
import { AdmContactoComponent } from './components/Login/adm-contacto/adm-contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NosotrosComponent,
    DirectorioSbComponent,
    GinecologiaComponent,
    PediatriaComponent,
    FaqComponent,
    ContactComponent,
    InicioComponent,
    NavbarLogComponent,
    LoginComponent,
    AdmClienteComponent,
    AdminInicioComponent,
    AdmUsuarioComponent,
    AdmExamResComponent,
    AdmMedicosComponent,
    ServiciosSbComponent,
    ServiciosEmpComponent,
    AdmServiciosComponent,
    AdmContactoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
