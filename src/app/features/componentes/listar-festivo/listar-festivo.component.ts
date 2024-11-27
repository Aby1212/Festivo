import { Component, OnInit } from '@angular/core';
import { Festivo } from '../../core/dominio/festivo';
import { FestivoServicio } from '../../core/dominio/festivo.servicio';

@Component({
  selector: 'app-listar-festivo',
  standalone: true,
  imports: [],
  templateUrl: './listar-festivo.component.html',
  styleUrl: './listar-festivo.component.css'
})
export class ListarFestivoComponent implements OnInit {
  festivos: Festivo[] = [];
  anio: number | null = null;
  error: string | null = null;

  constructor(private festivoServicio: FestivoServicio) {}

  ngOnInit(): void {}

  listarFestivos() {
    if (this.anio) {
      this.festivoServicio.getFestivosPorAnio(this.anio).subscribe({
        next: (data) => {
          this.festivos = data;
          this.error = null;
        },
        error: (error) => {
          this.error = 'Error al obtener los festivos. Verifica el año ingresado.';
          this.festivos = [];
        }
      });
    } else {
      this.error = 'Por favor, ingresa un año válido.';
    }
  }
}
