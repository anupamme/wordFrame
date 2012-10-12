(function ($, document) {
  'use strict'
  
  var makeMerlin = function (e) {
    e.preventDefault();
    e.stopPropagation();
    
    if ($('#merlin').length===0) {
      var $merlin = $('<div id="merlin"/>')
	    .css('float', 'left');
      e.data.$root.css('float', 'left');

      e.data.$root.append($merlin);

      $merlin.merlin({
	outsideClickDeselects: false
      });

      var $doneButton = $('<button class="btn-small btn-info">Done</button>')
	    .on('click',
		null, 
		{'root':$merlin, 'textArea': e.data.$textArea},
		removeSymbolEditor);

      $merlin.prepend($doneButton);
    }
  },
  
  removeSymbolEditor = function (e) {
    e.preventDefault();
    e.stopPropagation();
    e.data.root.remove();
    e.data.textArea.focus();
  },
  
  merlinButton = {
    name: 'merlin',
    html: '<i class="icon-th"></i>',
    helpText: 'Spreadsheet',
    eventsMap: { 
      'click': makeMerlin
    }
  };

  $.wordFrame.addButton(merlinButton);

}(jQuery, document));
