import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/home/items/nosotros/nosotros.component';
import { DirectorioSbComponent } from './components/home/items/directorio-sb/directorio-sb.component';
import { GinecologiaComponent } from './components/home/items/ginecologia/ginecologia.component';
import { PediatriaComponent } from './components/home/items/pediatria/pediatria.component';
import { FaqComponent } from './components/home/items/faq/faq.component';
import { ContactComponent } from './components/home/items/contact/contact.component';
import { InicioComponent } from './components/Login/inicio/inicio.component';
import { AdmClienteComponent } from './components/Login/adm-cliente/adm-cliente.component';
import { AdminInicioComponent } from './components/Login/admin-inicio/admin-inicio.component';
import { AdmContactoComponent } from './components/Login/adm-contacto/adm-contacto.component';
import { AdmServiciosComponent } from './components/Login/adm-servicios/adm-servicios.component';
import { AdmUsuarioComponent } from './components/Login/adm-usuario/adm-usuario.component';
import { AdmExamResComponent } from './components/Login/adm-exam-res/adm-exam-res.component';
import { AdmMedicosComponent } from './components/Login/adm-medicos/adm-medicos.component';
import { ServiciosSbComponent } from './components/home/items/servicios-sb/servicios-sb.component';
import { ServiciosEmpComponent } from './components/home/items/servicios-emp/servicios-emp.component';
import { BodegaHomeComponent } from './components/Bodega/bodega-home/bodega-home.component';
import { BodegaIngresosComponent } from './components/Bodega/bodega-ingresos/bodega-ingresos.component';
import { BodegaEgresosComponent } from './components/Bodega/bodega-egresos/bodega-egresos.component';
import { BodegaProductosComponent } from './components/Bodega/bodega-productos/bodega-productos.component';
import { BodegaSedesComponent } from './components/Bodega/bodega-sedes/bodega-sedes.component';
import { BodegaReportesComponent } from './components/Bodega/bodega-reportes/bodega-reportes.component';
import { ResultadosDeExamenesComponent } from './components/home/items/resultados-de-examenes/resultados-de-examenes.component';



const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'directoriosb', component: DirectorioSbComponent },
  { path: 'ginecologia', component: GinecologiaComponent },
  { path: 'pediatria', component: PediatriaComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'admCliente', component: AdmClienteComponent },
  { path: 'adminInicio', component: AdminInicioComponent },
  { path: 'admUsuario', component: AdmUsuarioComponent },
  { path: 'admExamRes', component: AdmExamResComponent },
  { path: 'admMedicos', component: AdmMedicosComponent },
  { path: 'servicioSB', component: ServiciosSbComponent },
  { path: 'servicioEmp', component: ServiciosEmpComponent },
  { path: 'admServicios', component: AdmServiciosComponent },
  { path: 'admContactos', component: AdmContactoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
