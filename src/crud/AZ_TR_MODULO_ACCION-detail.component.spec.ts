import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AZ_TR_MODULO_ACCIONDetailComponent} from './AZ_TR_MODULO_ACCION-detail.component';
 
describe('AZ_TR_MODULO_ACCIONDetailComponent', () => {
  let component: AZ_TR_MODULO_ACCIONDetailComponent;
  let fixture: ComponentFixture<AZ_TR_MODULO_ACCIONDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AZ_TR_MODULO_ACCIONDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AZ_TR_MODULO_ACCIONDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});