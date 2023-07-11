import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AZ_TR_MENUDetailComponent} from './AZ_TR_MENU-detail.component';
 
describe('AZ_TR_MENUDetailComponent', () => {
  let component: AZ_TR_MENUDetailComponent;
  let fixture: ComponentFixture<AZ_TR_MENUDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AZ_TR_MENUDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AZ_TR_MENUDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});