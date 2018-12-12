import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutChildOneComponent } from './about-child-one.component';

describe('AboutChildOneComponent', () => {
  let component: AboutChildOneComponent;
  let fixture: ComponentFixture<AboutChildOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutChildOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
