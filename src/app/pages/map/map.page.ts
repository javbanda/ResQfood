import { Component, OnInit } from '@angular/core';
import { Geolocation, PermissionStatus } from '@capacitor/geolocation';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone: false,
})
export class MapPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.menu.close("mainMenu");
  }

  async getLocationAndShowOnMap() {
    try {
      // verificar permisos 
      const premission: PermissionStatus = await Geolocation.checkPermissions();

      if (premission.location !== 'granted') {
        const requestPermissions = await Geolocation.requestPermissions();
        if (requestPermissions.location !== 'granted') {
          alert('Permiso de ubicación denegado');
          return;
        }
      }

      // obtener ubicación
      const position = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
      });

      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const mapFrame: HTMLIFrameElement | null = document.getElementById(
        'mapFrame'
      ) as HTMLIFrameElement;

      if (mapFrame) {
        mapFrame.src = `https://www.google.com/maps?q=${latitude},${longitude}&output=embed`;
      }

    } catch (error) {
      alert('Error al obtener la ubicación: ' + error);
    }
  }
}
