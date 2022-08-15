import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServiceTabPage } from './service-tab.page';

describe('ServiceTabPage', () => {
  let component: ServiceTabPage;
  let fixture: ComponentFixture<ServiceTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
