import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AZ_TR_ROLESDetailComponent} from './AZ_TR_ROLES-detail.component';
 
describe('AZ_TR_ROLESDetailComponent', () => {
  let component: AZ_TR_ROLESDetailComponent;
  let fixture: ComponentFixture<AZ_TR_ROLESDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AZ_TR_ROLESDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AZ_TR_ROLESDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});