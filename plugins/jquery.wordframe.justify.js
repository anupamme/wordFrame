(function ($) {
  
  var left = function(e) {
    e.preventDefault();
    document.execCommand('justifyLeft');
    $('#'+e.data.areaId).focus();
  },

  center = function(e) {
    e.preventDefault();
    document.execCommand('justifyCenter');
    $('#'+e.data.areaId).focus();
  },
  
  right = function(e) {
    e.preventDefault();
    document.execCommand('justifyRight');
    $('#'+e.data.areaId).focus();
  },

  leftButton = {
    html: 'left',
    selector: '[button-type=left]',
    events: {'click': left}
  },

  centerButton = {
    html: 'center',
    selector: '[button-type=center]',
    events: {'click': center}
  },

  rightButton = {
    html: 'right',
    selector: '[button-type=right]',
    events: {'click': right}
  };


  $.wordframe.addButton('left', leftButton);
  $.wordframe.addButton('center', centerButton);
  $.wordframe.addButton('right', rightButton);
  
}(jQuery));
