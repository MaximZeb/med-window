import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { ProgressBarService } from './progress-bar/progress-bar.service';
import { BehaviorSubject } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let router: Router;
    let progressBarService: ProgressBarService;

    beforeEach(() => {
        // Создание моков для зависимостей
        const progressBarServiceMock = {
            stateProgreeBar: new BehaviorSubject<boolean>(false)
        };

        // Конфигурация TestBed с необходимыми зависимостями
        TestBed.configureTestingModule({
            declarations: [AppComponent], // Декларация компонента для тестирования
            imports: [RouterTestingModule], // Импорт модуля маршрутизации для тестов
            providers: [
                { provide: ProgressBarService, useValue: progressBarServiceMock } // Предоставление мока для ProgressBarService
            ]
        }).compileComponents(); // Компиляция компонентов

        // Получение экземпляров компонентов и зависимостей
        router = TestBed.inject(Router); // Получение экземпляра Router
        progressBarService = TestBed.inject(ProgressBarService); // Получение экземпляра ProgressBarService

        // Создание компонента
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    });

    it('Компонент успешно создается', () => {
        // Проверка, что компонент успешно создается
        expect(component).toBeTruthy();
    });

    it('navigate был вызван с аргументом', () => {
        // Шпионим за методом navigate у маршрутизатора
        spyOn(router, 'navigate');

        // Создаем компонент снова, чтобы проверить навигацию в конструкторе
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;

        // Проверяем, что navigate был вызван с аргументом 'login'
        expect(router.navigate).toHaveBeenCalledWith(['login']);
    });

    it('isTurnProgressBar правильно инициализируется из ProgressBarService', () => {
        // Проверка, что isTurnProgressBar правильно инициализируется из ProgressBarService
        expect(component.isTurnProgressBar).toBe(progressBarService.stateProgreeBar);
    });
});
