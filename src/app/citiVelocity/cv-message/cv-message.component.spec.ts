import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvMessageComponent } from './cv-message.component';

describe('CvMessageComponent', () => {
  let component: CvMessageComponent;
  let fixture: ComponentFixture<CvMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
