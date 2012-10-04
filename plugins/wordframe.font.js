(function ($) {

  medium = function (e) {
    e.preventDefault();
    if (document.queryCommandValue('formatBlock') === 'h3') {
      document.execCommand('formatBlock', 'p');
    } else { document.execCommand('formatBlock', 'h3'); }
    e.stopPropagation();
    e.data.$textArea.focus();
  },

  mediumButton = {
    name: 'medium',
    html: '<i class="icon-text-height"></i>',
    helpText: 'Text Size',
    eventsMap: { 
      'click': medium
    }
  };

  $.wordFrame.addButton(mediumButton);

}(jQuery));
