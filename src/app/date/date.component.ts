import { Component, OnInit } from '@angular/core';
import { PickerInteractionMode } from 'igniteui-angular';
@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  
    minDate = new Date();
    // maxDate = new Date();
    public mode: PickerInteractionMode = PickerInteractionMode.DropDown;
    public format = 'hh:mm tt';
    public date: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
