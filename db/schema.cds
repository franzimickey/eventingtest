namespace BusinessPartner_0101;

entity Partner
{
    key ID : UUID;
    BPID : LargeString;
    Status : Boolean default false;
    Comment : String(100);
}
