import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentitemComponent } from './documentitem.component';

describe('DocumentitemComponent', () => {
  let component: DocumentitemComponent;
  let fixture: ComponentFixture<DocumentitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
