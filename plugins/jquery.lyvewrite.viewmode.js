(function ($) {

  var data = $.lyvewrite.data,

  edit = function (e) {
    data.$textarea
      .attr('contentEditable', true)
      .addClass(data.areaClassName)
      .focus();

    var viewButton = {
      html: 'view',
      selector: '[button-type=view]',
      events: {'click': view}
    };

    $.lyvewrite.replaceButton('edit', 'view', viewButton);
    $.lyvewrite.removeMenu(data);
    $.lyvewrite.addMenu(data);
  },
  
  view = function (e) {
    data.$textarea
      .attr('contentEditable', false)
      .removeClass();
    
    var editButton = {
      html: 'edit',
      selector: '[button-type=edit]',
      events: { 'click' : edit }
    };

    $.lyvewrite.replaceButton('view', 'edit', editButton);
    $.lyvewrite.removeMenu(data);
    $.lyvewrite.addMenu(data);
  };

  $.lyvewrite.createButton('view', view);

}(jQuery));
