import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AZ_TR_PERMISO_PERFILComponent} from './AZ_TR_PERMISO_PERFIL.component';
 
describe('AZ_TR_PERMISO_PERFILComponent', () => {
  let component: AZ_TR_PERMISO_PERFILComponent;
  let fixture: ComponentFixture<AZ_TR_PERMISO_PERFILComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AZ_TR_PERMISO_PERFILComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AZ_TR_PERMISO_PERFILComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});