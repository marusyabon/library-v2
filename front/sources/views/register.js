import {JetView} from 'webix-jet';
import Authorization from '../authorization';

export default class RegisterPage extends JetView{
	config(){

		function passwordRule(value) {
			const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}/;
			if (re.test(value) ) {
				return true;
			}
			else {
				webix.message('Password mast contain at least 5 simbols, including UPPER/lowercase and number(s)');
				return false;
			}
		}

		function emailRule(value) {
			if(webix.rules.isEmail(value)){
				return true;
			}
			else {
				webix.message('Enter correct email');
				return false;
			}
		}

		const registerForm = {
			view: 'form',
			localId: 'registerForm',
			width: 300,
			elements: [
				{ view: 'text', label: 'Uername', name: 'username' },
				{ view: 'text', type: 'password', label: 'Password', name: 'password' },
				{
					margin: 5, cols: [
						{ 
							view: 'button', localId: 'registerBtn', value: 'Register', type: 'form'							 
						}
					]
				}
			],
			rules: {
				username: emailRule,
				password: passwordRule
			}
		};

		return { 
			cols: [
				{},
				{
					rows: [
						{},
						registerForm,
						{},
					]
				},
				{}
			]			
		};
	}

	init() {
		const form = this.$$('registerForm');

		this.$$('registerBtn').attachEvent('onItemClick', () => {
			const values = form.getValues();

			if(form.validate()) {
				const authorization = new Authorization();

				authorization.register(values).then((response) => {
					const status = response.json().status;
					const id = response.json().id;
					if (status === 2) {
						this.show(`reader.index?id=${id}/reader.main`);
					}
					else {
						if(response.json().reason === 'userExist') {
							this.show('/login');
						}
						webix.message(response.json().data);
					}
				});
			}
		});
	}
}