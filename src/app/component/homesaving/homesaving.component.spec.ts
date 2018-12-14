import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesavingComponent } from './homesaving.component';

describe('HomesavingComponent', () => {
  let component: HomesavingComponent;
  let fixture: ComponentFixture<HomesavingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomesavingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
