/**
 *
 * MAIN WEB INTERFACE
 *
 */

// Color buttons for each section of the GUI
var sections = [
    {
        sectionId: "Objects_Items" ,
        listId: "list_objects",
        items: [
            { name: "Background", objectId: "background" },
            { name: "Ninja", objectId: "ninja" },
            { name: "Mine", objectId: "entityMine" },
            { name: "Gold", objectId: "entityGold" },
            { name: "Exit Door", objectId: "entityDoorExit" },
            { name: "Exit Switch", objectId: "entityDoorExitSwitch" },
            { name: "Regular Door", objectId: "entityDoorRegular" },
            { name: "Locked Door", objectId: "entityDoorLocked" },
            { name: "Trap Door", objectId: "entityDoorTrap" },
            { name: "Launchpad", objectId: "entityLaunchPad" },
            { name: "One-way Platform", objectId: "entityOneWayPlatform" },
            { name: "Chaingun Drone", objectId: "entityDroneChaingun" },
            { name: "Laser Drone", objectId: "entityDroneLaser" },
            { name: "Zap Drones", objectId: "entityDroneZap" },
            { name: "Chaser Drone", objectId: "entityDroneChaser" },
            { name: "Floorguard", objectId: "entityFloorGuard" },
            { name: "Bounce Block", objectId: "entityBounceBlock" },
            { name: "Rocket Turret", objectId: "entityRocket" },
            { name: "Gauss Turret", objectId: "entityTurret" },
            { name: "Thwump", objectId: "entityThwomp" },
            { name: "Evil Ninja", objectId: "entityEvilNinja" },
            { name: "Laser Turret", objectId: "entityDualLaser" },
            { name: "Boost Pad", objectId: "entityBoostPad" },
            { name: "Deathball", objectId: "entityBat" },
            { name: "Mini (Eyebat)", objectId: "entityEyeBat" },
            { name: "Shove Thwump", objectId: "entityShoveThwomp" },
        ]
    },
    {
        sectionId: "Menu_Items",
        listId: "list_menu",
        items: [
            { name: "Basic Menus", objectId: "menuGeneral" },
            { name: "Menu Tabs", objectId: "menuTabs" },
            { name: "Leaderboards", objectId: "menuLeaderboards" },
            { name: "Episode Grid", objectId: "menuEpisodes" },
            { name: "Pause Menu", objectId: "menuPause" },
            { name: "Profile", objectId: "menuProfile" },
            { name: "Other Texts", objectId: "menuOther" },
            { name: "Unknown", objectId: "menuUnknown" },
        ]
    },
    {
        sectionId: "Editor_Items",
        listId: "list_editor",
        items: [
            { name: "Lines", objectId: "editorLines" },
            { name: "Selections", objectId: "editorSelections" },
            { name: "Unknown", objectId: "editorUnknown" },
        ]
    },
    {
        sectionId: "Timebar_Items",
        listId: "list_timebar",
        items: [
            { name: "Basic Timebar", objectId: "timeBarBasic" },
            { name: "Race Timebar (P1)*", objectId: "timeBarRace1" },
            { name: "Race Timebar (P2)", objectId: "timeBarRace2" },
            { name: "Race Timebar (P3)", objectId: "timeBarRace3" },
            { name: "Race Timebar (P4)", objectId: "timeBarRace4" },
            { name: "Unknown", objectId: "timeBarUnknown" },
        ]
    },
    {
        sectionId: "Headbands_Items",
        listId: "list_headbands",
        items: [
            { name: "Headbands", objectId: "headbandsBasic" },
            { name: "Unknown", objectId: "headbandsUnknown1" },
            { name: "Unknowner", objectId: "headbandsUnknown2" },
            { name: "Unknownest", objectId: "headbandsUnknown3" },
        ]
    },
    {
        sectionId: "Effects_Items",
        listId: "list_effects",
        items: [
            { name: "Explosions", objectId: "explosions" },
            { name: "Drone BZZT", objectId: "fxDroneZap" },
            { name: "Floorguard BZZT", objectId: "fxFloorguardZap" },
            { name: "Ground Dust", objectId: "fxNinja" }
        ]
    }
]


