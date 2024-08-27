import { AfterViewInit, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
  <button (click)="switchLanguage('pt')">PT</button>
  <button (click)="switchLanguage('en')">EN</button>
  <button (click)="switchLanguage('es')">ES</button>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(private readonly translate: TranslateService) { }

  ngAfterViewInit(): void {
    this.translate.addLangs(['en', 'pt', 'es']);
    this.translate.setDefaultLang('pt');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
