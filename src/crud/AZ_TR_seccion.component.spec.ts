import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AZ_TR_seccionComponent} from './AZ_TR_seccion.component';
 
describe('AZ_TR_seccionComponent', () => {
  let component: AZ_TR_seccionComponent;
  let fixture: ComponentFixture<AZ_TR_seccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AZ_TR_seccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AZ_TR_seccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});