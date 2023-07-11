import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AZ_TR_USUARIODetailComponent} from './AZ_TR_USUARIO-detail.component';
 
describe('AZ_TR_USUARIODetailComponent', () => {
  let component: AZ_TR_USUARIODetailComponent;
  let fixture: ComponentFixture<AZ_TR_USUARIODetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AZ_TR_USUARIODetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AZ_TR_USUARIODetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});