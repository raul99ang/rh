import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AZ_TR_MENUComponent} from './AZ_TR_MENU.component';
 
describe('AZ_TR_MENUComponent', () => {
  let component: AZ_TR_MENUComponent;
  let fixture: ComponentFixture<AZ_TR_MENUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AZ_TR_MENUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AZ_TR_MENUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});