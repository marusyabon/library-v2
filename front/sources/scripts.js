const toggleElement = (condition, element) => {
	if (condition) {
		element.show();
	}
	else {
		element.hide();
	}
};

function addItem (Model, data, successAction) {
	Model.addItem(data).then(() => {
		Model.getDataFromServer().then((data) => {
			successAction(data);
		});			
	});
}

function updateItem (Model, data, successAction) {
	Model.updateItem(data).then(() => {
		Model.getDataFromServer().then((data) => {
			successAction(data);
		});
	});
}

function convertDatesInArray(arr) {
	let date;

	arr = arr.map((el) => {
		date = el.yearOfPublication;
		el.yearOfPublication = date ? new Date(date) : '';
		return el;
	});

	return arr;		
}

webix.protoUI({
	name: 'activeList',
	defaults: {
		autoheight: true,
		borderless: true,
		type: {
			height: 30
		}
	}
}, webix.ui.list);

export {toggleElement, addItem, updateItem, convertDatesInArray};