// File strings
var files = {};
var files_loaded = {};

var images_loaded = {};

var sprite_canvas, ctx, currentSection;

// Creates the buttons of each section, on load
function create_button(i, name, objectId, listId, sectionId) {
    var colors = objects[objectId];
    var list = document.getElementById(listId)
    var section = document.getElementById(sectionId);
    var areaId = "i" + i;

    var li = document.createElement("li");
    var title = document.createTextNode(name);
    li.appendChild(title);
    li.id = "l" + i
    li.classList = "item"
    li.setAttribute("role", "option")
    li.onclick = function () { tab(areaId) }

    var area = document.createElement("div");
    area.id = areaId;
    area.classList = "section";
    area.style.display = "none";

    for (var j = 0; j < colors.length; j++) {
        var row = document.createElement("div");
        row.classList = "color-row";

        var inputDiv = document.createElement("div");
        inputDiv.className = "picker-col";
        var input = document.createElement("input");
        var inputId = objectId + j
        input.id = inputId;
        input.classList = "jscolor {onFineChange:'redrawCanvas(this)'}";
        input.value = colors[j]["color"];
        inputDiv.appendChild(input);

        var textDiv = document.createElement("div");
        textDiv.classList = "description-col"
        var text = document.createTextNode(colors[j]["text"]);
        textDiv.appendChild(text);

        row.appendChild(inputDiv);
        row.appendChild(textDiv);

        area.appendChild(row);

        if (colors[j].sprite != null) {
            var img = new Image();
            img.id = inputId;
            images_loaded[inputId] = {
                outline: Boolean(colors[j].outline)
            };
            img.onload = function() {
                images_loaded[this.id].image = this;
                // console.log(images_loaded[this.id]);
            }
            img.src = "images/" + colors[j].sprite;
        }
    }
    section.appendChild(area);
    list.appendChild(li);
}

// Create all buttons, on load
function create_buttons() {
    var count = 0
    for (var n = 0; n < sections.length; n++) {
        var section = sections[n]
        for (var i = 0; i < section.items.length; i++) {
            var item = section.items[i]
            create_button(
                count,
                item.name,
                item.objectId,
                section.listId,
                section.sectionId,
            );
            count++
        }
    }

    log("Info: Successfully loaded NPC.");
}

// Update value of variables with selected colors from colorpickers
function update_buttons() {
    for (var o in objects) {
        for (var j = 0; j < objects[o].length; j++) {
            //if (document.getElementById(o+j) === null) { console.log(o+j); }
            objects[o][j]["color"] = document.getElementById(o + j).value;
        }
    }
}

var wall_thickness = 32;
var outline_offsets = [
    { x: -1, y: 0 },
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: 0, y: 1 }
]

