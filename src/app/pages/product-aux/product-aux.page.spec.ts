import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductAuxPage } from './product-aux.page';

describe('ProductAuxPage', () => {
  let component: ProductAuxPage;
  let fixture: ComponentFixture<ProductAuxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAuxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductAuxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
