(function ($) {
  
  makeSymbolsEditor = function (e) {
    var $editor = $('<div class="texEditor"/>')
    e.data.$root.append($editor);
    $('.texEditor').texEdit();
  },
  
  symbolButton = {
    name: 'symbols',
    html: '<i class="icon-plus"></i>',
    helpText: 'Math Symbols',
    eventsMap: { 
      'click': makeSymbolsEditor
    }
  };

  $.wordFrame.addButton('symbols', symbolButton);

}(jQuery));
