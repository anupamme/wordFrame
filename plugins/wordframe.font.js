(function ($) {

  var data = $.wordframe.data,

  medium = function (e) {
    e.preventDefault();
    if (query('formatBlock') === 'h3') {
      exec('formatBlock', 'p');
    } else { exec('formatBlock', 'h3'); }
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
