/*
*   This content is licensed according to the W3C Software License at
*   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/
/**
 * ARIA Scrollable Listbox Example
 * @function onload
 * @desc Initialize the listbox example once the page has loaded
 */

window.addEventListener('load', function () {
  var listbox_objects = new aria.Listbox(document.getElementById('list_objects'));
  var listbox_menu = new aria.Listbox(document.getElementById('list_menu'));
  var listbox_editor = new aria.Listbox(document.getElementById('list_editor'));
  var listbox_timebar = new aria.Listbox(document.getElementById('list_timebar'));
  var listbox_headbands = new aria.Listbox(document.getElementById('list_headbands'));
  var listbox_effects = new aria.Listbox(document.getElementById('list_effects'));
});
