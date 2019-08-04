function create_buttons(){
	var section = document.getElementById("Objects_Items");
	var objs = ["background", "ninja", "entityMine", "entityGold",
	  "entityDoorExit", "entityDoorExitSwitch", "entityDoorRegular",
		"entityDoorLocked", "entityDoorTrap", "entityLaunchPad",
		"entityOneWayPlatform", "entityDroneChaingun", "entityDroneLaser",
		"entityDroneZap", "entityDroneChaser", "entityFloorGuard",
		"entityBounceBlock", "entityRocket", "entityTurret", "entityThwomp",
		"entityEvilNinja", "entityDualLaser", "entityBoostPad", "entityBat",
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
	var i, tabs, obj;
	obj = document.getElementById(item);
	tabs = document.getElementsByClassName(type == "tab" ? "page" : "section");
	for (i=0;i<tabs.length;i++){ tabs[i].style.display = "none"; }
	obj.style.display = "block";
}

function blobify(text){
	var bytes = new Uint8Array(text.match(/.{2}/g).map(e => parseInt(e, 16)));
	return new Blob([bytes], {type: "application/octet-stream"});
}

function download(){
	var data = blobify("102030405060708090")
	var file = window.URL.createObjectURL(data);
	var link = document.getElementById("downloadlink");
  link.href = file;
  link.click();
}
