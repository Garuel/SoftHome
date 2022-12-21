import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDashboardComponent } from './pagina-dashboard.component';

describe('PaginaDashboardComponent', () => {
  let component: PaginaDashboardComponent;
  let fixture: ComponentFixture<PaginaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
