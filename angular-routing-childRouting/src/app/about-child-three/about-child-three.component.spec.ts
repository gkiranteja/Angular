import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutChildThreeComponent } from './about-child-three.component';

describe('AboutChildThreeComponent', () => {
  let component: AboutChildThreeComponent;
  let fixture: ComponentFixture<AboutChildThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutChildThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutChildThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
