import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AZ_TR_MODULO_ACCIONComponent} from './AZ_TR_MODULO_ACCION.component';
 
describe('AZ_TR_MODULO_ACCIONComponent', () => {
  let component: AZ_TR_MODULO_ACCIONComponent;
  let fixture: ComponentFixture<AZ_TR_MODULO_ACCIONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AZ_TR_MODULO_ACCIONComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AZ_TR_MODULO_ACCIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});