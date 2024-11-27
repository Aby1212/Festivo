import { Component } from '@angular/core';
import { FestivoServicio } from './core/dominio/festivo.service';

@Component({
  selector: 'app-validar-festivo',
  standalone: true,
  imports: [],
  templateUrl: './validar-festivo.component.html',
  styleUrl: './validar-festivo.component.css'
})
export class ValidarFestivoComponent {

  fecha: string = '';
  esFestivo: boolean | null = null;
  error: string | null = null;

  constructor(private festivoServicio: FestivoServicio) {}

  validarFestivo() {
    if (this.fecha) {
      this.festivoServicio.validarFestivo(this.fecha).subscribe({
        next: (resultado) => {
          this.esFestivo = resultado;
          this.error = null;
        },
        error: () => {
          this.error = 'Error al validar la fecha. Por favor, verifica el formato.';
          this.esFestivo = null;
        }
      });
    } else {
      this.error = 'Por favor, ingresa una fecha válida.';
    }
  }


}
