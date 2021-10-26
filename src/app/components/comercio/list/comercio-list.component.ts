import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  ComercioService,
  IComercioResponse,
} from '../../../services/comercio.service';

@Component({
  selector: 'app-comercio-list',
  templateUrl: './comercio-list.component.html',
  styleUrls: ['./comercio-list.component.css'],
})
export class ComercioListComponent {
  comercios: IComercioResponse[] = [];
  errorMessage: string = '';
  constructor(public comercioService: ComercioService, public router: Router) {}

  ngOnInit() {
    this.getComercios();
  }

  getComercios() {
    this.errorMessage = '';
    this.comercioService.getComercios().subscribe(
      (data: IComercioResponse[]) => {
        this.comercios = data;
      },
      (error: any) => {
        this.errorMessage = error.error.mensaje;
      }
    );
  }

  crearComercio() {
    this.router.navigateByUrl(`/comercios/crear`);
  }

  verComercio(comercioId: string) {
    this.router.navigateByUrl(`/comercios/${comercioId}`);
  }

  verMapa(comercioId: string) {
    this.router.navigateByUrl(`/comercios/${comercioId}/map`);
  }

  editarComercio(comercioId: string) {
    this.router.navigateByUrl(`/comercios/edit/${comercioId}`);
  }

  eliminarComercio(comercioId: string) {
    this.comercioService.eliminar(comercioId).subscribe(
      (data: any) => {
        location.reload();
      },
      (error: any) => {
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
