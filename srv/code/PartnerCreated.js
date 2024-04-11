/**
 * 
 * @On(event = { "sap.s4.beh.businesspartner.v1.BusinessPartner.Created.v1" })
 * @param {Object} message - Message object
*/
module.exports = async function(message) {
	await INSERT .into `BusinessPartner_0101.Partner1` .columns("BPID") .values(message.data.BusinessPartner);
}