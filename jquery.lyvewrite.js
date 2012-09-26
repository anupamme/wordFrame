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
    
  addMenu = function ($el, buttonNames, buttons, className, menuId, areaId) {

    var addButton = function (name, $parent, buttons) {
      var $button = $("<a href='#' " + buttons[name].selector + ">" + name + "</a>");
      $parent.append($button);
      return $button;
    };

    var delegateEvents = function (name, $button, events) {
      for (var e in events) {
	$button.on(e, { 'areaId': areaId }, events[e]);
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
    
    return $el.prepend($menu);
  },

  addTextarea = function ($el, className, id, width, height) {
    var $textarea = $("<div id="+ id + "/>")
      .attr('contenteditable', true)
      .addClass(className)
      .css({
	'width': width,
	'height': height
      });

    return $el.append($textarea);
  },
  
  buildEditor = function ($el, options) {
    
    options = $.extend(data, options || {});
    
    addMenu($el, 
	    options.buttonNames,
	    options.buttons,
	    options.menuClassName,
	    options.menuId,
	    options.areaId);

    addTextarea($el,
		options.areaClassName,
		options.areaId,
		options.width,
		options.height);

    return true;
  },
  
  data = {
    
    width: 400,
    height: 400,

    buttonNames: ['bold', 'italic', 'list', 'link', 'large', 'medium'], 
    
    buttons: {

      'bold': {
	selector: '[button-type=bold]',
	events: { 'click': bold }
      },
      'italic':{
	selector: '[button-type=italic]',
	events: { 'click': italic }
      },
      'list': {
	selector: '[button-type=list]',
	events: { 'click': list }
      },
      'link': {
	selector: '[button-type=link]',
	events: { 'click': link }
      },
      'large': {
	selector: '[button-type=large]',
	events: { 'click': large }
      },
      'medium': {
	selector: '[button-type=medium]',
	events: { 'click': medium }
      }
    }, 
    
    areaClassName: 'area',
    
    areaId: 'lwtextarea',

    menuClassName: 'lyvewrite',

    menuId: 'lwmenu'
    
  },

  createButton = function (name, action) {
    //createButton is the only function which mutates state (the data object)
    data.buttonNames.push(name);
    data.buttons[name] = {
      selector: "[button-type=" + name + "]",
      events: { 'click': action }
    };
  };

  $.lyvewrite = {
    'createButton': createButton
  };
  
  $.fn.lyvewrite = function (options) {
    
    return this.each(function (idx, el) {
      buildEditor($el, options, createButton);		     
    });
  };
  
}(jQuery, window, document));
