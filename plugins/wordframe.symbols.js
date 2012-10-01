(function ($) {
  
  var data = $.wordframe.data,

  makeSymbolsEditor = function () {
  },
  
  symbolButton = {
    html: '<i class="icon-plus"></i>',
    helpText: 'Math Symbols',
    selector: '[button-type=symbols]',
    eventsMap: { 
      'click': makeSymbolsEditor
    }
  };

  $.wordframe.addButton('symbols', symbolButton);

}(jQuery));
