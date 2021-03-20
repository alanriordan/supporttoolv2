import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdapInfoComponent } from './ldap-info.component';

describe('LdapInfoComponent', () => {
  let component: LdapInfoComponent;
  let fixture: ComponentFixture<LdapInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdapInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdapInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
