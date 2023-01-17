import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestInfoPage } from './request-info.page';

describe('RequestInfoPage', () => {
  let component: RequestInfoPage;
  let fixture: ComponentFixture<RequestInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
