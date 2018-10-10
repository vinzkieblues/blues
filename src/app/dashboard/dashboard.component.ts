import { Component, OnInit } from '@angular/core';

import { Exhibitor } from '../exhibitor';
import { ExhibitorService } from '../exhibitor.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  exhibitors: Exhibitor[] = [];
  x: Exhibitor[] = [];
 
  constructor(private exhibitorService: ExhibitorService) { }
 
  ngOnInit() {
    
  }
  
  
}