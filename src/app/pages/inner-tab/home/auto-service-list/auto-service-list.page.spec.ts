import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutoServiceListPage } from './auto-service-list.page';

describe('AutoServiceListPage', () => {
  let component: AutoServiceListPage;
  let fixture: ComponentFixture<AutoServiceListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoServiceListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutoServiceListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
