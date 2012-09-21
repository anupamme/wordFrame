
(function ($, window, document) {
  'use strict';

  var methods = (function () {

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
    },
    
    italic = function (e) {
      e.preventDefault();
      exec('italic');
    },
    
    list = function (e) {
      e.preventDefault();
      exec('insertUnorderedList');
    },

    link = function (e) {
      e.preventDefault();
      if (selectTest()) {
	exec('unlink');
	var href = prompt('Enter a link:', 'http://');
	console.log(href);
	exec('createLink', href);
      } else { return; }
    },
    
    h2 = function (e) {
      e.preventDefault();
      if (query('formatBlock') === 'h2') {
	exec('formatBlock', 'p');
      } else { exec('formatBlock', 'h2'); }
    },
    
    h3 = function (e) {
      e.preventDefault();
      if (query('formatBlock') === 'h3') {
	exec('formatBlock', 'p');
      } else { exec('formatBlock', 'h3'); }
    },

    getContents = function (e) {
      e.preventDefault();
      return $
    },
    
    cancel = function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
    },

    addTextarea = function ($el, className) {
      var $textarea = $("<div id='lwtextarea'/>")
	.attr('contenteditable', true)
	.addClass(className);

      return $el.append($textarea);
    },
    
    addMenu = function ($el, menuItems, className) {
      
      var $menu = $("<div id='lwmenu'/>").addClass(className);

      if (menuItems instanceof Array) {
	menuItems.forEach(function (item, idx, array) {
	  $menu.append(item);
	}, null);
      } else {
	$.error('incorrect argument passed to function addMenu');
      }
      
      return $el.prepend($menu);
    },

    delegateEvents = function ($el, eventsObj) {

      for (var selector in eventsObj) {

	var eventMapList = eventsObj[selector];
	eventMapList.forEach(function (eventMap, idx, array) {

	  for (var event in eventMap) {

	    var handlers = eventMap[event];
	    handlers.forEach(function (handler, idx, array) {
	      $el.delegate(selector, event, handler);
	    }, null);

	  }
	}, null);

      }
    },

    data = {

      areaClassName: 'area',

      menuClassName: 'lyvewrite',

      eventsObj: {
	'[data-type=bold]'  : [ {'click': [bold]} ],
	'[data-type=italic]': [ {'click': [italic]} ],
	'[data-type=list]'  : [ {'click': [list]} ],
	'[data-type=link]'  : [ {'click': [link]} ],
	'[data-type=h2]'    : [ {'click': [h2]} ],
	'[data-type=h3]'    : [ {'click': [h3]}	],
	'[data-type=view]'  : [ {'click': [getContents]} ],
	'a'                 : [ {'click': [cancel]} ]
      },

      menuItems: [
      	'<a href="#" data-type="bold">Bold</a>',
	'<a href="#" data-type="italic">Italic</a>',
	'<a href="#" data-type="list">List</a>',
	'<a href="#" data-type="link">Link</a>',
	'<a href="#" data-type="h2">Large</a>',
	'<a href="#" data-type="h3">Medium</a>',
	'<a href="#" data-type="view">View</a>'
      ]
      
    };
    
    return {
      
      init: function (options) {
	
	var settings = $.extend(data, options || {});
	
	return this.each(function (idx, el) {
	  addMenu($(el), settings.menuItems, settings.menuClassName);
	  addTextarea($(el), settings.areaClassName);
	  delegateEvents($(el), settings.eventsObj);
	});
      },

    };

  }());
  
  $.fn.lyvewrite = function (method) {
    
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.lyvewrite' );
    }    
  };
  
}(jQuery, window, document));
