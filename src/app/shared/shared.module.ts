import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { CardComponent } from './components/card/card.component';
import { TabComponent } from './components/tab/tab.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ButtonDirective } from './directives/button/button.directive';
import { NamePipe } from './pipes/name/name.pipe';
import { LanguagePickerComponent } from './components/language-picker/language-picker.component';

@NgModule({
  declarations: [
    MenuComponent,
    CardComponent,
    TabComponent,
    NotFoundComponent,
    ButtonDirective,
    NamePipe,
    LanguagePickerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
