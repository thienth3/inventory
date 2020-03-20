import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageesComponent } from './managees.component';

describe('ManageesComponent', () => {
  let component: ManageesComponent;
  let fixture: ComponentFixture<ManageesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
