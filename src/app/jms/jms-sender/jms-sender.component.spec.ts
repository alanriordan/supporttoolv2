import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmsSenderComponent } from './jms-sender.component';

describe('JmsSenderComponent', () => {
  let component: JmsSenderComponent;
  let fixture: ComponentFixture<JmsSenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JmsSenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JmsSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
