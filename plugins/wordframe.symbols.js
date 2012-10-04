(function ($, document) {
  'use strict'

  var rndStr = function (prefix) {
    return prefix + '_' + Math.random().toString().split('.')[1];
  },
  
  makeSymbolEditor = function (e) {
    e.preventDefault();
    e.stopPropagation();
    
    if ($('#symbolEditor').length===0) {
      var $editor = $('<div id="symbolEditor"/>')
      e.data.$root.append($editor);

      var uniqueId = rndStr('symbols');
      var symbols = '<span id=' + uniqueId + '></span>';
      document.execCommand('insertHTML', false, symbols);
      
      $editor.symbolEditor({
	'$outputArea': $('#'+uniqueId)
      });
      $editor
	.prepend('<button class="btn-small btn-info">Done</button>')
	.on('click', null, {'root':$editor},  removeSymbolEditor);
    }
  },
  
  removeSymbolEditor = function (e) {
    e.preventDefault();
    e.stopPropagation();
    e.data.root.remove();
  },
  
  symbolButton = {
    name: 'symbols',
    html: '<i class="icon-plus"></i>',
    helpText: 'Symbols',
    eventsMap: { 
      'click': makeSymbolEditor
    },
  };

  $.wordFrame.addButton(symbolButton);

}(jQuery, document));
