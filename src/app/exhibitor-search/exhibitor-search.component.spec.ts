import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitorSearchComponent } from './exhibitor-search.component';

describe('ExhibitorSearchComponent', () => {
  let component: ExhibitorSearchComponent;
  let fixture: ComponentFixture<ExhibitorSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitorSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
