import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  IComercioResponse,
  ComercioService,
} from '../../../services/comercio.service';

@Component({
  selector: 'app-comercio-detail',
  templateUrl: './comercio-detail.component.html',
  styleUrls: ['./comercio-detail.component.css'],
})
export class ComercioDetailComponent {
  latitud: string = '';
  longitud: string = '';
  nombre: string = '';
  nombrePropietario: string = '';
  telefono: string = '';
  categoria: string = '';
  descripcion: string = '';
  direccion: string = '';
  comercioId: string = '';
  errorMessage: string = '';

  constructor(
    public comercioService: ComercioService,
    public router: ActivatedRoute,
    public route: Router
  ) {}

  ngOnInit() {
    this.router.params.subscribe((p) => {
      this.comercioId = p.id;
    });
    this.getData(this.comercioId);
  }

  getData(comercioId: string) {
    this.comercioService.getComercio(comercioId).subscribe(
      (data: IComercioResponse) => {
        const {
          latitud,
          longitud,
          nombre,
          nombrePropietario,
          telefono,
          categoria,
          descripcion,
          direccion,
          _id,
        } = data;
        (this.latitud = latitud),
          (this.longitud = longitud),
          (this.nombre = nombre),
          (this.nombrePropietario = nombrePropietario),
          (this.telefono = telefono),
          (this.categoria = categoria),
          (this.descripcion = descripcion),
          (this.direccion = direccion),
          (this.comercioId = _id);
      },
      (error: any) => {
        this.errorMessage = error.error.mensaje;
      }
    );
  }
}
