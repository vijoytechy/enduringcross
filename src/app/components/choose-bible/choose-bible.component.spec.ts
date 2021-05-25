import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChooseBibleComponent } from './choose-bible.component';

describe('ChooseBibleComponent', () => {
  let component: ChooseBibleComponent;
  let fixture: ComponentFixture<ChooseBibleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseBibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseBibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
