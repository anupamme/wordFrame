(function ($) {

  edit = function (e) {
    e.data.$textArea
      .attr('contentEditable', true)
      .addClass(e.data.classNames.textArea)
      .focus();
    e.stopPropagation();
    $.wordFrame.replaceButton('edit', viewButton);
    $.wordFrame.createMenu();
  },
  
  view = function (e) {
    e.data.$textArea
      .attr('contentEditable', false)
      .removeClass();
    e.stopPropagation();
    $.wordFrame.replaceButton('view', editButton);
    $.wordFrame.createMenu();
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

  $.wordFrame.addButton(viewButton);

}(jQuery));
