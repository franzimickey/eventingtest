sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'BusinessPartner0101/PartnerUIFranzineu/test/integration/FirstJourney',
		'BusinessPartner0101/PartnerUIFranzineu/test/integration/pages/Partner1List',
		'BusinessPartner0101/PartnerUIFranzineu/test/integration/pages/Partner1ObjectPage'
    ],
    function(JourneyRunner, opaJourney, Partner1List, Partner1ObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('BusinessPartner0101/PartnerUIFranzineu') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePartner1List: Partner1List,
					onThePartner1ObjectPage: Partner1ObjectPage
                }
            },
            opaJourney.run
        );
    }
);