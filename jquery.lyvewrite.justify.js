(function ($) {
  
  var center = function(e) {
    e.preventDefault();
    document.execCommand('justifyCenter');
  };

  $.lyvewrite.createButton('center', center);
  
}(jQuery));
