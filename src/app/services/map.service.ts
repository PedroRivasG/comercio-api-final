import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  mapbox = mapboxgl as typeof mapboxgl;
  map: any;
  style = `mapbox://styles/mapbox/streets-v11`;
  // Coordenadas de la localización donde queremos centrar el mapa
  lat = 43.1746;
  lng = -2.4125;
  zoom = 15;
  constructor() {
    // Asignamos el token desde las variables de entorno
    this.mapbox.accessToken =
      'pk.eyJ1IjoiZmdpbmFydCIsImEiOiJja3VwNGJvZ3Eyem54Mm5waGp2M3RpcXgxIn0.ltHPu4I8pDyfIyRb1QGkWA';
  }

  buildMap(latitud: string, longitud: string) {
    this.lat = Number(latitud);
    this.lng = Number(longitud);
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lat, this.lng],
    });
    const market1 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
      .setLngLat([this.lat, this.lng])
      .addTo(this.map);

    this.map.addControl(new mapboxgl.NavigationControl());
  }
}

/*
 <script>
      mapboxgl.accessToken =
        "pk.eyJ1IjoiZmdpbmFydCIsImEiOiJja3VwNGplcGwwbzhqMnNwZmd2aWRvcG4yIn0.Bf5X23qizL8KOxOl5oiMuw";
      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: [-32.92135829742873, -68.78449667328229], // starting position [lng, lat]
        zoom: 9, // starting zoom
      });
    </script> */
