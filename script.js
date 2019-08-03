function create_buttons(){
	var section = document.getElementById("Objects_Items");
	var objs = ["background", "ninja", "entityMine", "entityGold", "entityDoorExit",
	  "entityDoorExitSwitch", "entityDoorRegular", "entityDoorLocked",
	  "entityDoorTrap", "entityLaunchPad", "entityOneWayPlatform",
	  "entityDroneChaingun", "entityDroneLaser", "entityDroneZap",
	  "entityDroneChaser", "entityFloorGuard", "entityBounceBlock",
	  "entityRocket", "entityTurret", "entityThwomp", "entityEvilNinja",
	  "entityDualLaser", "entityBoostPad", "entityBat",
	  "entityEyeBat", "entityShoveThwomp"];
	for (var i=0;i<objs.length;i++){
		var colors = objects[objs[i]];
		var area = document.createElement("div");
		area.id = "i" + i;
		area.className = "section";
		area.style.display = "none";
		for (var j=0;j<colors.length;j++){
			var input = document.createElement("input");
			var text = document.createTextNode(colors[j]["text"]);
			input.className = "jscolor";
			input.value = colors[j]["color"];
			area.appendChild(input);
			area.appendChild(text);
			area.appendChild(document.createElement("br"));
		}
		section.appendChild(area);
	}
}

function tab(item, type){
	var i, tabs, pages, obj;
	obj = document.getElementById(item);
	tabs = document.getElementsByClassName(type == "tab" ? "tab" : "item");
	pages = document.getElementsByClassName(type == "tab" ? "page" : "section");
	for (i=0;i<tabs.length;i++) {
		tabs[i].className = tabs[i].className.replace(" active", "");
	}
	for (i=0;i<pages.length;i++){
		pages[i].style.display = "none";
	}
	obj.style.display = "block";
	obj.className += " active";
}
