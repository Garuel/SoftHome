import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRegistroComponentComponent } from './pagina-registro.component.component';

describe('PaginaRegistroComponentComponent', () => {
  let component: PaginaRegistroComponentComponent;
  let fixture: ComponentFixture<PaginaRegistroComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaRegistroComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaRegistroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
