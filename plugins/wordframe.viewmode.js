(function ($) {

  edit = function (e) {
    e.data.wF.$textArea
      .attr('contentEditable', true)
      .addClass(data.textareaClassName)
      .focus();
    
    $.wordframe.replaceButton('edit', viewButton);
    $.wordframe.buildMenu();
  },
  
  view = function (e) {
    e.data.wF.$textArea
      .attr('contentEditable', false)
      .removeClass();

    $.wordframe.replaceButton('view', editButton);
    $.wordframe.buildMenu();
  },

  viewButton = {
    name: 'view',
    html: '<i class="icon-lock"></i>',
    helpText: 'Preview',
    eventsMap: { 'click': view }
  },

  editButton = {
    name: 'edit',
    html: '<i class="icon-edit"></i>',
    helpText: 'Edit',
    eventsMap: { 'click' : edit }
  };

  $.wordframe.addButton('view', viewButton);

}(jQuery));