function redrawCanvas() {
	if (currentSection == null) {
		//console.log('no current section selected');
		return;
	}
    var tileColor = document.getElementById("background0").style.backgroundColor;
    var tileOutline = document.getElementById("background1").style.backgroundColor;
    var backgroundColor = document.getElementById("background2").style.backgroundColor;

    ctx.fillStyle = tileColor;
    ctx.fillRect(0, 0, sprite_canvas.width, sprite_canvas.height);

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(wall_thickness, wall_thickness, sprite_canvas.width - wall_thickness * 2, sprite_canvas.height - wall_thickness * 2);

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = tileOutline;
    ctx.rect(wall_thickness - 1, wall_thickness - 1, sprite_canvas.width - (wall_thickness - 1) * 2, sprite_canvas.height - (wall_thickness - 1) * 2);
    ctx.stroke();

    var tempCanvas = document.createElement('canvas');
    tempCanvas.width = sprite_canvas.width;
    tempCanvas.height = sprite_canvas.height;
    var tempCtx = tempCanvas.getContext("2d");

    var jscolors = currentSection.getElementsByClassName("jscolor");
    for (let i = 0; i < jscolors.length; i++) {
        const currcol = jscolors[i];
        if (images_loaded[currcol.id] && images_loaded[currcol.id].image) {
            if (images_loaded[currcol.id].outline) {
                var img = images_loaded[currcol.id].image;
                for (let j = 0; j < outline_offsets.length; j++) {
                    const offset = outline_offsets[j];
                    tempCtx.drawImage(img, offset.x + tempCanvas.width / 2 - img.width / 2, offset.y + tempCanvas.height / 2 - img.height / 2);
                }
                tempCtx.globalCompositeOperation = "source-in";
                tempCtx.fillStyle = document.getElementById("background5").style.backgroundColor;
                tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
                tempCtx.globalCompositeOperation = "source-over";
                ctx.drawImage(tempCanvas, 0, 0);
            }
        }
    }

    for (let i = 0; i < jscolors.length; i++) {
        const currcol = jscolors[i];
        if (images_loaded[currcol.id] && images_loaded[currcol.id].image) {
            var img = images_loaded[currcol.id].image;
            tempCtx.fillStyle = currcol.style.backgroundColor;
            tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
            tempCtx.globalCompositeOperation = "destination-in";
            tempCtx.drawImage(img, tempCanvas.width / 2 - img.width / 2, tempCanvas.height / 2 - img.height / 2);
            tempCtx.globalCompositeOperation = "source-over";
            ctx.drawImage(tempCanvas, 0, 0);
        }
    }
}

// Changes the current tab view
function tab(item, type) {
    var i, tabs, obj;
    obj = document.getElementById(item);
	if (obj == null) {
		console.log('null obj ' + item + ' ' + type);
	}
	// hide all tab contents
    tabs = document.getElementsByClassName(type == "tab" ? "page" : "section");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
	// show our tab content
    obj.style.display = "block";
    if (type != "tab") {
        currentSection = obj;
    } else {
        if ((obj.id == "About") || (obj.id == "Load")) {
            document.getElementsByClassName("full-page")[0].style.display = "none";
        } else {
            document.getElementsByClassName("full-page")[0].style.display = "flex";
        }

		// un-highlight all tab menu buttons
		btns = document.getElementsByClassName("tab");
		//console.log(btns);
		for (i = 0; i < btns.length; i++) {
			btns[i].classList = 'tab';
		}
		// highlight the tab menu button we have activated
		var b = document.getElementById('b'+item);
		b.classList = 'tab active';

    }
	// redraw canvas TODO: only redraw when it's being displayed
    redrawCanvas()
}

/**
 *
 * INTERNAL METHODS
 *
 */

// Logging method
function log(string) {
    var fileDisplayArea = document.getElementById('fileDisplayArea');
    fileDisplayArea.innerHTML += (moment().format("HH:mm:ss") + " - " + string + "\n");
}

// Create blob from string of bytes
function blobify(text) {
    var bytes = new Uint8Array(text.match(/.{2}/g).map(e => parseInt(e, 16)));
    return new Blob([bytes], { type: "application/octet-stream" });
}

// Create string of bytes from blob
function deblobify(blob) {
    var binary = "";
    var bytes = new Uint8Array(blob);
    for (var i = 0; i < bytes.byteLength; i++) {
        binary += bytes[i].toString(16).padStart(2, '0').toUpperCase();
    }
    return binary;
}

// Creates ArrayBuffer from string
function bufferize(text) {
    return new Uint8Array(text.match(/.{2}/g).map(e => parseInt(e, 16))).buffer;
}

// Creates a matrix from an array
function matrixize(array, size) {
    var matrix = [];
    for (var i = 0; i < array.length; i += size) matrix.push(array.slice(i, i + size));
    return matrix;
}

