import { Component, OnInit } from '@angular/core';

import { Exhibitor } from '../exhibitor';
import { Category } from '../category';
import { Country } from '../country';
import { ExhibitorService } from '../exhibitor.service';

import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-exhibitors',
  templateUrl: './exhibitors.component.html',
  styleUrls: ['./exhibitors.component.css'],
  animations:[
    trigger('show', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate(200, style({ opacity: 1 }))
        ]),
        transition(':leave', [
            style({ opacity: 1 }),
            animate(300, style({ opacity: 0 }))
        ])
    ])
  ]
})

export class ExhibitorsComponent implements OnInit {

  exhibitors: Exhibitor[];
  countries: Country[];
  categories: Category[];

  checkedCategories: string[] = [];
  
  filter: Exhibitor = new Exhibitor();

  constructor(private exhibitorService: ExhibitorService) { }

  ngOnInit() {
    this.getExhibitors();
    this.getCountries();
    this.getCategories();
  }

  getExhibitors(): void {
    this.exhibitorService.getExhibitors()
        .subscribe(exhibitors => this.exhibitors = exhibitors);
  }

  getExhibitorsByCategories(cat): void {
    let str: string; 
    if(this.checkedCategories.indexOf(cat) === -1){
      this.checkedCategories.push(cat);
    }
    else{
      this.checkedCategories.splice(cat);      
    }               
    str = encodeURIComponent(this.checkedCategories.join());
    console.log(str);
    this.exhibitorService.getExhibitorByCategories(str)
        .subscribe(exhibitors => this.exhibitors = exhibitors);
  }

  getCountries(): void {
    this.exhibitorService.getExhibitorCountries()
        .subscribe(countries => this.countries = countries);
  }

  getCategories(): void {
    this.exhibitorService.getExhibitorCategories()
        .subscribe(categories => this.categories = categories);
  }

  searchExhibitor(searchVal : string): void{
    if(searchVal===''){
      this.getExhibitors();
    }
    else{
      this.exhibitorService.searchExhibitors(searchVal)
        .subscribe(exhibitors => this.exhibitors = exhibitors);
    }    
  }

}
