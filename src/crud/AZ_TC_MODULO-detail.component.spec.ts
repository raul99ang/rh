import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AZ_TC_MODULODetailComponent} from './AZ_TC_MODULO-detail.component';
 
describe('AZ_TC_MODULODetailComponent', () => {
  let component: AZ_TC_MODULODetailComponent;
  let fixture: ComponentFixture<AZ_TC_MODULODetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AZ_TC_MODULODetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AZ_TC_MODULODetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});