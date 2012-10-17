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
        $editor.setAlignment("display");
      $editor
	.prepend('<button class="btn-small btn-info">Done</button>')
	.on('click',
	    null, 
	    {'root':$editor, 'textArea': e.data.$textArea},
	    removeSymbolEditor);
    }
  },
  
makeSymbolEditorInline = function (e) {
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
				$editor.setAlignment("inline");
				$editor
				    .prepend('<span class="span-6"><button class="btn-small btn-info">Done</button></span>')
					.on('click',
					   null, 
				        {'root':$editor, 'textArea': e.data.$textArea},
						  removeSymbolEditor);
                        }
},

removeSymbolEditor = function (e) {
    e.preventDefault();
    e.stopPropagation();
    e.data.root.remove();
    e.data.textArea.focus();
},
  
  symbolButton = {
    name: 'symbols',
    html: '<i class="icon-plus"></i>',
    helpText: 'Symbols',
    eventsMap: { 
      'click': makeSymbolEditor
    },
  },

  symbolButtonInline = {
	name: 'symbolsInline',
	html: '<i class="icon-minus"></i>',
	helpText: 'Symbols',
	eventsMap: {
	   'click': makeSymbolEditorInline
		      },
  };

  $.wordFrame.addButton(symbolButton);
  $.wordFrame.addButton(symbolButtonInline);
}(jQuery, document));