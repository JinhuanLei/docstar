import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinferComponent } from './userinfer.component';

describe('UserinferComponent', () => {
  let component: UserinferComponent;
  let fixture: ComponentFixture<UserinferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserinferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
