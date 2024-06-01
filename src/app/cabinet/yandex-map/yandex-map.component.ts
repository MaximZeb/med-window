import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

declare var ymaps: any;

@Component({
  selector: 'app-yandex-map',
  templateUrl: './yandex-map.component.html',
  styleUrls: ['./yandex-map.component.scss']
})
export class YandexMapComponent implements OnInit, AfterViewInit {
  @Input() coordinate: number[] = [];
  constructor() { }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.loadMap();
  }

  private loadMap(): void {
    console.log(this.coordinate)
    ymaps.ready().then(() => {
      const map = new ymaps.Map('map', {
        center: this.coordinate.length === 0 ? [58.0096, 56.2294] : this.coordinate, // Начальные координаты (Перми)
        zoom: 10 // Уменьшенное значение зума
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

      // Устанавливаем границы и зум вручную после добавления меток
      const bounds = map.geoObjects.getBounds();
      if (bounds) {
        map.setBounds(bounds, {
          checkZoomRange: true,
          zoomMargin: 20
        }).then(() => {
          // Дополнительно вручную задаем зум, если нужно
          map.setZoom(map.getZoom() - 7, { // Уменьшаем зум на единицу, если необходимо
            checkZoomRange: true
          });
        });
      }
    });
  }

}
