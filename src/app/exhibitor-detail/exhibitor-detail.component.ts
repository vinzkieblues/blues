import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Exhibitor }         from '../exhibitor';
import { ExhibitorService }  from '../exhibitor.service';

@Component({
  selector: 'app-exhibitor-detail',
  templateUrl: './exhibitor-detail.component.html',
  styleUrls: [ './exhibitor-detail.component.css' ]
})
export class ExhibitorDetailComponent implements OnInit {

  @Input() exhibitor: Exhibitor;
  x: Exhibitor[] = [];

  constructor(
    private route: ActivatedRoute,
    private exhibitorService: ExhibitorService,
    private location: Location
  ) {}

  ngOnInit(): void {
    // this.getExhibitorById(); 
    this.getExhibitorById();   
  }

  // getExhibitorById(): void {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   console.log(id);
  //   this.exhibitorService.getExhibitorById(id)
  //     .subscribe(exhibitor => this.exhibitor = exhibitor);
  // }

  getExhibitorById(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.exhibitorService.getExhibitorById(id)
      .subscribe(x => this.x = x);
  }

  goBack(): void {
    this.location.back();
  }

}