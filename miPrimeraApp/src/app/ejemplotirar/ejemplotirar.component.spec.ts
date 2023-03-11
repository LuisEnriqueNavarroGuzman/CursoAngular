import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplotirarComponent } from './ejemplotirar.component';

describe('EjemplotirarComponent', () => {
  let component: EjemplotirarComponent;
  let fixture: ComponentFixture<EjemplotirarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemplotirarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemplotirarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
