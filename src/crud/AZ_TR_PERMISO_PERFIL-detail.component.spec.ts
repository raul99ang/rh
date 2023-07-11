import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AZ_TR_PERMISO_PERFILDetailComponent} from './AZ_TR_PERMISO_PERFIL-detail.component';
 
describe('AZ_TR_PERMISO_PERFILDetailComponent', () => {
  let component: AZ_TR_PERMISO_PERFILDetailComponent;
  let fixture: ComponentFixture<AZ_TR_PERMISO_PERFILDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AZ_TR_PERMISO_PERFILDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AZ_TR_PERMISO_PERFILDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});