(function ($, window, document) {
  'use strict';

  var getSelectionText = function () {
    var text = "";
    if (document.getSelection) {
      text = window.getSelection().toString();
    } else if (document.selection && document.selection.type == "Text") {
      text = document.selection.createRange().text;
    }
    return text;
  },

  selectTest = function() {
    if (getSelectionText().length === 0) {
      alert('Please select some text first');
      return false;
    } else { return true; }
  },
  
  exec = function (command, arg) {
    document.execCommand(command, false, typeof arg !== undefined ? arg : null);
  },

  query = function (command) {
    return document.queryCommandValue(command);
  },

  bold = function (e) {
    e.preventDefault();
    exec('bold');
    $('#'+e.data.areaId).focus();
  },
  
  italic = function (e) {
    e.preventDefault();
    exec('italic');
    $('#'+e.data.areaId).focus();
  },
  
  list = function (e) {
    e.preventDefault();
    exec('insertUnorderedList');
    $('#'+e.data.areaId).focus();
  },

  link = function (e) {
    e.preventDefault();
    if (selectTest()) {
      exec('unlink');
      var href = prompt('Enter a link:', 'http://');
      exec('createLink', href);
    } else { return; }
    $('#'+e.data.areaId).focus();
  },
  
  large = function (e) {
    e.preventDefault();
    if (query('formatBlock') === 'h2') {
      exec('formatBlock', 'p');
    } else { exec('formatBlock', 'h2'); }
    $('#'+e.data.areaId).focus();
  },
  
  medium = function (e) {
    e.preventDefault();
    if (query('formatBlock') === 'h3') {
      exec('formatBlock', 'p');
    } else { exec('formatBlock', 'h3'); }
    $('#'+e.data.areaId).focus();
  },
    
  //the functions below are coupled to the structure of the data object

  addMenu = function (data) {

    var $el = data.$el,
    buttonNames = data.buttonNames,
    buttons = data.buttons,
    className = data.menuClassName,
    menuId = data.menuId,
    areaId = data.areaId;

    var addButton = function (name, $parent, buttons) {
      var $button = $("<a href='#' " 
		      + buttons[name].selector 
		      + ">" 
		      + buttons[name].html
		      + "</a>");
      $parent.append($button);
      return $button;
    };

    var delegateEvents = function (name, $button, events) {
      for (var e in events) {
	$button.on(e, data, events[e]);
      }
    };

    var $menu = $("<div id=" + menuId + "/>").addClass(className);
  
    if (buttonNames instanceof Array) {
      buttonNames.forEach(function (name, idx, array) {
	var $button = addButton(name, $menu, buttons);
	delegateEvents(name, $button, buttons[name].events);
      }, null);
    } else {
      $.error('incorrect argument passed to function addMenu');
    }
    
    $el.prepend($menu);
    return true;
  },

  removeMenu = function (data) {
    data.$el.find('#'+data.menuId).remove();
  },

  addTextarea = function (data) {
    
    var $el = data.$el,
    className = data.areaClassName,
    id = data.areaId,
    width = data.width,
    height = data.height;

    var $textarea = $("<div id="+ id + "/>")
      .attr('contentEditable', true)
      .addClass(className)
      .css({
	'width': width,
	'height': height
      });

    $el.append($textarea);
    return true;
  },

  removeTextarea = function (data) {
    data.$el.find('#'+data.areaId).remove();
  },
  
  buildEditor = function (data) {
    
    addMenu(data);
    addTextarea(data);
    return true;
  },
  
  data = {

    $el: null,
    
    width: 400,
    height: 400,
        
    areaClassName: 'area',
    areaId: 'lwtextarea',

    menuClassName: 'lyvewrite',
    menuId: 'lwmenu',

    buttonNames: ['bold', 'italic', 'list', 'link', 'large', 'medium'], 
    buttons: {

      'bold': {
	html: 'bold',
	selector: '[button-type=bold]',
	events: { 'click': bold }
      },
      'italic':{
	html: 'italic',
	selector: '[button-type=italic]',
	events: { 'click': italic }
      },
      'list': {
	html: 'list',
	selector: '[button-type=list]',
	events: { 'click': list }
      },
      'link': {
	html: 'link',
	selector: '[button-type=link]',
	events: { 'click': link }
      },
      'large': {
	html: 'large',
	selector: '[button-type=large]',
	events: { 'click': large }
      },
      'medium': {
	html: 'medium',
	selector: '[button-type=medium]',
	events: { 'click': medium }
      }
    }
  },

  //The functions below mutate the data object

  createButton = function (name, action, html) {

    data.buttonNames.push(name);
    data.buttons[name] = {
      html: html || name,
      selector: "[button-type=" + name + "]",
      events: { 'click': action }
    };
  },

  removeButton = function (name) {

    var idx = data.buttonNames.indexOf(name);
    data.buttonNames.splice(idx, 1);
    delete data.buttons[name];
  },

  replaceButton = function (oldName, newName, newButton) {

    var idx = data.buttonNames.indexOf(oldName);
    data.buttonNames[idx] = newName;
    data.buttons[newName] = newButton;
    delete data.buttons[oldName];    
  };

  $.fn.lyvewrite = function (options) {

    data = $.extend(data, options || {});
    
    return this.each(function (idx, el) {
      data.$el = $(el);
      buildEditor(data);
    });
  };

  //Exports for global access (by plugins, for example)

  $.lyvewrite = {
    'data': data,
    'addMenu': addMenu,
    'removeMenu': removeMenu,
    'addTextarea': addTextarea,
    'removeTextarea': removeTextarea,
    'createButton': createButton,
    'removeButton': removeButton,
    'replaceButton': replaceButton
  };
  
}(jQuery, window, document));
