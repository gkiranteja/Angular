import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetprojectsComponent } from './getprojects.component';

describe('GetprojectsComponent', () => {
  let component: GetprojectsComponent;
  let fixture: ComponentFixture<GetprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
