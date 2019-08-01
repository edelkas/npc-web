function create_buttons(){
	var i, colors;
	colors = objects["background"]
	for (i=0;i<colors.length;i++){
		var area = document.getElementById("i00");
		var input = document.createElement("input");
		var text = document.createTextNode(colors[i]["text"]);
		input.className = "jscolor";
		input.value = colors[i]["color"];
		area.appendChild(input);
		area.appendChild(text);
		area.appendChild(document.createElement("br"));
	}
}

function tab(item, type){
	var i, tabs, pages, obj;
	obj = document.getElementById(item);
	tabs = document.getElementsByClassName(type == "tab" ? "tab" : "item");
	pages = document.getElementsByClassName(type == "tab" ? "page" : "section");
	for (i=0;i<tabs.length;i++) {
		tabs[i].className = tabs[i].className.replace(" active", "");
		pages[i].style.display = "none";
	}
	obj.style.display = "block";
	obj.className += " active";
}
