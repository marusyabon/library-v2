import { JetView } from 'webix-jet';
import usersModel from '../../models/users';
import {toggleElement, addItem, updateItem, combineUserNamesInArr} from '../../scripts'; 

export default class UserForm extends JetView {
	config() {
		return {
			view: 'window',
			localId: 'userWindow',
			head: 'Edit user',
			width: 600,
			position: 'center',
			body: {
				rows: [
					{
						view: 'form',
						localId: 'userForm',
						elements: [
							{ view: 'text', name: 'id', localId: 'id', hidden: true },
							{ view: 'text', label: 'First name', name: 'user_name', labelWidth: 90, labelAlign: 'right' },
							{ view: 'text', label: 'Last name', name: 'user_surname', labelWidth: 90, labelAlign: 'right' },
							{ view: 'combo', label: 'Role', name: 'role_id', labelWidth: 90, labelAlign: 'right', options: [
								{id: 1, value: 'reader'},
								{id: 2, value: 'labrarian'},
								{id: 3, value: 'admin'}
							] },
							{ view: 'text', label: 'Passport ID', name: 'passport_ID', labelWidth: 90, labelAlign: 'right' },
							{ view: 'datepicker', label: 'Birth date', name: 'birth_date', localId: 'birth_date', labelWidth: 90, labelAlign: 'right' },
							{ view: 'text', label: 'Address', name: 'address', labelWidth: 90, labelAlign: 'right' },
							{ view: 'text', label: 'Phone', name: 'phone_numbers', labelWidth: 90, labelAlign: 'right' },
							{ view: 'text', label: 'Email', name: 'email', labelWidth: 90, labelAlign: 'right' },
							{ view: 'text', label: 'Password', name: 'account_password', localId: 'initial_password', labelWidth: 90, labelAlign: 'right' },
						],
						rules: {
							'role_id': webix.rules.isNotEmpty,
							'email': webix.rules.isNotEmpty,
							'account_password': webix.rules.isNotEmpty,
						}
					},					
					{
						margin: 20,
						paddingY: 10,
						cols: [
							{},
							{
								view: 'button', value: 'Save', type: 'form', localId: 'saveBtn', width: 100,
								click: () => {
									this.saveForm();
								}
							},
							{
								view: 'button', value: 'Cancel', width: 100,
								click: () => {
									this.hideWindow();
								}
							},
							{}
						]
					}
				]
			}
		};
	}

	init() {
		this.form = this.$$('userForm');
		this.window = this.$$('userWindow');
	}

	successAction(newData) {
		this.webix.message('Success');
		const usersArr = combineUserNamesInArr(newData);
		$$('usersList').parse(usersArr);
		this.hideWindow();
	}

	showWindow(id) {
		this.isNew = id ? false : true;	

		if(this.isNew) {
			this.window.getHead().setHTML('Add user');
			this.window.getHead().refresh();
		}
		else {
			usersModel.getItem(id).then((dbData) => {
				let user = dbData.json();
				user = this.convertUserBithDate(user);
				this.form.setValues(user);
			});
		}

		const initialPassword = this.$$('initial_password');
		toggleElement(this.isNew, initialPassword);
		

		this.getRoot().show();
	}

	convertUserBithDate(data) {
		const format = webix.Date.dateToStr('%Y-%m-%d');
		data['birth_date'] = format(new Date(data.birth_date));

		return data;
	}

	saveForm() {
		const data = this.form.getValues();	
		
		if(this.form.validate()) {
			if(this.isNew) {
				addItem(usersModel, data, this.successAction.bind(this));	
			}
			else {
				updateItem(usersModel, data, this.successAction.bind(this));
			}
		}		
	}

	hideWindow() {
		this.form.clearValidation();
		this.form.clear();
		this.getRoot().hide();
	}
}