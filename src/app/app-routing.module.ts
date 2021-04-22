import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from '../app/components/agenda/agenda.component';
import { ContactoComponent } from '../app/components/contacto/contacto.component';
const routes: Routes = [
  {
    path: '', component: AgendaComponent
  },
  {
    path: 'home', component: AgendaComponent
  },
  {
    path: 'contacto', component: ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
