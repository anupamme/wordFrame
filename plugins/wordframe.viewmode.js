(function ($) {

  var data = $.wordframe.data,

  edit = function (e) {
    data.$textarea
      .attr('contentEditable', true)
      .addClass(data.textareaClassName)
      .focus();
    
    $.wordframe.replaceButton('edit', 'view', viewButton);
    $.wordframe.rebuildMenu();
  },
  
  view = function (e) {
    data.$textarea
      .attr('contentEditable', false)
      .removeClass();
    $.wordframe.replaceButton('view', 'edit', editButton);
    $.wordframe.rebuildMenu();
  },

  viewButton = {
    html: '<i class="icon-lock"></i>',
    helpText: 'Preview',
    selector: '[button-type=view]',
    eventsMap: { 'click': view }
  },

  editButton = {
    html: '<i class="icon-edit"></i>',
    helpText: 'Edit',
    selector: '[button-type=edit]',
    eventsMap: { 'click' : edit }
  };

  $.wordframe.addButton('view', viewButton);

}(jQuery));
