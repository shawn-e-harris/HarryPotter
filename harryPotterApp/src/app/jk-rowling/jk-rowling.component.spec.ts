import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JkRowlingComponent } from './jk-rowling.component';

describe('JkRowlingComponent', () => {
  let component: JkRowlingComponent;
  let fixture: ComponentFixture<JkRowlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JkRowlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JkRowlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
