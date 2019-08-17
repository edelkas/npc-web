/**
 *
 * MAIN WEB INTERFACE
 *
 */

// Color buttons for each section of the GUI
var buttons = [
	{name:"background", section:"Objects_Items", indexes:[]},
	{name:"ninja", section:"Objects_Items", indexes:[]},
	{name:"entityMine", section:"Objects_Items", indexes:[]},
	{name:"entityGold", section:"Objects_Items", indexes:[]},
	{name:"entityDoorExit", section:"Objects_Items", indexes:[]},
	{name:"entityDoorExitSwitch", section:"Objects_Items", indexes:[] },
	{name:"entityDoorRegular", section:"Objects_Items", indexes:[] },
	{name:"entityDoorLocked", section:"Objects_Items", indexes:[] },
	{name:"entityDoorTrap", section:"Objects_Items", indexes:[] },
	{name:"entityLaunchPad", section:"Objects_Items", indexes:[] },
	{name:"entityOneWayPlatform", section:"Objects_Items", indexes:[] },
	{name:"entityDroneChaingun", section:"Objects_Items", indexes:[] },
	{name:"entityDroneLaser", section:"Objects_Items", indexes:[] },
	{name:"entityDroneZap", section:"Objects_Items", indexes:[] },
	{name:"entityDroneChaser", section:"Objects_Items", indexes:[] },
	{name:"entityFloorGuard", section:"Objects_Items", indexes:[] },
	{name:"entityBounceBlock", section:"Objects_Items", indexes:[] },
	{name:"entityRocket", section:"Objects_Items", indexes:[] },
	{name:"entityTurret", section:"Objects_Items", indexes:[] },
	{name:"entityThwomp", section:"Objects_Items", indexes:[] },
	{name:"entityEvilNinja", section:"Objects_Items", indexes:[] },
	{name:"entityDualLaser", section:"Objects_Items", indexes:[] },
	{name:"entityBoostPad", section:"Objects_Items", indexes:[] },
	{name:"entityBat", section:"Objects_Items", indexes:[] },
	{name:"entityEyeBat", section:"Objects_Items", indexes:[] },
	{name:"entityShoveThwomp", section:"Objects_Items", indexes:[] },
	{name:"menu", section:"Menu_Items", indexes:[0, 3, 4, 10, 17, 29]},
	{name:"menu", section:"Menu_Items", indexes:[8, 12, 25, 26, 27, 31, 33, 37]},
	{name:"menu", section:"Menu_Items", indexes:[1, 2, 13, 16, 32]},
	{name:"menu", section:"Menu_Items", indexes:[5, 7, 9, 22, 23, 30]},
	{name:"menu", section:"Menu_Items", indexes:[18, 19, 20, 21]},
	{name:"menu", section:"Menu_Items", indexes:[14, 15]},
	{name:"menu", section:"Menu_Items", indexes:[24, 28, 34, 35, 38, 40, 41]},
	{name:"menu", section:"Menu_Items", indexes:[6, 11, 36, 39]},
	{name:"editor", section:"Editor_Items", indexes:[0, 2, 5]},
	{name:"editor", section:"Editor_Items", indexes:[3, 6, 7, 8]},
	{name:"editor", section:"Editor_Items", indexes:[1, 4, 9]},
	{name:"timeBar", section:"Timebar_Items", indexes:[0, 2, 4, 6]},
	{name:"timeBar", section:"Timebar_Items", indexes:[1]},
	{name:"timeBarRace", section:"Timebar_Items", indexes:[0, 1, 5, 6, 7]},
	{name:"timeBarRace", section:"Timebar_Items", indexes:[2, 8, 9, 10]},
	{name:"timeBarRace", section:"Timebar_Items", indexes:[3, 11, 12, 13]},
	{name:"timeBarRace", section:"Timebar_Items", indexes:[4, 14, 15, 16]},
	{name:"timeBar", section:"Timebar_Items", indexes:[3, 5, 7]},
	{name:"headbands", section:"Headbands_Items", indexes:[0, 2, 4, 6]},
	{name:"headbands", section:"Headbands_Items", indexes:[1, 3, 5, 7]},
	{name:"headbands", section:"Headbands_Items", indexes:[8, 9, 10, 11]},
	{name:"headbands", section:"Headbands_Items", indexes:[12, 13, 14, 15, 16]},
	{name:"explosions", section:"Effects_Items", indexes:[]},
	{name:"fxDroneZap", section:"Effects_Items", indexes:[]},
	{name:"fxFloorguardZap", section:"Effects_Items", indexes:[]},
	{name:"fxNinja", section:"Effects_Items", indexes:[]}
]

