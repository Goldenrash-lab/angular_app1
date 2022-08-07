import { Component, OnInit } from '@angular/core';


interface City {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.scss']
})
export class SelectCityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  cities: City[] = [
    {value: '0', viewValue: 'Kyiv'},
    {value: '1', viewValue: 'Kharkov'},
    {value: '2', viewValue: 'Lviv'},
  ];

}
