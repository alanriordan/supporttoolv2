import {NavItem} from './nav-item';

export const navItems: NavItem[] = [
    {
        displayName: 'Jms',
        iconName: 'close',
        children: [
            {
                displayName: 'Listeners',
                iconName: 'network_check',
                route: 'jms-listener'
            },
            {
                displayName: 'Send Message',
                iconName: 'send',
                route: 'jms-sender'
            },
            {
                displayName: 'Browse Message',
                iconName: 'message',
                route : 'jms-browser'
            },
            {
                displayName: 'Test',
                iconName: 'message',
                route : 'test'
            }
        ]
    },
    {
        displayName: 'User',
        iconName: 'close',
        children: [
            {
                displayName: 'User Details',
                iconName: 'group',
                route: 'user-details'
            }
        ]
    },
    {
        displayName: 'Ldap',
        iconName: 'close',
        children: [
            {
                displayName: 'Ldap Details',
                iconName: 'security',
                route: 'ldap-info'
            }
        ]
    },
    {
        displayName: 'Vasco',
        iconName: 'close',
        children: [
            {
                displayName: 'Vasco Details',
                iconName: 'security',
                route: 'vasco-info'
            }
        ]
    },
    {
        displayName: 'CV',
        iconName: 'close',
        children: [
            {
                displayName: 'CV messages',
                iconName: 'message',
                route: 'cv-message'
            },
            {
                displayName: 'Client Insight messages',
                iconName: 'message',
                route: 'ldap-info'
            }
        ]
    },
    {
        displayName: 'Email',
        iconName: 'close',
        children: [
            {
                displayName: 'Email Config',
                iconName: 'email',
                route: 'email-config'
            },
            {
                displayName: 'Send Email',
                iconName: 'send',
                route: 'email-sender'
            }
        ]
    }
];
