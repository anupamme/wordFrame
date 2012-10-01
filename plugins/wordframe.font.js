(function ($) {

  var data = $.wordframe.data,

  medium = function (e) {
    e.preventDefault();
    if (document.queryCommandValue('formatBlock') === 'h3') {
      document.execCommand('formatBlock', 'p');
    } else { document.execCommand('formatBlock', 'h3'); }
    e.data.$textarea.focus();
  },

  mediumButton = {
    html: '<i class="icon-text-height"></i>',
    helpText: 'Text Size',
    selector: '[button-type=medium]',
    eventsMap: { 
      'click': medium
    },
    toggleActive: true
  };

  $.wordframe.addButton('medium', mediumButton);

}(jQuery));
