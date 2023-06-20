import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EmpresasComponent } from './empresas.component';

// Importe o método `compileComponents` da seguinte forma:
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

describe('EmpresasComponent', () => {
  let component: EmpresasComponent;
  let fixture: ComponentFixture<EmpresasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresasComponent],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true } // Adicione esta linha
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
