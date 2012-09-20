
(function ($, window, document) {
  'use strict';

  var methods = (function () {

    var getSelectionText = function () {
      
      var text = "";
      if (this.getSelection) {
        text = window.getSelection().toString();
      } else if (document.selection && document.selection.type == "Text") {
        text = document.selection.createRange().text;
      }
      return text;
    },
    
    exec = function (command, arg) {
      document.execCommand(command, false, typeof arg !== undefined ? arg : null);
    },

    query = function (command) {
      return document.queryCommandValue(command);
    },

    bold = function (e) {
      console.log(e);
    },
    
    italic = function (e) {
    },
    
    list = function (e) {
    },

    link = function (e) {
    },
    
    h2 = function (e) {
    },
    
    h3 = function (e) {
    },
    
    cancel = function (e) {
    },

    data = {

      areaClassName: 'area',

      menuClassName: 'lyvewrite',

      eventsObj: {
	'[data-type=bold]': [
	  {'click': [bold]}
	],
	'[data-type=italic]': [
	  {'click': [italic] }
	],
	'[data-type=list]': [
	  {'click': [list]}
	],
	'[data-type=link]': [
	  {'click': [link] } 
	],
	'[data-type=h2]': [
	  {'click': [h2]}
	],
	'[data-type=h3]': [
	  {'click': [h3]}
	],
	'a': [
	  {'click': [cancel]}
	]
      },

      menuItems: [
      	'<a href="#" data-type="bold">Bold</a>',
	'<a href="#" data-type="italic">Italic</a>',
	'<a href="#" data-type="list">List</a>',
	'<a href="#" data-type="link">Link</a>',
	'<a href="#" data-type="h2">Large</a>',
	'<a href="#" data-type="h3">Medium</a>'
      ]
      
    };
    
    return {
      
      init: function (options) {
	
	var settings = $.extend({
	  
	}, options || {});
	
	return this.each(function (idx) {  
	  $(this)
	    .attr('contenteditable', true)
	    .addClass(data.areaClassName)
	    .lyvewrite('buildMenu', data.menuItems, data.menuClassName)
	    .lyvewrite('delegateEvents', data.eventsObj);
	});
      },
      
      buildMenu: function (menuItems, className) {
	
	var $menu = $('<div/>').addClass(className);

	if (menuItems instanceof Array) {
	  menuItems.forEach(function (item, idx, array) {
	    $menu.append(item);
	  }, null)
	} else {
	  $.error('incorrect argument passed to function buildMenu');
	}
	
	return $menu.insertBefore(this);
      },

      delegateEvents: function (eventsObj) {

	for (var selector in eventsObj) {

	  var eventMapList = eventsObj[selector];
	  eventMapList.forEach(function (eventMap, idx, array) {

	    for (var event in eventMap) {

	      var handlers = eventMap[event];
	      handlers.forEach(function (handler, idx, array) {
		$(this).delegate(selector, event, handler);
	      }, this);

	    }
	  }, this);

	}
      }

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
