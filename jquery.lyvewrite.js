(function ($, window, document) {
  'use strict';

  var getSelectionText = function () {
    var text = "";
    if (document.getSelection) {
      text = window.getSelection().toString();
    } else if (document.selection && document.selection.type == "Text") {
      text = document.selection.createRange().text;
    }
    return text;
  },

  selectTest = function() {
    if (getSelectionText().length === 0) {
      alert('Please select some text first');
      return false;
    } else { return true; }
  },
  
  exec = function (command, arg) {
    document.execCommand(command, false, typeof arg !== undefined ? arg : null);
  },

  query = function (command) {
    return document.queryCommandValue(command);
  },

  bold = function (e) {
    e.preventDefault();
    exec('bold');
  },
  
  italic = function (e) {
    e.preventDefault();
    exec('italic');
  },
  
  list = function (e) {
    e.preventDefault();
    exec('insertUnorderedList');
  },

  link = function (e) {
    e.preventDefault();
    if (selectTest()) {
      exec('unlink');
      var href = prompt('Enter a link:', 'http://');
      exec('createLink', href);
    } else { return; }
  },
  
  h2 = function (e) {
    e.preventDefault();
    if (query('formatBlock') === 'h2') {
      exec('formatBlock', 'p');
    } else { exec('formatBlock', 'h2'); }
  },
  
  h3 = function (e) {
    e.preventDefault();
    if (query('formatBlock') === 'h3') {
      exec('formatBlock', 'p');
    } else { exec('formatBlock', 'h3'); }
  },
  
  cancel = function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
  },
  
  addMenu = function ($el, buttons, className) {
    
    var buttonsList = buttons.split(",");
    var $menu = $("<div id='lwmenu'/>").addClass(className);
  
    if (buttonsList instanceof Array) {
      buttonsList.forEach(function (name, idx, array) {
        var button = "<a href='#' data-type=" + name + ">" + name + "</a>";
        $menu.append(button);
      }, null);
    } else {
      $.error('incorrect argument passed to function addMenu');
    }
    
    return $el.prepend($menu);
  },

  addTextarea = function ($el, className) {
    var $textarea = $("<div id='lwtextarea'/>")
      .attr('contenteditable', true)
      .addClass(className);

    return $el.append($textarea);
  },
  
  delegateEvents = function ($el, eventsObj) {

    for (var selector in eventsObj) {

      var eventMapList = eventsObj[selector];
      eventMapList.forEach(function (eventMap, idx, array) {

  for (var event in eventMap) {

	  var handlers = eventMap[event];
	  handlers.forEach(function (handler, idx, array) {
	    $el.delegate(selector, event, handler);
	  }, null);

	}
      }, null);

    }
  },
  
  init = function (el, options) {
    
    options = $.extend($.lyvewrite, options || {});
    
    addMenu($(el), options.buttons, options.menuClassName);
    addTextarea($(el), options.areaClassName);
    delegateEvents($(el), options.eventsObj);
  };

  $.lyvewrite = {
    
    width: 400,
    height: 400,
    
    buttons: "bold, italic, list, link, large, medium",
    
    areaClassName: 'area',

    menuClassName: 'lyvewrite',

    eventsObj: {
      '[data-type=bold]'  : [ {'click': [bold]} ],
      '[data-type=italic]': [ {'click': [italic]} ],
      '[data-type=list]'  : [ {'click': [list]} ],
      '[data-type=link]'  : [ {'click': [link]} ],
      '[data-type=h2]'    : [ {'click': [h2]} ],
      '[data-type=h3]'    : [ {'click': [h3]}  ],
      'a'                 : [ {'click': [cancel]} ]
    }
    
  };
  
  $.fn.lyvewrite = function (options) {
    
    return this.each(function (idx, el) {
      $.data(el, 'lyvewrite', init(el, options));
      
    });
  };
  
}(jQuery, window, document));
