(function ($, document) {
  'use strict'
  
  var handleInsert = function (e) {

    e.data.textArea.focus();

    var selected = e.data.merlin.handsontable('getSelected');
    var cell = $.merlin.getCell(selected[0], selected[1]);

    var content = '<span>' + cell.value + '</span>';
    document.execCommand('insertHTML', false, content);

  },

  makeMerlin = function (e) {
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

      var $doneButton = $('<button class="btn-small btn-success">Done</button>')
	    .on('click',
		null, 
		{'merlin': $merlin,  'textArea': e.data.$textArea},
		removeSymbolEditor);

      var $insertButton = $('<button class="btn-small btn-primary">Insert</button>')
	    .on('click', 
		null,
		{'merlin': $merlin, 'textArea': e.data.$textArea},
		handleInsert);

      var $menu = $('<div></div>').append($insertButton).append($doneButton);

      $merlin.prepend($menu);
    }
  },
  
  removeSymbolEditor = function (e) {
    e.preventDefault();
    e.stopPropagation();
    e.data.merlin.remove();
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
