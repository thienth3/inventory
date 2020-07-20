import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkGoogleComponent } from './link-google.component';

describe('LinkGoogleComponent', () => {
  let component: LinkGoogleComponent;
  let fixture: ComponentFixture<LinkGoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkGoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
