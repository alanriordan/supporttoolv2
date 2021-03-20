import { TestBed } from '@angular/core/testing';

import { JmsTemplateService } from './jms-template.service';

describe('JmsTemplateService', () => {
  let service: JmsTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JmsTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
