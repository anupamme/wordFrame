
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
  $('[data-type=bold]').trigger('click');
  ok($('#lwtextarea').is(':focus'), "Bold OK");

  $('[data-type=italic]').trigger('click');
  ok($('#lwtextarea').is(':focus'), "Italic OK");

  $('[data-type=list]').trigger('click');
  ok($('#lwtextarea').is(':focus'), "List OK");

  $('[data-type=large]').trigger('click');
  ok($('#lwtextarea').is(':focus'), "Large OK");

  $('[data-type=medium]').trigger('click');
  ok($('#lwtextarea').is(':focus'), "Medium OK");
});