// Creates the buttons of each section, on load
function create_button(i, o, indexes, sect){
	var section = document.getElementById(sect);
	var colors = getObjects(o, indexes);
	var area = document.createElement("div");
	area.id = "i" + i;
	area.className = "section";
	area.style.display = "none";
	for (var j=0;j<colors.length;j++){
		var input = document.createElement("input");
		var text = document.createTextNode(colors[j]["text"]);
		input.id = o + (indexes.length == 0 ? j : indexes[j]);
		input.className = "jscolor";
		input.value = colors[j]["color"];
		area.appendChild(input);
		area.appendChild(text);
		area.appendChild(document.createElement("br"));
	}
	section.appendChild(area);
}

// Create all buttons, on load
function create_buttons(){
	for (var i=0;i<buttons.length;i++){
		create_button(i, buttons[i]["name"], buttons[i]["indexes"], buttons[i]["section"]);
	}
}

// Update value of variables with selected colors from colorpickers
function update_buttons(){
	for (var o in objects){
		for (var j=0;j<objects[o].length;j++){
			//if (document.getElementById(o+j) === null) { console.log(o+j); }
			objects[o][j]["color"] = document.getElementById(o+j).value;
		}
	}
}

// Changes the current tab view
function tab(item, type){
	var i, tabs, obj;
	obj = document.getElementById(item);
	tabs = document.getElementsByClassName(type == "tab" ? "page" : "section");
	for (i=0;i<tabs.length;i++){ tabs[i].style.display = "none"; }
	obj.style.display = "block";
}

/**
 *
 * INTERNAL METHODS
 *
 */

// Create blob from string of bytes
function blobify(text){
	var bytes = new Uint8Array(text.match(/.{2}/g).map(e => parseInt(e, 16)));
	return new Blob([bytes], {type: "application/octet-stream"});
}

// Create string of bytes from blob
function deblobify(blob){
	var binary = "";
	var bytes = new Uint8Array(blob);
	for (var i=0;i<bytes.byteLength;i++){
		binary += bytes[i].toString(16).padStart(2, '0').toUpperCase();
	}
	return binary;
}

// Listener for file uploading
window.onload = function() {
	var fileInput = document.getElementById('file');
	var fileDisplayArea = document.getElementById('fileDisplayArea');
	fileInput.addEventListener('change', function(e) {
		var file = fileInput.files[0];
		var reader = new FileReader();
		reader.onload = function(e) {
			fileDisplayArea.innerText = deblobify(reader.result);
		}
		reader.readAsArrayBuffer(file);
	});
}

/**
 *
 * FILE MANIPULATION METHODS
 *
 */

// Generate string with hex code of a palette file
// (Read the TGA specs to understand this function)
function create_file(name){
	var i, j, n, w, f;
	n = objects[name].length;
	w = (64 * n).toString(16).padStart(4, '0').match(/.{2}/g).reverse().join('');
	f = "00000A000000000000000000" + w + "40001800";
	for (i=0;i<64;i++){
		for (j=0;j<n;j++){
			f += "BF" + objects[name][j]["color"].match(/.{2}/g).reverse().join("");
		}
	}
	return f;
}

// Generate all palette files, zip them and serve them
function create_palette(){
	update_buttons();
	var objs = Object.keys(objects).map(o => blobify(create_file(o)));
	var zip = new JSZip();
	for (var i=0;i<objs.length;i++){ zip.file(Object.keys(objects)[i] + ".tga", objs[i]); }
	zip.generateAsync({type:"blob"}).then(
		function(content) {
  		saveAs(content, "palette.zip");
		}
	);
}

// Old downloading version
/*function download(){
	var data = blobify(create_file("background"))
	var file = window.URL.createObjectURL(data);
	var link = document.getElementById("downloadlink");
  link.href = file;
  link.click();
}*/

// Use XMLHttpRequest.sendAsBinary() method.
function parse_file(){
	var reader = new FileReader();
	reader.onload = function(e){ var rawData = reader.result; }
	reader.readAsBinaryString(file);
}

function parse_palette(){

}
