export const constant = {
    sidebarDemoLinks: [
        {
            label: 'Home',
            link: '/',
            icon: 'favorite',
            activeIcon: 'favorite_border',

        },
        {
            label: 'Item 1 (with Font awesome icon)',
            svgIcon: 'psychology',
            activeSvgIcon: 'activePsychology',
            items: [
                {
                    label: 'Alter Configurations',
                    faIcon: 'fa fa-address-book',
                    activeFaIcon: 'fa fa-id-card',
                    items: [
                        {
                            label: 'Default',
                            link: '/demo-one',
                            icon: 'favorite',
                            activeIcon: 'favorite_border',
                            disabled: true,

                        },
                        {
                            label: 'Changing Colours',
                            link: '/demo two',
                            icon: 'favorite_border',
                            activeIcon: 'favorite',
                            navigationExtras: {
                                queryParams: { order: 'popular', filter: 'new' },
                            }
                        },
                        {
                            label: 'Changing Padding',
                            link: '/demo/12',
                            icon: 'favorite_border',
                            activeIcon: 'favorite'
                        },
                        {
                            label: 'Changing Background',
                            link: '/demo',
                            imageIcon: '/assets/batman.jpg',
                            activeImageIcon: '/assets/blackpanther.jpg',
                        }
                    ]
                },
                {
                    label: 'Alter Items Array',
                    icon: 'alarm',
                    items: [
                        {
                            label: 'Default',
                            icon: 'favorite'
                        },
                        {
                            label: 'Remote Json',
                            icon: 'favorite_border',
                            disabled: true,
                        },
                        {
                            label: 'Dynamic arrays',
                            icon: 'favorite_border'
                        }
                    ]
                }
            ]
        },
        {
            label: 'NPM',
            icon: 'info_outline',
            link: 'https://www.npmjs.com/package/ng-material-multilevel-menu',
            externalRedirect: true,
            hrefTargetType: '_blank'
        }
    ],
    sidebarConfigurations: {
        paddingAtStart: true,
        interfaceWithRoute: true,
        rtlLayout: false,
    }
};
