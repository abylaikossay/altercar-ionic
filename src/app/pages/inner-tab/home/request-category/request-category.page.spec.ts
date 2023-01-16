import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestCategoryPage } from './request-category.page';

describe('RequestCategoryPage', () => {
  let component: RequestCategoryPage;
  let fixture: ComponentFixture<RequestCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestCategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
