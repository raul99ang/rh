import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AZ_TC_PERFILDetailComponent} from './AZ_TC_PERFIL-detail.component';
 
describe('AZ_TC_PERFILDetailComponent', () => {
  let component: AZ_TC_PERFILDetailComponent;
  let fixture: ComponentFixture<AZ_TC_PERFILDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AZ_TC_PERFILDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AZ_TC_PERFILDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});