// Listener for file uploading
function list() {
    var end_index = this.f.name.length - 4;
    files[this.f.name.substring(0, end_index)] = deblobify(this.result);
    files_loaded[this.f.name.substring(0, end_index)] = true;
}

function check_palette() {
    var done = true;
    var objs = Object.keys(objects);
    for (var i = 0; i < objs.length; i++) {
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

function init_stuff_onload() {
	// Populate Metanet Palettes dropdown list
	// var fileInput3 = document.getElementById('file3');
    // fileInput3.addEventListener('change', function(e) {
	// 	//////////////////// NOT WORKING
	// 	console.log('hei');
	// 	//var dateBefore = new Date();
	// 	var f = fileInput3.files[0]
	// 	console.log(f);
	// 	JSZip.loadAsync(f)                                   // 1) read the Blob
	// 		.then(function(zip) {
	// 			var dateAfter = new Date();
	// 			//$title.append($("<span>", {
	// 			//    "class": "small",
	// 			//    text:" (loaded in " + (dateAfter - dateBefore) + "ms)"
	// 			//}));

	// 			zip.forEach(function (relativePath, zipEntry) {  // 2) print entries
	// 				var dpal = document.getElementById("dpal");
	// 				dpal.innerHTML += '<option value="'+zipEntry.name+'">'+zipEntry.name+'</option>';
	// 			});
	// 		}, function (e) {
	// 			console.log(e.message);
	// 		});
	// });

    // Listener to Load Palette (35 .tga files)
    var fileInput = document.getElementById('file');
    fileInput.addEventListener('change', function(e) {
		files = {};
		files_loaded = {};
        // Retrieve selected files
        var aux = fileInput.files;
        var files_raw = [];
        for (var i = 0; i < aux.length; i++) { files_raw[i] = aux[i]; }
        // Remove extraneous files
        var objs = Object.keys(objects);
        for (var i = 0; i < files_raw.length; i++) {
            var end_index = files_raw[i].name.length - 4;
            var filename = files_raw[i].name.substring(0, end_index);
            if (!objs.includes(filename)) { files_raw.splice(i, 1); }
        }
        // Check for existence of all palette files
        var filenames = [];
        for (var i = 0; i < files_raw.length; i++) { filenames.push(files_raw[i].name); }
        var inexistant = [];
        var inex_count = 0;
        for (var i = 0; i < objs.length; i++) {
            if (!filenames.includes(objs[i] + ".tga")) {
                inexistant.push(objs[i] + ".tga");
                inex_count += 1;
            }
        }
        // Proceed only if all files were correct
        if (inex_count > 0) {
            // Clean files
            alert("Missing files:\n\n" + inexistant.join("\n"));
            log("Error loading palette: Missing " + inex_count.toString() + " files.");
        } else {
            // Read the files
            for (var i = 0; i < files_raw.length; i++) {
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

    // Rendering stuff
    sprite_canvas = document.getElementById("sprite-renderer");
    ctx = this.sprite_canvas.getContext("2d");

	// Create the buttons
	create_buttons();

	// Init jscolor
	jscolor.installByClassName('jscolor');
}

if (window.addEventListener) // W3C standard
{
  window.addEventListener('load', init_stuff_onload, false);
}
else if (window.attachEvent) // Microsoft
{
  window.attachEvent('onload', init_stuff_onload);
}

/**
 *
 * GENERATE PALETTE
 *
 */

// Creates a tga file as a string of raw bytes in hex
// (Read the TGA specs to understand this function)
function create_file(name) {
    var i, j, n, w, f;
    n = objects[name].length;
    w = (64 * n).toString(16).padStart(4, '0').match(/.{2}/g).reverse().join('');
    f = "00000A000000000000000000" + w + "40001800";
    for (i = 0; i < 64; i++) {
        for (j = 0; j < n; j++) {
            f += "BF" + objects[name][j]["color"].match(/.{2}/g).reverse().join("");
        }
    }
    return f;
}

// Generate all palette files, zip them and serve them
function create_palette() {
    update_buttons();
    var objs = Object.keys(objects).map(o => blobify(create_file(o)));
    var zip = new JSZip();
    for (var i = 0; i < objs.length; i++) { zip.file(Object.keys(objects)[i] + ".tga", objs[i]); }
    zip.generateAsync({ type: "blob" }).then(
        function(content) {
            saveAs(content, "palette.zip");
        }
    );
    log("Info: Downloaded palette.")
}

/**
 *
 * PARSE PALETTE
 *
 */

// Check that the TGA is valid for our purpose
function check_file(filename) {
    // Load file
    var errorMessage = "ERRORS with file " + filename + ":\n";
    var errorHappened = false;
    var file = files[filename].match(/.{2}/g);
    var header = file.slice(0, 18);
    // Extract header fields
    var id_length = parseInt(header[0], 16);
    var colormap_type = parseInt(header[1], 16);
    var image_type = parseInt(header[2], 16);
    var colormap_spec = header.slice(3, 8);
    var width = parseInt(header.slice(12, 14).reverse().join(""), 16);
    var height = parseInt(header.slice(14, 16).reverse().join(""), 16);
    var pixel_depth = parseInt(header[16], 16);
    var colors = Math.round(width / 64);

    if (colors != objects[filename].length) {
        errorHappened = true;
        errorMessage += ("* The image doesn't have the right amount of colors (has " +
            colors.toString() + ", should have " +
            objects[filename].length.toString() + ").\n");
    }
    if (height != 64) {
        errorMessage += "* Warning: The image height should be 64.\n"
    }
    if (errorHappened) {
        return errorMessage;
    } else {
        return true;
    }
}

// Parses a tga file from a string of raw bytes in hex
function parse_file(filename) {
    var result = check_file(filename);
    if (result === true) {
        // Change colorboxes (pixels (31,32) + (0,64*i))
        try {
            var file = files[filename];
            var tga = new TGA();
            var buffer = bufferize(file);
            tga.load(buffer);
            var width = tga.header.width;
            var n = width / 64;
            var image = tga.getImageData();
            var pixels = matrixize(matrixize(image.data, 4), width);
            for (var i = 0; i < n; i++) {
                var rgb = deblobify(pixels[31][32 + 64 * i]).substring(0, 6);
                var input = document.getElementById(filename + i.toString());
                input.value = rgb;
                input.jscolor.fromString(rgb);
            }
            return true;
        } catch (e) {
            return e.message;
        }
    } else {
        return result;
    }
}

// Parses all palette files
function parse_palette() {
    var objs = Object.keys(objects);
    var fileDisplayArea = document.getElementById('fileDisplayArea');
    var errorMessage = "ERROR loading palette:\n\n";
    var errors = false;
    var invalid = [];
    for (var i = 0; i < objs.length; i++) {
        var result = parse_file(objs[i]);
        if (!(result === true)) {
            errorMessage += (result + "\n");
            errors = true;
            invalid.push(objs[i] + ".tga");
        } else {
            // log("Info: File " + objs[i] + " parsed successfully.");
        }
    }
    if (errors == true) {
        alert(errorMessage);
        log("Error loading palette: Invalid TGA files (" + invalid.join() + ").")
        files = {};
        files_loaded = {};
    } else {
        log("Info: Successfully loaded palette.");
    }
}

function test() {
    var file = files["background"];
    var tga = new TGA();
    var buffer = bufferize(file);
    tga.load(buffer);
    var width = tga.header.width;
    var n = width / 64;
    var image = tga.getImageData();
    var pixels = matrixize(matrixize(image.data, 4), width);
    var colors = new Array(n);
    for (var i = 0; i < n; i++) {
        var rgb = deblobify(pixels[31][32 + 64 * i]).substring(0, 6);
        colors[i] = rgb;
        log(rgb);
    }
}
