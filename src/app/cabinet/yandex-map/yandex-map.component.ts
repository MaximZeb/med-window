import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

declare var ymaps: any;

@Component({
  selector: 'app-yandex-map',
  templateUrl: './yandex-map.component.html',
  styleUrls: ['./yandex-map.component.scss']
})
export class YandexMapComponent implements OnInit, AfterViewInit {
  @Input() coordinats: { coords: number[]; content: string; }[] = [];

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
        zoom: 10 // Уменьшенное значение зума
      });

      console.log(this.coordinats)

      const points = this.coordinats.length === 0 ? [
        { coords: [58.0096, 56.2294], content: 'Пермь' }, // Координаты Перми
      ] : this.coordinats;

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
          map.setZoom(map.getZoom() - 2, { // Уменьшаем зум на единицу, если необходимо
            checkZoomRange: true
          });
        });
      }
    });
  }

}
