
(function ($, window, document) {
  'use strict';

  var data = {

    events: {
      'click [data-type=bold]': 'bold',
      'click [data-type=italic]': 'italic',
      'click [data-type=list]': 'list',
      'click [data-type=link]': 'link',
      'click [data-type=h2]': 'h2',
      'click [data-type=h3]': 'h3',
      'click a': 'cancel'
    },

    menuItems: [
      	  '<a href="#" data-type="bold">Bold</a>',
	  '<a href="#" data-type="italic">Italic</a>',
	  '<a href="#" data-type="list">List</a>',
	  '<a href="#" data-type="link">Link</a>',
	  '<a href="#" data-type="h2">Large</a>',
	  '<a href="#" data-type="h3">Medium</a>'
    ]
    
  },

  methods = (function () {

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
    };
    
    return {
      
      init: function (options) {
	
	var settings = $.extend({
	  
	}, options || {});
	
	return this.each(function (idx) {  
	  $(this)
	    .attr('contenteditable', true)
	    .addClass('area')
	    .lyvewrite('buildMenu', data.menuItems);
	});
      },
      
      buildMenu: function (menuItems) {
	
	var $menu = $('<div/>').addClass('lyvewrite');

	if (menuItems instanceof Array) {
	  menuItems.forEach(function (item, idx, array) {
	    $menu.append(item);
	  }, null)
	} else {
	    $.error('incorrect argument passed to function buildMenu');
	}
	
	return $menu.insertBefore(this);
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
