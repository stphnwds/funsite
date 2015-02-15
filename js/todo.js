//Each item should look like this 
//
//<li><input type="checkbox"><span>Write this tutorial</span></li>

/*lessons learned
--avoid gloabl variables
--strive to make functions reusable
*/
function updateItemStatus() {
	var cbID = this.id.replace("cb_","");
	var itemText = document.getElementById("item_" + cbID);

	if (this.checked == true) {
		itemText.className = "checked";
	}else {
		itemText.className = "";
	}
}

function renameItem() {
	//this == span

}

function removeItem() {
	//this == span
	var spanId = this.id.replace("item_","");
	document.getElementById("li_" + spanId).style.display = "none";
}

function addNewItem(list, itemText) {
	
	var date = new Date();
	var id = date.getTime();

	var listItem = document.createElement("li");
	listItem.id = "li_" + id;

	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.id = "cb_" + id;
	checkbox.onclick = updateItemStatus;

	var span = document.createElement("span");
	span.id = "item_" + id;
	span.innerText = itemText;
	span.onclick = renameItem;
	span.ondblclick = removeItem;
	
	listItem.appendChild(checkbox);
	listItem.appendChild(span);
	
	list.insertBefore(listItem, list.firstChild);


}


var btnNew = document.getElementById("btnAdd");
//uses the button to add a new item to the todo list
btnNew.onclick = function(){
	

	var itemText = inItemText.value;
	if (!itemText || itemText=="") {
		return false;
	}
	addNewItem(document.getElementById("todoList"), itemText);


	inItemText.focus();
	inItemText.select();
};

var inItemText = document.getElementById("inItemText");	
inItemText.focus();
//uses the enter key to add a new item to the todo list
inItemText.onkeyup = function(event) {
	if (event.which == 13) {
		var itemText = inItemText.value;
		if (itemText=="" || itemText==" ") {
			return false;
		}
		addNewItem(document.getElementById("todoList"), itemText);

		inItemText.focus();
		inItemText.select();
	}
}