import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapService } from '../../services/map.service';
import {
  ComercioService,
  IComercioResponse,
} from '../../services/comercio.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  latitud = '';
  longitud = '';
  comercioId = '';
  constructor(
    private map: MapService,
    public comercioService: ComercioService,
    public router: ActivatedRoute
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
        const { latitud, longitud } = data;
        this.latitud = latitud;
        this.longitud = longitud;

        this.map.buildMap(this.latitud, this.longitud);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
