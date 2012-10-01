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
    e.data.$textarea.focus();
  },
  
  italic = function (e) {
    e.preventDefault();
    exec('italic');
    e.data.$textarea.focus();
  },
  
  list = function (e) {
    e.preventDefault();
    exec('insertUnorderedList');
    e.data.$textarea.focus();
  },

  link = function (e) {
    e.preventDefault();
    if (selectTest()) {
      exec('unlink');
      var href = prompt('Enter a link:', 'http://');
      exec('createLink', href);
    } else { return; }
    e.data.$textarea.focus();
  },
      
  //the functions below are coupled to the structure of the data object

  buildMenu = function (data) {

    var buttonNames = data.buttonNames,
    buttons = data.buttons,
    className = data.menuClassName,
    menuId = data.menuId,
    areaId = data.textareaId;

    var addButton = function (name, $parent, buttons) {
      var $button = $("<a href='#' " 
		      + buttons[name].selector
		      + ">" 
		      + buttons[name].html
		      + "</a>")
	.attr('title', buttons[name].helpText)
	.addClass('btn');

      $parent.append($button);
      return $button;
    };

    var $menu = $("<div id=" + menuId + "/>").addClass(className);
  
    if (buttonNames instanceof Array) {
      buttonNames.forEach(function (name, idx, array) {
	var $button = addButton(name, $menu, buttons);
	$button.on(buttons[name].eventsMap, data);
      }, null);
    } else {
      $.error('incorrect argument passed to function addMenu');
    }

    return $menu;
  },

  buildTextarea = function (data) {
    
    var className = data.textareaClassName,
    id = data.textareaId,
    width = data.width,
    height = data.height;

    var $textarea = $("<div id="+ id + "/>")
      .attr('contentEditable', true)
      .addClass(className)
      .css({
	'width': width,
	'height': height
      });
    
    return $textarea;
  },  
  
  data = {

    $el: null,
    $menu: null,
    $textarea: null,
    
    width: 400,
    height: 400,
        
    textareaClassName: 'area',
    textareaId: 'wftextarea',

    menuClassName: 'btn-group',
    menuId: 'wfmenu',

    buttonNames: ['bold', 'italic', 'list', 'link'], 
    buttons: {

      'bold': {
	html: '<i class="icon-bold"></i>',
	helpText: 'Bold',
	selector: '[button-type=bold]',
	eventsMap: { 
	  'click': bold,
	},
	toggleActive: true
      },
      'italic':{
	html: '<i class="icon-italic"></i>',
	helpText: 'Italics',
	selector: '[button-type=italic]',
	eventsMap: { 
	  'click': italic
	},
	toggleActive: true
      },
      'list': {
	html: '<i class="icon-list"></i>',
	helpText: 'List',
	selector: '[button-type=list]',
	eventsMap: { 
	  'click': list
	}
      },
      'link': {
	html: '<i class="icon-share"></i>',
	helpText: 'Hyperlink',
	selector: '[button-type=link]',
	eventsMap: { 
	  'click': link
	}
      }
    }
  },

  //The functions below mutate the data object
    
  createEditor = function ($el) {
    data.$el = $el;
    data.$menu = buildMenu(data); 
    data.$textarea = buildTextarea(data);
    
    $el.prepend(data.$menu);
    $el.append(data.$textarea);
    return $el;
  },

  addButton = function (name, button, index) {
    var idx = index || data.buttonNames.length;
    data.buttonNames.splice(idx, 0, name);
    data.buttons[name] = button;
  },

  removeButton = function (name) {
    var idx = data.buttonNames.indexOf(name);
    data.buttonNames.splice(idx, 1);
    delete data.buttons[name];
  },

  replaceButton = function (oldName, newName, newButton) {
    var idx = data.buttonNames.indexOf(oldName);
    removeButton(oldName);
    addButton(newName, newButton, idx);
  },

  rebuildMenu = function () {
    data.$menu.remove();
    data.$menu = buildMenu(data);
    data.$el.prepend(data.$menu);
    return true;
  },

  methods = {

    init: function (options) {
      data = $.extend(data, options || {});
      return this.each(function (idx, el) {
	createEditor($(el), data);
      });
    },

    getContents: function () {
      return data.$textarea.html();
    }

  };

  $.fn.wordframe = function (method) {
    
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || ! method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.wordframe');
    }    

  };

  //Exports for global access by plugins

  $.wordframe = {
    'data': data,
    'addButton': addButton,
    'removeButton': removeButton,
    'replaceButton': replaceButton,
    'rebuildMenu': rebuildMenu
  };
  
}(jQuery, window, document));
