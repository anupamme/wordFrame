
(function($) {
  'use strict';
  
  $.fn.lyvewrite = function() {

    var $menu = $('<div/>');

    var render = function($el) {
      return $el.empty()
	.append('<a href="#" data-type="bold">Bold</a>')
	.append('<a href="#" data-type="italic">Italic</a>')
	.append('<a href="#" data-type="list">List</a>')
	.append('<a href="#" data-type="link">Link</a>')
	.append('<a href="#" data-type="h2">Large</a>')
	.append('<a href="#" data-type="h3">Medium</a>');
    };

    return this.each(function() {
      
      $(this)
	.attr('contenteditable', true)
	.addClass('area');

      render($menu)
	.addClass('lyvewrite')
	.insertBefore($(this));
    });
    
  };

}(jQuery));
