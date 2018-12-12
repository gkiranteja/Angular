import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutChildTwoComponent } from './about-child-two.component';

describe('AboutChildTwoComponent', () => {
  let component: AboutChildTwoComponent;
  let fixture: ComponentFixture<AboutChildTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutChildTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
