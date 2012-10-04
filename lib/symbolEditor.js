(function ($) {
  
  var sE = {

    $root: null,
    $buttonsArea: null,
    $textArea: null,
    $outputArea: null,

    classNames: {
      buttonsArea: 'btn-group',
      textArea: 'area',
      button: 'btn'
    },
    
    symbols: [
      {
	name: 'alpha',
	code: '\\alpha'
      },
      {
	name: 'beta',
	code: '\\beta'
      },
      {
	name: 'hat',
	code: '\\hat{x}'
      }
    ]
  },
  
  buttonClickHandle = function (e) {
    e.preventDefault();
    sE
      .$textArea
      .insertAtCaret(e.data.symbol.code + ' ')
      .trigger('input');
    e.stopPropagation();
  },

  rndStr = function (prefix) {
    return prefix + '_' + Math.random().toString().split('.')[1];
  },

  updateOutputArea = function (e) {

    var code = '\\displaylines{' + sE.$textArea.val() + '}'
    var id = rndStr('texcode');

    sE.$outputArea.html('<script type="math/tex; mode=display">' +
			code +
			'</script>')
      .attr('id', id);
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, id]);
  },

  createButtonsArea = function () {
    
    var makeButton = function (symbol) {

      var $img = $('<img/>')
	.attr('src',
	      'http://chart.apis.google.com/chart?cht=tx&chl=' + symbol.code)

      return $('<button></button>')
	.addClass(sE.classNames.button)
	.append($img)
	.on('click', null, {'symbol':symbol}, buttonClickHandle);
    };
    
    sE.$buttonsArea = $('<div></div>')
      .addClass(sE.classNames.buttonsArea);
    
    sE.symbols.forEach(function (symbol, idx, array) {
      sE.$buttonsArea.append(makeButton(symbol));
    });

    sE.$root.prepend(sE.$buttonsArea);
  },
  
  createTextArea = function () {
    sE.$textArea = $('<textarea/>')
      .addClass(sE.classNames.textArea)
      .on('input paste', updateOutputArea);

    sE.$root.append(sE.$textArea);
  },

  

  createEditor = function ($el) {
    sE.$root = $el;
    createButtonsArea();
    createTextArea();
    
  };
  
  $.fn.extend({
    symbolEditor: function (config) {
      $.extend(sE, config || {});
      return createEditor(this);
    }
  });

}(jQuery));
