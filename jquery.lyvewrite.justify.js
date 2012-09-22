(function ($) {
  
  var center = function(e) {
    e.preventDefault();
    document.execCommand('justifyCenter');
  };

  var pluginFn = $('#editor').lyvewrite().data('lyvewrite');
  pluginFn('center', center);
  
}(jQuery));
