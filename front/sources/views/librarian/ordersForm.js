import { JetView } from 'webix-jet';
import ordersModel from '../../models/orders';

export default class OrdersForm extends JetView {
	config() {
		return {
			view: 'window',
			localId: 'userOrdersWindow',
			width: 600,
			head: 'Ordered books',
			position: 'center',
			move: true,
			body: {
				view: 'form',	
				padding: 0,			
				elements: [
					{
						view: 'template',
						localId: 'userName',
						css: 'page_header center',
						height: 45,
						borderless: true
					},
					{
						view: 'multicombo',
						localId: 'ordersList',
						name: 'ordersList',
						suggest: []
					},
					{
						margin: 20,
						paddingY: 10,
						cols: [
							{},
							{
								view: 'button',
								type: 'form',
								label: 'Save',
								width: 80,
								click: () => {
									this.saveForm();
								}
							},
							{
								view: 'button',
								type: 'form',
								label: 'Cancel',
								width: 80,
								click: () => {
									this.$$('userOrdersWindow').hide();
								}
							},
							{}
						]
					}
				]	
			}
		};
	}

	showPopup(id, userName) {
		this.userId = id.row;
		this.popup = this.$$('userOrdersWindow');
		this.ordersList = this.$$('ordersList');
		this.$$('userName').setHTML(userName);

		ordersModel.getItems(this.userId).then((results) => {
			const orders = results.json();
			this.incomingOrders = [...orders];

			orders.forEach((el) => {
				el.value = `${el.book.bookTitle} - ${el.book.authorName}`;
			});

			this.ordersList.define('suggest', orders);
			this.ordersList.setValue(orders);
			this.ordersList.refresh();
		});
		this.getRoot().show();
	}

	saveForm() {
		const values = this.ordersList.getValue();
		const outcomingOrders = values.split(',');

		if (this.incomingOrders.length !== outcomingOrders.length) {
			const ordersToRemove = [];

			this.incomingOrders.forEach((el) => {
				if(outcomingOrders.indexOf(el.id) === -1) {
					ordersToRemove.push(el.id);
				}
			});

			ordersModel.removeUserOrders(ordersToRemove, this.userId);
		}
		
		this.$$('userOrdersWindow').hide();
	}
}