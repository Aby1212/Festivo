import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFestivoComponent } from './listar-festivo.component';

describe('ListarFestivoComponent', () => {
  let component: ListarFestivoComponent;
  let fixture: ComponentFixture<ListarFestivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarFestivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarFestivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
