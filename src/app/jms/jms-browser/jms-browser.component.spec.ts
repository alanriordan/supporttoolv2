import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmsBrowserComponent } from './jms-browser.component';

describe('JmsBrowserComponent', () => {
  let component: JmsBrowserComponent;
  let fixture: ComponentFixture<JmsBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JmsBrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JmsBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
