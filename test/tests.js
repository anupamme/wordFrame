var $el = $('#editor');

test("Editor is content editable", function () {
  ok($el.find('#lwtextarea').attr('contenteditable'), "Passed");
});

test("$.fn.lyvewrite is a function", function () {
  ok((typeof $.fn.lyvewrite==='function'), "Passed");
});

test("$.lyvewrite is an object", function () {
  ok((typeof $.lyvewrite==='object'), "Passed");
});

test("text area has focus after button click", function () {

  $('[button-type=bold]').trigger('click');
  ok($('#lwtextarea').is(':focus'), "Bold");

  $('[button-type=italic]').trigger('click');
  ok($('#lwtextarea').is(':focus'), "Italic");

  $('[button-type=list]').trigger('click');
  ok($('#lwtextarea').is(':focus'), "List");

  $('[button-type=large]').trigger('click');
  ok($('#lwtextarea').is(':focus'), "Large");

  $('[button-type=medium]').trigger('click');
  ok($('#lwtextarea').is(':focus'), "Medium");

});
