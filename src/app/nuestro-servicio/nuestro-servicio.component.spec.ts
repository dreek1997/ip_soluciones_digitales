import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestroServicioComponent } from './nuestro-servicio.component';

describe('NuestroServicioComponent', () => {
  let component: NuestroServicioComponent;
  let fixture: ComponentFixture<NuestroServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestroServicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestroServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
