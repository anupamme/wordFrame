(function ($) {
  
  var left = function(e) {
    e.preventDefault();
    document.execCommand('justifyLeft');
    e.data.$textarea.focus();
  },

  center = function(e) {
    e.preventDefault();
    document.execCommand('justifyCenter');
    e.data.$textarea.focus();
  },
  
  right = function(e) {
    e.preventDefault();
    document.execCommand('justifyRight');
    e.data.$textarea.focus();
  },

  leftButton = {
    html: '<i class="icon-align-left"></i>',
    helpText: 'Align Left',
    selector: '[button-type=left]',
    eventsMap: {'click': left}
  },

  centerButton = {
    html: '<i class="icon-align-center"></i>',
    helpText: 'Align Center',
    selector: '[button-type=center]',
    eventsMap: {'click': center}
  },

  rightButton = {
    html: '<i class="icon-align-right"></i>',
    helpText: 'Align Right',
    selector: '[button-type=right]',
    eventsMap: {'click': right}
  };

  $.wordframe.addButton('left', leftButton);
  $.wordframe.addButton('center', centerButton);
  $.wordframe.addButton('right', rightButton);
  
}(jQuery));
