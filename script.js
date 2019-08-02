function create_buttons(){
	var objs = document.getElementsByClassName("item");
	for (var i=0;i<objects.length;i++){
		var id = objects[i].id;
		var id_redux = id.slice(1, id.length);
		if (id[0] != "o") { continue; }
		if (!(id_redux in objects)) { continue; }
		var colors = objects[id_redux];
		var section = document.getElementById("Objects_Items");
		var area = document.createElement("div");
		area.id = "i" + id_redux;
		area.className = "section";
		area.style.display = "none";
		for (var i=0;i<colors.length;i++){
			var input = document.createElement("input");
			var text = document.createTextNode(colors[i]["text"]);
			input.className = "jscolor";
			input.value = colors[i]["color"];
			area.appendChild(input);
			area.appendChild(text);
			area.appendChild(document.createElement("br"));
			section.appendChild(area);
		}
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
