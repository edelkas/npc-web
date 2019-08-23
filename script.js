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

// File strings
var files = {};
var files_loaded = {};

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
function list(){
	var end_index = this.f.name.length - 4;
	files[this.f.name.substring(0,end_index)] = deblobify(this.result);
	files_loaded[this.f.name.substring(0,end_index)] = true;
}
function check_palette(){
	var done = true;
	var objs = Object.keys(objects);
	for (var i=0;i<objs.length;i++){
		if (!files.hasOwnProperty(objs[i]) ||
				!files_loaded.hasOwnProperty(objs[i]) ||
				!files_loaded[objs[i]]) {
				done = false;
				break;
		}
	}
	if (done == true) {
		parse_palette();
		return;
	} else {
		setTimeout(check_palette, 100);
	}
}
window.onload = function() {
	files = {};
	files_loaded = {};
	var fileInput = document.getElementById('file');
	// Load and read the selected files
	fileInput.addEventListener('change', function(e) {
		// Retrieve selected files
		var files_raw = fileInput.files;
		// Remove extraneous files
		var objs = Object.keys(objects);
		for (var i=0;i<files_raw.length;i++){
			var end_index = files_raw[i].name.length - 4;
			var filename = files_raw[i].name.substring(0,end_index);
			if (!objs.includes(filename)) { files_raw.splice(i, 1); }
		}
		// Check for existence of all palette files
		var filenames = [];
		for (var i=0;i<files_raw.length;i++){ filenames.push(files_raw[i].name); }
		var inexistant = [];
		var inex_count = 0;
		for (var i=0;i<objs.length;i++){
			if (!filenames.includes(objs[i] + ".tga")) {
				inexistant.push(objs[i] + ".tga");
				inex_count += 1;
			}
		}
		// Proceed only if all files were correct
		if (inex_count > 0) {
			// Clean files
			alert("Missing files:\n\n" + inexistant.join("\n"));
		} else {
			// Read the files
			for (var i=0;i<files_raw.length;i++){
				var file = files_raw[i];
				var reader = new FileReader();
				reader.f = file;
				reader.onload = list;
				reader.readAsArrayBuffer(file);
			}
			// Since file reading is done asynchronously, we periodically check for
			// the palette's availability until it's ready.
			check_palette();
		}
	});
}

/**
 *
 * GENERATE PALETTE
 *
 */

// Creates a tga file as a string of raw bytes in hex
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

/**
 *
 * PARSE PALETTE
 *
 */

// Check that the TGA is valid for our purpose
function check_file(filename){
	// Load file
	var errorMessage = "ERRORS with file " + filename + ":\n";
	var errorHappened = false;
	var file = files[filename].match(/.{2}/g);
	var header = file.slice(0,18);
	// Extract header fields
	var id_length = parseInt(header[0], 16);
	var colormap_type = parseInt(header[1], 16);
	var image_type = parseInt(header[2], 16);
	var colormap_spec = header.slice(3,8);
	var width = parseInt(header.slice(12,14).reverse().join(""), 16);
	var height = parseInt(header.slice(14,16).reverse().join(""), 16);
	var pixel_depth = parseInt(header[16], 16);
	var colors = width / 64;
	// Various checks for validity
	if (colormap_type != 0) {
		errorHappened = true;
		errorMessage += "The image is colormapped (not supported).\n";
	}
	switch (image_type) {
		case 0:
			errorHappened = true;
			errorMessage += "No image data found.\n";
		case 1:
			errorHappened = true;
			errorMessage += "The image is colormapped (not supported).\n";
		case 2:
			// Raw true-color image, supported.
		case 3:
			errorHappened = true;
			errorMessage += "The image is grayscale (not supported).\n";
		case 9:
			errorHappened = true;
			errorMessage += "The image is colormapped (not supported).\n";
		case 10:
			// Run-length encoded true-color image, supported.
		case 11:
			errorHappened = true;
			errorMessage += "The image is grayscale (not supported).\n";
		default:
			errorHappened = true;
			errorMessage += ("Invalid image type (" + image_type + ").\n");
	}
	if (colors != objects[filename].length) {
		errorHappened = true;
		errorMessage += ("The image doesn't have the right amount of colors (has "
								 + colors.toString() + ", should have "
								 + objects[filename].length.toString() + ").\n");
	}
	if (height != 64) {
		errorMessage += "Warning: The image height should be 64.\n"
	}
	if (pixel_depth != 24 || pixel_depth != 32) {
		errorHappened = true;
		errorMessage += ("The pixel depth is " + pixel_depth.toString()
																					 + " (only 24 and 32 supported).\n");
	}
	if (errorHappened) {
		return errorMessage;
	} else {
		return true;
	}
}

// Parses a tga file from a string of raw bytes in hex
function parse_file(filename){
	var result = check_file(filename);
	if (result) {
		// Change colorboxes
		return true;
	} else {
		return result;
	}
}

// Parses all palette files
function parse_palette(){
	var objs = Object.keys(objects);
	var fileDisplayArea = document.getElementById('fileDisplayArea');
	var errorMessage = "ERROR loading palette:\n\n";
	var successMessage = "";
	var errors = false;
	for (var i=0;i<objs.length;i++){
		var result = parse_file(objs[i]);
		if (!result) {
			errorMessage += (result + "\n");
			errors = true;
		} else {
			successMessage += ("SUCCESS: File " + objs[i] + " parsed successfully.\n");
		}
	}
	if (errors == true) {
		alert(errorMessage);
		files = {};
		files_loaded = {};
	} else {
		fileDisplayArea.innerText = successMessage;
	}
}
