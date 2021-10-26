import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComercioService } from '../../../services/comercio.service';

@Component({
  selector: 'app-comercio',
  templateUrl: './comercio.component.html',
  styleUrls: ['./comercio.component.css'],
})
export class ComercioComponent {
  latitud: string = '';
  longitud: string = '';
  nombre: string = '';
  nombrePropietario: string = '';
  telefono: string = '';
  categoria: string = '';
  descripcion: string = '';
  direccion: string = '';
  errorMessage: string = '';
  constructor(public comercioService: ComercioService, public router: Router) {}

  crear() {
    this.errorMessage = '';
    const comercio = {
      latitud: this.latitud,
      longitud: this.longitud,
      nombre: this.nombre,
      nombrePropietario: this.nombrePropietario,
      telefono: this.telefono,
      categoria: this.categoria,
      descripcion: this.descripcion,
      direccion: this.direccion,
    };
    this.comercioService.registrar(comercio).subscribe(
      (data: any) => {
        this.router.navigateByUrl(`/comercios`);
      },
      (error: any) => {
        console.log(error);
        this.errorMessage = error.error.mensaje;
        if (error.status === 401) {
          this.router.navigateByUrl(`/error/unauthorized`);
        } else {
          this.router.navigateByUrl(`/error`);
        }
      }
    );
  }
}
