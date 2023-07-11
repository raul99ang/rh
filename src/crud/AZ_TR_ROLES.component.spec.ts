import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AZ_TR_ROLESComponent} from './AZ_TR_ROLES.component';
 
describe('AZ_TR_ROLESComponent', () => {
  let component: AZ_TR_ROLESComponent;
  let fixture: ComponentFixture<AZ_TR_ROLESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AZ_TR_ROLESComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AZ_TR_ROLESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});