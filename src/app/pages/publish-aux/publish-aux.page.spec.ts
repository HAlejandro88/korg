import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublishAuxPage } from './publish-aux.page';

describe('PublishAuxPage', () => {
  let component: PublishAuxPage;
  let fixture: ComponentFixture<PublishAuxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishAuxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublishAuxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
