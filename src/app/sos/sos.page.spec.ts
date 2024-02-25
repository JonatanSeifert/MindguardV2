import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SosPage } from './sos.page';
import { IonicModule } from '@ionic/angular';

describe('SosPage', () => {
  let component: SosPage;
  let fixture: ComponentFixture<SosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SosPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
