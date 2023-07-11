import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AZ_TR_seccionDetailComponent} from './AZ_TR_seccion-detail.component';
 
describe('AZ_TR_seccionDetailComponent', () => {
  let component: AZ_TR_seccionDetailComponent;
  let fixture: ComponentFixture<AZ_TR_seccionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AZ_TR_seccionDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AZ_TR_seccionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});