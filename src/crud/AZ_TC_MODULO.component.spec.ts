import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AZ_TC_MODULOComponent} from './AZ_TC_MODULO.component';
 
describe('AZ_TC_MODULOComponent', () => {
  let component: AZ_TC_MODULOComponent;
  let fixture: ComponentFixture<AZ_TC_MODULOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AZ_TC_MODULOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AZ_TC_MODULOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});