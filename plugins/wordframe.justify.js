(function ($) {
  
  var left = function (e) {
    e.preventDefault();
    document.execCommand('justifyLeft');
    e.stopPropagation();
    e.data.$textArea.focus();
  },

  center = function (e) {
    e.preventDefault();
    document.execCommand('justifyCenter');
    e.stopPropagation();
    e.data.$textArea.focus();
  },
  
  right = function (e) {
    e.preventDefault();
    document.execCommand('justifyRight');
    e.stopPropagation();
    e.data.$textArea.focus();
  },

  leftButton = {
    name: 'left',
    html: '<i class="icon-align-left"></i>',
    helpText: 'Align Left',
    eventsMap: {'click': left}
  },

  centerButton = {
    name: 'center',
    html: '<i class="icon-align-center"></i>',
    helpText: 'Align Center',
    eventsMap: {'click': center}
  },

  rightButton = {
    name: 'right',
    html: '<i class="icon-align-right"></i>',
    helpText: 'Align Right',
    eventsMap: {'click': right}
  };

  $.wordFrame.addButton(leftButton);
  $.wordFrame.addButton(centerButton);
  $.wordFrame.addButton(rightButton);
  
}(jQuery));
