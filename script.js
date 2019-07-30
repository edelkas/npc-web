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
