import {JetView} from 'webix-jet';
import Authorization from '../../authorization';
import usersModel from '../../models/users';
import UserForm from './userForm';
import {combineUserNamesInArr} from '../../scripts';

export default class TopView extends JetView{
	config(){

		const header = {
			type:'header', 
			template: 'Users list'
		};

		const logout = {
			view:'button', 
			localId:'logoutBtn', 
			value:'Logout', 
			width: 100,
			type:'form'
		};

		const dtable = {
			view: 'datatable',
			id: 'usersList',
			columns: [
				{
					id: 'id',
					hidden: 1
				},
				{
					id: 'full_name',
					header: 'Name',
					fillspace: 1
				},
				{
					id: 'role_name',
					header: 'Role',
					width: 100
				},
				{
					id: 'phone_numbers',
					header: 'Phone number',
					width: 150
				},
				{
					id: 'email',
					header: 'Email',
					fillspace: 1
				},
				{
					id: 'edit', 
					header: 'Edit', 
					width: 50,
					template: '{common.editIcon()}'
				}
			],
			onClick: {
				'wxi-pencil': (e, id) => {
					this._userForm.showWindow(id);
				}
			}
		};

		const addUserBtn = {
			view: 'button',
			value: 'Add user',
			type: 'form',
			width: 100,
			click: () => {
				this.addUser();
			}
		};

		const ui = {
			rows:[
				{ 
					type: 'clean',
					cols: [header, logout] 
				},
				dtable,
				{
					cols: [
						{}, addUserBtn, {}
					]
				}											
			]
		};
		return ui;
	}

	init() {
		usersModel.getDataFromServer().then((dbData) => {
			const usersArr = combineUserNamesInArr(dbData);
			this.usersData = usersArr;
			$$('usersList').parse(usersArr);
		});		

		const authorization = new Authorization();

		this.$$('logoutBtn').attachEvent('onItemClick', () => {
			const app = this.app;
			const format = webix.Date.dateToStr('%Y-%m-%d');
			const currentDate = format(new Date());
			
			authorization.logout({currentDate}).then((response) => {
				if(response) {
					app.show('/login');
				}
			});
		});

		this._userForm = this.ui(UserForm);
	}

	addUser() {
		this._userForm.showWindow();
	}
}