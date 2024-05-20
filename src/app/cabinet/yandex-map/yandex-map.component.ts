import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var ymaps: any;

@Component({
  selector: 'app-yandex-map',
  templateUrl: './yandex-map.component.html',
  styleUrls: ['./yandex-map.component.scss']
})
export class YandexMapComponent implements OnInit, AfterViewInit {
  constructor() { }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.loadMap();
  }

  private loadMap(): void {
    ymaps.ready().then(() => {
      const map = new ymaps.Map('map', {
        center: [58.0096, 56.2294], // Начальные координаты (Перми)
        zoom: 30
      });

      const points = [
        { coords: [58.0096, 56.2294], content: 'Пермь' }, // Координаты Перми
      ];

      const geoObjects = points.map(point => {
        return new ymaps.Placemark(point.coords, {
          balloonContent: point.content, // Подпись точки в баллуне
          iconCaption: point.content     // Подпись точки на карте
        });
      });

      // Добавляем все метки на карту
      geoObjects.forEach(placemark => map.geoObjects.add(placemark));

      // Определяем границы, которые включают все точки
      const bounds = map.geoObjects.getBounds();
      if (bounds) {
        map.setBounds(bounds, {
          checkZoomRange: true,
          zoomMargin: 20
        });
      }
    });
  }
}
