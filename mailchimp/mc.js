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
		'update_existing': update !== undefined ? update : true,
		members: [{
			'email_address': email.toLowerCase(),
			status: 'subscribed',
			'merge_fields': {},
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

function unsubscribe(email, data, update) {
	return mailchimp.post(`lists/${MAILCHIMP_LIST_ID}`, {
		'update_existing': update !== undefined ? update : true,
		members: [{
			'email_address': email.toLowerCase(),
			status: 'unsubscribed',
			'merge_fields': {},
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

function checkSubscriber(email, isSubscribed) {
	return mailchimp.get(`lists/${MAILCHIMP_LIST_ID}/members?members.email_address=${email}&fields=members.email_address,members.status`
	).then(res => {
		const member = res.members.find((item) => {
			return item.email_address == email;
		});

		const subscribed = Number.parseInt(isSubscribed) ? 'subscribed' : 'unsubscribed';

		if(member.status !== subscribed) {
			if(Number.parseInt(isSubscribed)) {

				addSubscriber(email);
			}
			else {
				unsubscribe(email);
			}
		}
	}).catch(err => {
		console.warn('Failed adding subscriber', email, err);
	});
}

export default {addSubscriber, checkSubscriber};