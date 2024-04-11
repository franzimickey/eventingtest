sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'BusinessPartner0101.PartnerUIFranzineu',
            componentId: 'Partner1ObjectPage',
            contextPath: '/Partner1'
        },
        CustomPageDefinitions
    );
});