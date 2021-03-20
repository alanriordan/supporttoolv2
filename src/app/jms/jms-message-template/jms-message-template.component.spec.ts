import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmsMessageTemplateComponent } from './jms-message-template.component';

describe('JmsMessageTemplateComponent', () => {
  let component: JmsMessageTemplateComponent;
  let fixture: ComponentFixture<JmsMessageTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JmsMessageTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JmsMessageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
