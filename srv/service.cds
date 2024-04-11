using { BusinessPartner_0101 as my } from '../db/schema.cds';

@path : '/service/BusinessPartner_0101'
service BusinessPartner_0101
{
    @odata.draft.enabled
    entity Partner1 as
        projection on my.Partner;
}

annotate BusinessPartner_0101 with @requires :
[
    'authenticated-user'
];
