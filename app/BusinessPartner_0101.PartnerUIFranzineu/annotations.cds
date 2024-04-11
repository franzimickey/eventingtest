using BusinessPartner_0101 as service from '../../srv/service';

annotate service.Partner1 with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'BPID',
            Value : BPID,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Status',
            Value : Status,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Comment',
            Value : Comment,
        },
    ]
);
annotate service.Partner1 with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'BPID',
                Value : BPID,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Status',
                Value : Status,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Comment',
                Value : Comment,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
