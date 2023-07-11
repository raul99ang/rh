import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AZ_TR_USUARIOComponent} from './AZ_TR_USUARIO.component';
 
describe('AZ_TR_USUARIOComponent', () => {
  let component: AZ_TR_USUARIOComponent;
  let fixture: ComponentFixture<AZ_TR_USUARIOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AZ_TR_USUARIOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AZ_TR_USUARIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});