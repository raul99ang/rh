import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AZ_TC_ACCIONComponent} from './AZ_TC_ACCION.component';
 
describe('AZ_TC_ACCIONComponent', () => {
  let component: AZ_TC_ACCIONComponent;
  let fixture: ComponentFixture<AZ_TC_ACCIONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AZ_TC_ACCIONComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AZ_TC_ACCIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});