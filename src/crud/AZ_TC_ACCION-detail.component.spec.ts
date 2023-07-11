import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AZ_TC_ACCIONDetailComponent} from './AZ_TC_ACCION-detail.component';
 
describe('AZ_TC_ACCIONDetailComponent', () => {
  let component: AZ_TC_ACCIONDetailComponent;
  let fixture: ComponentFixture<AZ_TC_ACCIONDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AZ_TC_ACCIONDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AZ_TC_ACCIONDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});