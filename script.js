function tab(evt, item){
	var i, tabs, pages, obj;
	obj = document.getElementById(item);
	pages = document.getElementsByClassName("page");
	tabs = document.getElementsByClassName("tab");
	for (i=0;i<tabs.length;i++) {
		pages[i].style.display = "none";
		tabs[i].className = tabs[i].className.replace(" active", "");
	}
	obj.style.display = "block";
	obj.className += " active";
}
