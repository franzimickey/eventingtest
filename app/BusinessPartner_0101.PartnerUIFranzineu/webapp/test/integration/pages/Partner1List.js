sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'BusinessPartner0101.PartnerUIFranzineu',
            componentId: 'Partner1List',
            contextPath: '/Partner1'
        },
        CustomPageDefinitions
    );
});