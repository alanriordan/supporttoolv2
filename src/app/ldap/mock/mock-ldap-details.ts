import {LdapDetails} from '../model/ldap-details';

export const ldapDetails: LdapDetails = {
    ldapGroups: ['CDSENT-WWSS1-MP', 'mks'],
    additionalDetails: new Map<string, string>([['safewordSerial', 'AB12345']])
};
