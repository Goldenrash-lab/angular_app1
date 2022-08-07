import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MainComponentComponent } from './main-component/main-component.component';
import { NameBannerComponent } from './name-banner/name-banner.component';
import { DateComponent } from './date/date.component';
import { TimeComponent } from './time/time.component';
import { DaysComponent } from './days/days.component';
import { SelectCityComponent } from './select-city/select-city.component'
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
// import {ui.timepicker} from '@angular/material/radio';


import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';
import {
  IgxTimePickerModule,
  IgxInputGroupModule,
  IgxIconModule
} from 'igniteui-angular';
import { HammerModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/button.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    NameBannerComponent,
    DateComponent,
    TimeComponent,
    DaysComponent,
    SelectCityComponent,
    ButtonComponent,
    RadiobuttonComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatInputModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    HammerModule,
    IgxTimePickerModule,
    IgxInputGroupModule,
    IgxIconModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    NgxMatTimepickerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
