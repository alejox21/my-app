import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvilComponentComponent } from './evil-component.component';

describe('EvilComponentComponent', () => {
  let component: EvilComponentComponent;
  let fixture: ComponentFixture<EvilComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvilComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvilComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
