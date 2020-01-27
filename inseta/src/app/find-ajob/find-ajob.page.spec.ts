import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindAJobPage } from './find-ajob.page';

describe('FindAJobPage', () => {
  let component: FindAJobPage;
  let fixture: ComponentFixture<FindAJobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindAJobPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindAJobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
