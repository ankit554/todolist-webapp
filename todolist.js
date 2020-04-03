var form=document.getElementById("addForm");
var list=document.getElementById("items");
var filter=document.getElementById("filter");

//form submit event
form.addEventListener('submit',addItem);
//delete event
list.addEventListener('click',removeItem);
//filter event
filter.addEventListener('keyup',filterItem);

//Add item
function addItem(e){
	e.preventDefault();

	//get input value
	var userInput=document.getElementById("userText").value;
	
	//validating from empty input
	if(userInput!=""){
		//create new li item
		var li=document.createElement('li');
		
		//add class if any

		//add text Node with input value
		li.appendChild(document.createTextNode(userInput));

		//create delete button
		var delBtn=document.createElement('button');

		//add class or id to button if any
		delBtn.className="delBtn"

		//add text node to button
		delBtn.appendChild(document.createTextNode('X'));

		//append or add button to li
		li.appendChild(delBtn);

		//append li to list or say ul
		list.appendChild(li);
	}else{
		alert('Please Type Something');
	}
	document.getElementById("userText").value="";
}

//remove item from list
function removeItem(e){
	e.preventDefault();
	if(e.target.classList.contains('delBtn')){
		if(confirm('Are you sure ?')){
			var li=e.target.parentElement;
			list.removeChild(li);
		}
	}
}

//filter items
function filterItem(e){
	var text=e.target.value.toLowerCase();
	//get li's
	var listItems=list.getElementsByTagName('li');
	Array.from(listItems).forEach(function(item){
		var itemName=item.firstChild.textContent;
		if(itemName.toLowerCase().indexOf(text)!=-1){
			item.style.display='block';
		}else{
			item.style.display='none';
		}
	});
}






