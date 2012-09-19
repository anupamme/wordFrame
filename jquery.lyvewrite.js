
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
    }
    
  },

      methods = {

	init: function (options) {

	  var settings = $.extend({
		
	  }, options || {});
	  
	  return this.each(function (idx) {  
	    $(this)
	      .attr('contenteditable', true)
	      .addClass('area')
	      .lyvewrite('buildMenu');
	  });
	},

	exec: function(command, arg) {
	  document.execCommand(command, false, typeof arg !== undefined ? arg : null);
	},

	getSelectionText: function () {
	  
	  var text = "";
	  if (window.getSelection) {
            text = window.getSelection().toString();
	  } else if (document.selection && document.selection.type == "Text") {
            text = document.selection.createRange().text;
	  }
	  return text;
	},
	
	buildMenu: function () {

	  var $menu = $('<div/>').empty()
		.append('<a href="#" data-type="bold">Bold</a>')
		.append('<a href="#" data-type="italic">Italic</a>')
		.append('<a href="#" data-type="list">List</a>')
		.append('<a href="#" data-type="link">Link</a>')
		.append('<a href="#" data-type="h2">Large</a>')
		.append('<a href="#" data-type="h3">Medium</a>')
		.addClass('lyvewrite');

	  return $menu.insertBefore(this);
	}
	
      };
  
  $.fn.lyvewrite = function (method) {

    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.lyvewrite' );
      return true;
    }    
  };
    
}(jQuery, window, document));
