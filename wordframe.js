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

  selectTest = function () {
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
    e.data.$textArea.focus();
  },
  
  italic = function (e) {
    e.preventDefault();
    exec('italic');
    e.data.$textArea.focus();
  },
  
  list = function (e) {
    e.preventDefault();
    exec('insertUnorderedList');
    e.data.$textArea.focus();
  },

  link = function (e) {
    e.preventDefault();
    if (selectTest()) {
      exec('unlink');
      var href = prompt('Enter a link:', 'http://');
      exec('createLink', href);
    } else { return; }
    e.data.$textArea.focus();
  },

  createMenu = function () {
    
    if (wF.$menu) { wF.$menu.remove(); }
    wF.$menu = $("<div></div>")
      .attr('id', wF.ids.menu)
      .addClass(wF.classNames.menu);

    wF.buttons.forEach(function (btn, idx, array) {
      wF.$menu.append($("<a></a>")
		      .html(btn.html)
		      .attr('href', '#')
		      .attr('data-type', btn.name)
		      .attr('title', btn.helpText)
		      .addClass(wF.classNames.button)
		      .on(btn.eventsMap, wF));
    }, null);

    wF.$root.append(wF.$menu);
  },

  createTextArea = function () {

    if (wF.$textArea) { wF.textArea.remove(); }
    wF.$textArea = $("<div></div>")
      .attr('contentEditable', true)
      .attr('id', wF.ids.textArea)
      .addClass(wF.classNames.textArea)
      .css({
	'width': wF.width,
	'height': wF.height
      });
    
    wF.$root.append(wF.$textArea);
  },

  wF = {

    $root: null,
    $menu: null,
    $textArea: null,

    width: 400,
    height: 400,

    classNames: {
      textArea: 'area',
      menu: 'btn-group',
      button: 'btn'
    },

    ids: {
      textArea: 'wftextarea',
      menu: 'wfmenu',
    },
    
    buttons: [
      {
	name: 'bold',
	html: '<i class="icon-bold"></i>',
	helpText: 'Bold',
	eventsMap: { 
	  'click': bold,
	}
      },
      {
	name: 'italics',
	html: '<i class="icon-italic"></i>',
	helpText: 'Italics',
	eventsMap: { 
	  'click': italic
	}
      },
      {
	name: 'list',
	html: '<i class="icon-list"></i>',
	helpText: 'List',
	eventsMap: { 
	  'click': list
	}
      },
      {
	name: 'link',
	html: '<i class="icon-share"></i>',
	helpText: 'Hyperlink',
	eventsMap: { 
	  'click': link
	}
      }
    ]

  },
      
  createEditor = function ($el) {
    
    wF.$root = $el
    createMenu();
    createTextArea();
    
    return $el
      .append(wF.$menu)
      .append(wF.$textArea)
      .data(wF);
    
  },

  addButton = function (button, index) {
    if (wF.buttons.filter(function (b) {
      return (b.name===button.name);}).length !== 0) {
      console.log('button with this name already present: addButton');
      return false;
    } else {
      var idx = index || wF.buttons.length;
      wF.buttons.splice(idx, 0, button);
      return true;
    }
  },

  getButtonIndex = function (name) {
    var matches = [];
    wF.buttons.forEach(function (b, i, array) {
      if (b.name===name) { matches.push(i); }
    });
    switch (matches.length) {
      case 0: 
      console.log('no buttons found: getButtonIndex');
      return -1;

      case 1:
      return matches[0];
      
      default:
      console.log('more than one buttons found: getButtonIndex');
      return matches[0];
    }
  },

  removeButton = function (name) {
    var idx = getButtonIndex(name);
    if (idx > -1) {
      wF.buttons.splice(idx, 1);
    } else {
      console.log('no button found: removeButton');
    }
  },

  replaceButton = function (oldButtonName, newButton) {
    var idx = getButtonIndex(oldButtonName);
    if (idx > -1) {
      wF.buttons.splice(idx, 1, newButton);
    } else {
      console.log('no button found: replaceButton');
    }
  };

  $.fn.extend({
    wordFrame: function (config) {
      $.extend(wF, config || {});
      return createEditor(this);
    },
    
    wFTextAreaFocus: function () {
      if (this.data('$textArea')) {
	this.data('$textArea').focus();
      } else { console.log("no editor instance found: wFTextAreaFocus"); }
      return this;
    },

    wFGetContents: function () {
      return wF.$textArea.html();
    },

  });

  //Exports for global access by plugins

  $.wordFrame = {

    'addButton': addButton,
    'removeButton': removeButton,
    'replaceButton': replaceButton,
    'createMenu': createMenu

  };
  
}(jQuery, window, document));
