import { Component, OnInit } from '@angular/core';
import {LdapService} from '../service/ldap.service';
import {LdapDetails} from '../model/ldap-details';
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-ldap-info',
  templateUrl: './ldap-info.component.html',
  styleUrls: ['./ldap-info.component.css']
})
export class LdapInfoComponent implements OnInit {
  userId: string;
  ldapDetails: LdapDetails;
  selectedGroup: string;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredLdapGroup: Observable<string[]>;
  ldapGroups = ['CDSENT-WWSS1-MP', 'FHLB-MP', 'FHLB-NY-MP'];

  constructor(private ldapService: LdapService) { }

  ngOnInit(): void {
    this.filteredLdapGroup = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.ldapGroups.filter(ldapGroup => ldapGroup.toLowerCase().indexOf(filterValue) === 0);
  }

  getLdapDetails(): void {
      this.ldapService.getLdapDetails(this.userId).subscribe(data => {
        this.ldapDetails = data;
      });
  }

  addLdapGroup(ldapGroup: string): void {
    console.log('.... Adding ldap group' + ldapGroup);
  }

    removeLdapGroup(ldapGroup: string): void {
      console.log('.... Adding ldap group' + ldapGroup);
    }

  resetPassword(userId: string, password: string): void {
      console.log('... Resetting password for : ' + userId + ' with password ' + password);
  }
}
