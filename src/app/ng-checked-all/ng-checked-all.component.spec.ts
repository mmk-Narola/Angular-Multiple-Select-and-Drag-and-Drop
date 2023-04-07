import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCheckedAllComponent } from './ng-checked-all.component';

describe('NgCheckedAllComponent', () => {
  let component: NgCheckedAllComponent;
  let fixture: ComponentFixture<NgCheckedAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCheckedAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgCheckedAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
