(function ($) {

  var data = $.wordframe.data,

  edit = function (e) {
    data.$textarea
      .attr('contentEditable', true)
      .addClass(data.textareaClassName)
      .focus();
    
    $.wordframe.replaceButton('edit', 'view', viewButton);
    $.wordframe.rebuildMenu(data);
  },
  
  view = function (e) {
    data.$textarea
      .attr('contentEditable', false)
      .removeClass();
    $.wordframe.replaceButton('view', 'edit', editButton);
    $.wordframe.rebuildMenu(data);
  },

  viewButton = {
    html: 'view',
    selector: '[button-type=view]',
    events: { 'click': view }
  },

  editButton = {
    html: 'edit',
    selector: '[button-type=edit]',
    events: { 'click' : edit }
  };

  $.wordframe.addButton('view', viewButton);

}(jQuery));
