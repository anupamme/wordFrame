(function ($) {

  var data = $.lyvewrite.data,

  edit = function (e) {
    $('#'+data.areaId)
      .attr('contentEditable', true)
      .addClass(data.areaClassName)
      .focus();
  },
  
  view = function (e) {
    $('#'+data.areaId)
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
