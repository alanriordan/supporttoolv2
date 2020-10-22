import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ldap-info',
  templateUrl: './ldap-info.component.html',
  styleUrls: ['./ldap-info.component.css']
})
export class LdapInfoComponent implements OnInit {
  userId: string;

  constructor() { }

  ngOnInit(): void {
  }

  getLdapDetails(): void {

  }
}
