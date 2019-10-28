function toggleElement (condition, element) {
	if (condition) {
		element.show();
	}
	else {
		element.hide();
	}
}

async function addItem (Model, data, successAction) {
	await Model.addItem(data);
	const newData = await Model.getDataFromServer();
	successAction(newData);
}

async function updateItem (Model, data, successAction) {
	await Model.updateItem(data);
	const newData = await Model.getDataFromServer();
	successAction(newData);
}

function combineUserNamesInArr(jsonObj) {
	let usersArr = jsonObj.json();

	usersArr = usersArr.map((el) => {
		el['full_name'] = `${el.user_name} ${el.user_surname}`;
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