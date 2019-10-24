function toggleElement (condition, element) {
	if (condition) {
		element.show();
	}
	else {
		element.hide();
	}
}

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

function combineUserNamesInArr(jsonObj) {
	let usersArr = jsonObj.json();

	usersArr = usersArr.map((el) => {
		el['full_name'] = el.user_name + ' ' + el.user_surname;
		return el;
	});

	return usersArr;
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

export {toggleElement, addItem, updateItem, combineUserNamesInArr};