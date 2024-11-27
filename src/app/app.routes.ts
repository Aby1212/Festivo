import { Routes } from '@angular/router';
import { ValidarFestivoComponent } from './features/validar-festivo/validar-festivo.component';
import { ListarFestivosComponent } from './features/listar-festivos/listar-festivos.component';

export const routes: Routes = [

  { path: 'validar-festivo', component: ValidarFestivoComponent },
  { path: 'listar-festivos', component: ListarFestivosComponent },
  { path: '', redirectTo: 'validar-festivo', pathMatch: 'full' }

];
