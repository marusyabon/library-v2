import { MAILCHIMP_API_KEY, MAILCHIMP_LIST_ID } from './config';
import Mailchimp from 'mailchimp-api-v3';

const mailchimp = MAILCHIMP_API_KEY ? new Mailchimp(MAILCHIMP_API_KEY) : {};

function addSubscriber (email, data, update) {
	if (!email || !MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID) {
		const msg = `Ignoring adding subscriber, missing params ${!email ? 'email' : 'config'}`;
		console.warn(msg);
		return Promise.resolve({ msg });
	}

	return mailchimp.post(`lists/${MAILCHIMP_LIST_ID}`, {
		update_existing: update !== undefined ? update : true,
		members: [{
			email_address: email,
			status:'subscribed',
			merge_fields: {},
		}],
	}).then(m => {
		if (m.errors.length) {
			console.log('Error adding new subscriber to MC', m.errors);
		}
		return m;
	}).catch(err => {
		console.warn('Failed adding subscriber', email, err);
	});
}

export default {addSubscriber};