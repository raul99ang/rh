import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AZ_TC_PERFILComponent} from './AZ_TC_PERFIL.component';
 
describe('AZ_TC_PERFILComponent', () => {
  let component: AZ_TC_PERFILComponent;
  let fixture: ComponentFixture<AZ_TC_PERFILComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AZ_TC_PERFILComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AZ_TC_PERFILComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});