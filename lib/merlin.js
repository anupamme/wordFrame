(function ($) {
  'use-strict';

  /* Jison generated parser */
  var parser = {
    trace: function trace() {},
    yy: {},
    symbols_: {"error":2,"expressions":3,"e":4,"EOF":5,"=":6,"<":7,">":8,"NOT":9,"+":10,"-":11,"*":12,"/":13,"^":14,"(":15,")":16,"%":17,"NUMBER":18,"E":19,"FIXEDCELL":20,":":21,"CELL":22,"STRING":23,"IDENTIFIER":24,"expseq":25,";":26,",":27,"$accept":0,"$end":1},
    terminals_: {2:"error",5:"EOF",6:"=",7:"<",8:">",9:"NOT",10:"+",11:"-",12:"*",13:"/",14:"^",15:"(",16:")",17:"%",18:"NUMBER",19:"E",20:"FIXEDCELL",21:":",22:"CELL",23:"STRING",24:"IDENTIFIER",26:";",27:","},
    productions_: [0,[3,2],[4,3],[4,4],[4,4],[4,4],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,2],[4,2],[4,3],[4,2],[4,1],[4,1],[4,1],[4,3],[4,1],[4,3],[4,1],[4,3],[4,4],[25,1],[25,3],[25,3]],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$, address) {
      var $0 = $$.length - 1;
      switch (yystate) {
      case 1:
	return $$[$0 - 1];
	break;
      case 2:
	this.$ = $$[$0 - 2] == $$[$0];
	break;
      case 3:
	this.$ = $$[$0 - 3] * 1 <= $$[$0] * 1;
	break;
      case 4:
	this.$ = $$[$0 - 3] * 1 >= $$[$0] * 1;
	break;
      case 5:
	this.$ = $$[$0 - 3] * 1 != $$[$0] * 1;
	break;
      case 6:
	this.$ = $$[$0 - 2] * 1 != $$[$0] * 1;
	break;
      case 7:
	this.$ = $$[$0 - 2] * 1 > $$[$0] * 1;
	break;
      case 8:
	this.$ = $$[$0 - 2] * 1 < $$[$0] * 1;
	break;
      case 9:
	this.$ = $$[$0 - 2] * 1 + $$[$0] * 1;
	break;
      case 10:
	this.$ = $$[$0 - 2] * 1 - $$[$0] * 1;
	break;
      case 11:
	this.$ = $$[$0 - 2] * 1 * ($$[$0] * 1);
	break;
      case 12:
	this.$ = $$[$0 - 2] * 1 / ($$[$0] * 1);
	break;
      case 13:
	this.$ = Math.pow($$[$0 - 2] * 1, $$[$0] * 1);
	break;
      case 14:
	this.$ = $$[$0] * -1;
	break;
      case 15:
	this.$ = $$[$0] * 1;
	break;
      case 16:
	this.$ = $$[$0 - 1];
	break;
      case 17:
	this.$ = $$[$0 - 1] * 0.01;
	break;
      case 18:
	this.$ = Number(yytext);
	break;
      case 19:
	this.$ = Math.E;
	break;
      case 20:
	this.$ = yy.lexer.cellHandler.fixedCellValue.apply(yy.lexer.cell, [$$[$0]]);
	break;
      case 21:
	this.$ = yy.lexer.cellHandler.fixedCellRangeValue.apply(yy.lexer.cell, [$$[$0 - 2], $$[$0]]);
	break;
      case 22:
	this.$ = yy.lexer.cellHandler.cellValue.apply(yy.lexer.cell, [address, $$[$0]]);
	break;
      case 23:
	this.$ = yy.lexer.cellHandler.cellRangeValue.apply(yy.lexer.cell, [$$[$0 - 2], $$[$0]]);
	break;
      case 24:
	this.$ = $$[$0].substring(1, $$[$0].length - 1);
	break;
      case 25:
	this.$ = yy.lexer.cellHandler.callFunction($$[$0 - 2], "", yy.lexer.cell);
	break;
      case 26:
	this.$ = yy.lexer.cellHandler.callFunction($$[$0 - 3], $$[$0 - 1], yy.lexer.cell);
	break;
      case 28:
	this.$ = $.isArray($$[$0]) ? $$[$0] : [$$[$0]];
	this.$.push($$[$0 - 2]);
	break;
      case 29:
	this.$ = $.isArray($$[$0]) ? $$[$0] : [$$[$0]];
	this.$.push($$[$0 - 2]);
	break;
      default:;
      }
    },
    table: [{3:1,4:2,11:[1,3],10:[1,4],15:[1,5],18:[1,6],19:[1,7],20:[1,8],22:[1,9],23:[1,10],24:[1,11]},{1:[3]},{5:[1,12],6:[1,13],7:[1,14],8:[1,15],9:[1,16],10:[1,17],11:[1,18],12:[1,19],13:[1,20],14:[1,21],17:[1,22]},{4:23,11:[1,3],10:[1,4],15:[1,5],18:[1,6],19:[1,7],20:[1,8],22:[1,9],23:[1,10],24:[1,11]},{4:24,11:[1,3],10:[1,4],15:[1,5],18:[1,6],19:[1,7],20:[1,8],22:[1,9],23:[1,10],24:[1,11]},{4:25,11:[1,3],10:[1,4],15:[1,5],18:[1,6],19:[1,7],20:[1,8],22:[1,9],23:[1,10],24:[1,11]},{5:[2,18],6:[2,18],7:[2,18],8:[2,18],9:[2,18],10:[2,18],11:[2,18],12:[2,18],13:[2,18],14:[2,18],17:[2,18],16:[2,18],27:[2,18],26:[2,18]},{5:[2,19],6:[2,19],7:[2,19],8:[2,19],9:[2,19],10:[2,19],11:[2,19],12:[2,19],13:[2,19],14:[2,19],17:[2,19],16:[2,19],27:[2,19],26:[2,19]},{21:[1,26],5:[2,20],6:[2,20],7:[2,20],8:[2,20],9:[2,20],10:[2,20],11:[2,20],12:[2,20],13:[2,20],14:[2,20],17:[2,20],16:[2,20],27:[2,20],26:[2,20]},{21:[1,27],5:[2,22],6:[2,22],7:[2,22],8:[2,22],9:[2,22],10:[2,22],11:[2,22],12:[2,22],13:[2,22],14:[2,22],17:[2,22],16:[2,22],27:[2,22],26:[2,22]},{5:[2,24],6:[2,24],7:[2,24],8:[2,24],9:[2,24],10:[2,24],11:[2,24],12:[2,24],13:[2,24],14:[2,24],17:[2,24],16:[2,24],27:[2,24],26:[2,24]},{15:[1,28]},{1:[2,1]},{4:29,11:[1,3],10:[1,4],15:[1,5],18:[1,6],19:[1,7],20:[1,8],22:[1,9],23:[1,10],24:[1,11]},{6:[1,30],8:[1,31],4:32,11:[1,3],10:[1,4],15:[1,5],18:[1,6],19:[1,7],20:[1,8],22:[1,9],23:[1,10],24:[1,11]},{6:[1,33],4:34,11:[1,3],10:[1,4],15:[1,5],18:[1,6],19:[1,7],20:[1,8],22:[1,9],23:[1,10],24:[1,11]},{4:35,11:[1,3],10:[1,4],15:[1,5],18:[1,6],19:[1,7],20:[1,8],22:[1,9],23:[1,10],24:[1,11]},{4:36,11:[1,3],10:[1,4],15:[1,5],18:[1,6],19:[1,7],20:[1,8],22:[1,9],23:[1,10],24:[1,11]},{4:37,11:[1,3],10:[1,4],15:[1,5],18:[1,6],19:[1,7],20:[1,8],22:[1,9],23:[1,10],24:[1,11]},{4:38,11:[1,3],10:[1,4],15:[1,5],18:[1,6],19:[1,7],20:[1,8],22:[1,9],23:[1,10],24:[1,11]},{4:39,11:[1,3],10:[1,4],15:[1,5],18:[1,6],19:[1,7],20:[1,8],22:[1,9],23:[1,10],24:[1,11]},{4:40,11:[1,3],10:[1,4],15:[1,5],18:[1,6],19:[1,7],20:[1,8],22:[1,9],23:[1,10],24:[1,11]},{5:[2,17],6:[2,17],7:[2,17],8:[2,17],9:[2,17],10:[2,17],11:[2,17],12:[2,17],13:[2,17],14:[2,17],17:[2,17],16:[2,17],27:[2,17],26:[2,17]},{6:[2,14],7:[2,14],8:[2,14],9:[2,14],10:[2,14],11:[2,14],12:[1,19],13:[1,20],14:[1,21],17:[1,22],5:[2,14],16:[2,14],27:[2,14],26:[2,14]},{6:[2,15],7:[2,15],8:[2,15],9:[2,15],10:[2,15],11:[2,15],12:[1,19],13:[1,20],14:[1,21],17:[1,22],5:[2,15],16:[2,15],27:[2,15],26:[2,15]},{16:[1,41],6:[1,13],7:[1,14],8:[1,15],9:[1,16],10:[1,17],11:[1,18],12:[1,19],13:[1,20],14:[1,21],17:[1,22]},{20:[1,42]},{22:[1,43]},{16:[1,44],25:45,4:46,11:[1,3],10:[1,4],15:[1,5],18:[1,6],19:[1,7],20:[1,8],22:[1,9],23:[1,10],24:[1,11]},{6:[2,2],7:[1,14],8:[1,15],9:[1,16],10:[1,17],11:[1,18],12:[1,19],13:[1,20],14:[1,21],17:[1,22],5:[2,2],16:[2,2],27:[2,2],26:[2,2]},{4:47,11:[1,3],10:[1,4],15:[1,5],18:[1,6],19:[1,7],20:[1,8],22:[1,9],23:[1,10],24:[1,11]},{4:48,11:[1,3],10:[1,4],15:[1,5],18:[1,6],19:[1,7],20:[1,8],22:[1,9],23:[1,10],24:[1,11]},{6:[2,8],7:[2,8],8:[2,8],9:[2,8],10:[1,17],11:[1,18],12:[1,19],13:[1,20],14:[1,21],17:[1,22],5:[2,8],16:[2,8],27:[2,8],26:[2,8]},{4:49,11:[1,3],10:[1,4],15:[1,5],18:[1,6],19:[1,7],20:[1,8],22:[1,9],23:[1,10],24:[1,11]},{6:[2,7],7:[2,7],8:[2,7],9:[2,7],10:[1,17],11:[1,18],12:[1,19],13:[1,20],14:[1,21],17:[1,22],5:[2,7],16:[2,7],27:[2,7],26:[2,7]},{6:[2,6],7:[1,14],8:[1,15],9:[2,6],10:[1,17],11:[1,18],12:[1,19],13:[1,20],14:[1,21],17:[1,22],5:[2,6],16:[2,6],27:[2,6],26:[2,6]},{6:[2,9],7:[2,9],8:[2,9],9:[2,9],10:[2,9],11:[2,9],12:[1,19],13:[1,20],14:[1,21],17:[1,22],5:[2,9],16:[2,9],27:[2,9],26:[2,9]},{6:[2,10],7:[2,10],8:[2,10],9:[2,10],10:[2,10],11:[2,10],12:[1,19],13:[1,20],14:[1,21],17:[1,22],5:[2,10],16:[2,10],27:[2,10],26:[2,10]},{6:[2,11],7:[2,11],8:[2,11],9:[2,11],10:[2,11],11:[2,11],12:[2,11],13:[2,11],14:[1,21],17:[1,22],5:[2,11],16:[2,11],27:[2,11],26:[2,11]},{6:[2,12],7:[2,12],8:[2,12],9:[2,12],10:[2,12],11:[2,12],12:[2,12],13:[2,12],14:[1,21],17:[1,22],5:[2,12],16:[2,12],27:[2,12],26:[2,12]},{6:[2,13],7:[2,13],8:[2,13],9:[2,13],10:[2,13],11:[2,13],12:[2,13],13:[2,13],14:[2,13],17:[1,22],5:[2,13],16:[2,13],27:[2,13],26:[2,13]},{5:[2,16],6:[2,16],7:[2,16],8:[2,16],9:[2,16],10:[2,16],11:[2,16],12:[2,16],13:[2,16],14:[2,16],17:[2,16],16:[2,16],27:[2,16],26:[2,16]},{5:[2,21],6:[2,21],7:[2,21],8:[2,21],9:[2,21],10:[2,21],11:[2,21],12:[2,21],13:[2,21],14:[2,21],17:[2,21],16:[2,21],27:[2,21],26:[2,21]},{5:[2,23],6:[2,23],7:[2,23],8:[2,23],9:[2,23],10:[2,23],11:[2,23],12:[2,23],13:[2,23],14:[2,23],17:[2,23],16:[2,23],27:[2,23],26:[2,23]},{5:[2,25],6:[2,25],7:[2,25],8:[2,25],9:[2,25],10:[2,25],11:[2,25],12:[2,25],13:[2,25],14:[2,25],17:[2,25],16:[2,25],27:[2,25],26:[2,25]},{16:[1,50]},{26:[1,51],27:[1,52],6:[1,13],7:[1,14],8:[1,15],9:[1,16],10:[1,17],11:[1,18],12:[1,19],13:[1,20],14:[1,21],17:[1,22],16:[2,27]},{6:[2,3],7:[2,3],8:[2,3],9:[2,3],10:[1,17],11:[1,18],12:[1,19],13:[1,20],14:[1,21],17:[1,22],5:[2,3],16:[2,3],27:[2,3],26:[2,3]},{6:[2,5],7:[2,5],8:[2,5],9:[2,5],10:[1,17],11:[1,18],12:[1,19],13:[1,20],14:[1,21],17:[1,22],5:[2,5],16:[2,5],27:[2,5],26:[2,5]},{6:[2,4],7:[2,4],8:[2,4],9:[2,4],10:[1,17],11:[1,18],12:[1,19],13:[1,20],14:[1,21],17:[1,22],5:[2,4],16:[2,4],27:[2,4],26:[2,4]},{5:[2,26],6:[2,26],7:[2,26],8:[2,26],9:[2,26],10:[2,26],11:[2,26],12:[2,26],13:[2,26],14:[2,26],17:[2,26],16:[2,26],27:[2,26],26:[2,26]},{25:53,4:46,11:[1,3],10:[1,4],15:[1,5],18:[1,6],19:[1,7],20:[1,8],22:[1,9],23:[1,10],24:[1,11]},{25:54,4:46,11:[1,3],10:[1,4],15:[1,5],18:[1,6],19:[1,7],20:[1,8],22:[1,9],23:[1,10],24:[1,11]},{16:[2,28]},{16:[2,29]}],
    defaultActions: {12:[2,1],53:[2,28],54:[2,29]},
    parseError: function parseError(str, hash) {
      throw new Error(str);
    },
    parse: function parse(input) {
      var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
      this.lexer.setInput(input);
      this.lexer.yy = this.yy;
      this.yy.lexer = this.lexer;
      this.yy.parser = this;
      if (typeof this.lexer.yylloc == "undefined") {
	this.lexer.yylloc = {};
      }
      var yyloc = this.lexer.yylloc;
      lstack.push(yyloc);
      var ranges = this.lexer.options && this.lexer.options.ranges;
      if (typeof this.yy.parseError === "function") {
	this.parseError = this.yy.parseError;
      }

      function popStack(n) {
	stack.length = stack.length - 2 * n;
	vstack.length = vstack.length - n;
	lstack.length = lstack.length - n;
      }


      function lex() {
	var token;
	token = self.lexer.lex() || 1;
	if (typeof token !== "number") {
	  token = self.symbols_[token] || token;
	}
	return token;
      }

      var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
      while (true) {
	state = stack[stack.length - 1];
	if (this.defaultActions[state]) {
	  action = this.defaultActions[state];
	} else {
	  if (symbol === null || typeof symbol == "undefined") {
	    symbol = lex();
	  }
	  action = table[state] && table[state][symbol];
	}
	_handle_error:
	if (typeof action === "undefined" || !action.length || !action[0]) {
	  var errStr = "";
	  if (!recovering) {
	    expected = [];
	    for (p in table[state]) {
	      if (this.terminals_[p] && p > 2) {
                expected.push("'" + this.terminals_[p] + "'");
	      }
	    }
	    if (this.lexer.showPosition) {
	      errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
	    } else {
	      errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
	    }
	    this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
	  }
	  if (recovering == 3) {
	    if (symbol == EOF) {
	      throw new Error(errStr || "Parsing halted.");
	    }
	    yyleng = this.lexer.yyleng;
	    yytext = this.lexer.yytext;
	    yylineno = this.lexer.yylineno;
	    yyloc = this.lexer.yylloc;
	    symbol = lex();
	  }
	  while (1) {
	    if (TERROR.toString() in table[state]) {
	      break;
	    }
	    if (state === 0) {
	      throw new Error(errStr || "Parsing halted.");
	    }
	    popStack(1);
	    state = stack[stack.length - 1];
	  }
	  preErrorSymbol = symbol == 2 ? null : symbol;
	  symbol = TERROR;
	  state = stack[stack.length - 1];
	  action = table[state] && table[state][TERROR];
	  recovering = 3;
	}
	if (action[0] instanceof Array && action.length > 1) {
	  throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
	}
	switch (action[0]) {
	case 1:
	  stack.push(symbol);
	  vstack.push(this.lexer.yytext);
	  lstack.push(this.lexer.yylloc);
	  stack.push(action[1]);
	  symbol = null;
	  if (!preErrorSymbol) {
	    yyleng = this.lexer.yyleng;
	    yytext = this.lexer.yytext;
	    yylineno = this.lexer.yylineno;
	    yyloc = this.lexer.yylloc;
	    if (recovering > 0) {
	      recovering--;
	    }
	  } else {
	    symbol = preErrorSymbol;
	    preErrorSymbol = null;
	  }
	  break;
	case 2:
	  len = this.productions_[action[1]][1];
	  yyval.$ = vstack[vstack.length - len];
	  yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
	  if (ranges) {
	    yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
	  }
	  r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack, this.address);
	  if (typeof r !== "undefined") {
	    return r;
	  }
	  if (len) {
	    stack = stack.slice(0, - 1 * len * 2);
	    vstack = vstack.slice(0, - 1 * len);
	    lstack = lstack.slice(0, - 1 * len);
	  }
	  stack.push(this.productions_[action[1]][0]);
	  vstack.push(yyval.$);
	  lstack.push(yyval._$);
	  newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
	  stack.push(newState);
	  break;
	case 3:
	  return true;
	default:;
	}
      }
      return true;
    }};
  /* Jison generated lexer */
  var lexer = (function(){
    var lexer = ({
      EOF:1,
      parseError:function parseError(str, hash) {
	if (this.yy.parser) {
	  this.yy.parser.parseError(str, hash);
	} else {
	  throw new Error(str);
	}
      },
      setInput:function (input) {
	this._input = input;
	this._more = this._less = this.done = false;
	this.yylineno = this.yyleng = 0;
	this.yytext = this.matched = this.match = "";
	this.conditionStack = ["INITIAL"];
	this.yylloc = {first_line: 1, first_column: 0, last_line: 1, last_column: 0};
	if (this.options.ranges) {
	  this.yylloc.range = [0, 0];
	}
	this.offset = 0;
	return this;
      },
      input:function () {
	var ch = this._input[0];
	this.yytext += ch;
	this.yyleng++;
	this.offset++;
	this.match += ch;
	this.matched += ch;
	var lines = ch.match(/(?:\r\n?|\n).*/g);
	if (lines) {
	  this.yylineno++;
	  this.yylloc.last_line++;
	} else {
	  this.yylloc.last_column++;
	}
	if (this.options.ranges) {
	  this.yylloc.range[1]++;
	}
	this._input = this._input.slice(1);
	return ch;
      },
      unput:function (ch) {
	var len = ch.length;
	var lines = ch.split(/(?:\r\n?|\n)/g);
	this._input = ch + this._input;
	this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
	this.offset -= len;
	var oldLines = this.match.split(/(?:\r\n?|\n)/g);
	this.match = this.match.substr(0, this.match.length - 1);
	this.matched = this.matched.substr(0, this.matched.length - 1);
	if (lines.length - 1) {
	  this.yylineno -= lines.length - 1;
	}
	var r = this.yylloc.range;
	this.yylloc = {first_line: this.yylloc.first_line, last_line: this.yylineno + 1, first_column: this.yylloc.first_column, last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len};
	if (this.options.ranges) {
	  this.yylloc.range = [r[0], r[0] + this.yyleng - len];
	}
	return this;
      },
      more:function () {
	this._more = true;
	return this;
      },
      less:function (n) {
	this.unput(this.match.slice(n));
      },
      pastInput:function () {
	var past = this.matched.substr(0, this.matched.length - this.match.length);
	return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
      },
      upcomingInput:function () {
	var next = this.match;
	if (next.length < 20) {
	  next += this._input.substr(0, 20 - next.length);
	}
	return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      showPosition:function () {
	var pre = this.pastInput();
	var c = (new Array(pre.length + 1)).join("-");
	return pre + this.upcomingInput() + "\n" + c + "^";
      },
      next:function () {
	if (this.done) {
	  return this.EOF;
	}
	if (!this._input) {
	  this.done = true;
	}
	var token, match, tempMatch, index, col, lines;
	if (!this._more) {
	  this.yytext = "";
	  this.match = "";
	}
	var rules = this._currentRules();
	for (var i = 0; i < rules.length; i++) {
	  tempMatch = this._input.match(this.rules[rules[i]]);
	  if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
	    match = tempMatch;
	    index = i;
	    if (!this.options.flex) {
	      break;
	    }
	  }
	}
	if (match) {
	  lines = match[0].match(/(?:\r\n?|\n).*/g);
	  if (lines) {
	    this.yylineno += lines.length;
	  }
	  this.yylloc = {first_line: this.yylloc.last_line, last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
	  this.yytext += match[0];
	  this.match += match[0];
	  this.matches = match;
	  this.yyleng = this.yytext.length;
	  if (this.options.ranges) {
	    this.yylloc.range = [this.offset, this.offset += this.yyleng];
	  }
	  this._more = false;
	  this._input = this._input.slice(match[0].length);
	  this.matched += match[0];
	  token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
	  if (this.done && this._input) {
	    this.done = false;
	  }
	  if (token) {
	    return token;
	  } else {
	    return;
	  }
	}
	if (this._input === "") {
	  return this.EOF;
	} else {
	  return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {text: "", token: null, line: this.yylineno});
	}
      },
      lex:function lex() {
	var r = this.next();
	if (typeof r !== "undefined") {
	  return r;
	} else {
	  return this.lex();
	}
      },
      begin:function begin(condition) {
	this.conditionStack.push(condition);
      },
      popState:function popState() {
	return this.conditionStack.pop();
      },
      _currentRules:function _currentRules() {
	return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
      },
      topState:function () {
	return this.conditionStack[this.conditionStack.length - 2];
      },
      pushState:function begin(condition) {
	this.begin(condition);
      }});
    lexer.options = {};
    lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
      var YYSTATE = YY_START;
      switch ($avoiding_name_collisions) {
      case 0:
        break;
      case 1:
        return 23;
        break;
      case 2:
        return 23;
        break;
      case 3:
        return 20;
        break;
      case 4:
        return 22;
        break;
      case 5:
        return 24;
        break;
      case 6:
        return 18;
        break;
      case 7:
        break;
      case 8:
        return " ";
        break;
      case 9:
        return ".";
        break;
      case 10:
        return 21;
        break;
      case 11:
        return 26;
        break;
      case 12:
        return 27;
        break;
      case 13:
        return 12;
        break;
      case 14:
        return 13;
        break;
      case 15:
        return 11;
        break;
      case 16:
        return 10;
        break;
      case 17:
        return 14;
        break;
      case 18:
        return 15;
        break;
      case 19:
        return 16;
        break;
      case 20:
        return 8;
        break;
      case 21:
        return 7;
        break;
      case 22:
        return 9;
        break;
      case 23:
        return "PI";
        break;
      case 24:
        return 19;
        break;
      case 25:
        return "\"";
        break;
      case 26:
        return "'";
        break;
      case 27:
        return "!";
        break;
      case 28:
        return 6;
        break;
      case 29:
        return 17;
        break;
      case 30:
        return 5;
        break;
      default:;
      }
    };
    lexer.rules = [/^(?:\s+)/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:\$[A-Za-z]+\$[0-9]+)/,/^(?:[A-Za-z]+[0-9]+)/,/^(?:[A-Za-z]+)/,/^(?:[0-9]+(\.[0-9]+)?)/,/^(?:\$)/,/^(?: )/,/^(?:\.)/,/^(?::)/,/^(?:;)/,/^(?:,)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:\()/,/^(?:\))/,/^(?:>)/,/^(?:<)/,/^(?:NOT\b)/,/^(?:PI\b)/,/^(?:E\b)/,/^(?:")/,/^(?:')/,/^(?:!)/,/^(?:=)/,/^(?:%)/,/^(?:$)/];
    lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],"inclusive":true}};
    return lexer; 
  })();
  parser.lexer = lexer;

  var makeParser = function (row, col) { 
    var p = Object.create(parser);
    p.yy = {};
    p.address = [row, col];
    return p;
  };

//////////////////////////////////////////////////////////////////////////////

  var isExpr = function (str) { return str.charAt(0)==='=' && str.length>1; },
      
      isNumber = function (str) { return ! isNaN(str-0); },
      
      getType = function (input) {
	if (isNumber(input)) { return 'number'; }
	else if (isExpr(input)) { return 'expr'; }
	else { return 'string'; }
      },
      
      evaluate = function (row, col, x) {
	var p = makeParser(row, col);
	return getType(x)==='expr'? p.parse(x.slice(1)).toString() : x;
      },

      getColumnNumber = function (str) {
	var i, c, count = 0, len = str.length,
	    alphabet = 'abcdefghijklmnopqrstuvwxyz',
	    re = new RegExp('^[a-z]+$');
	str = str.toLowerCase();
	if (re.exec(str)) {
	  for (i=0; i<len; i+=1) {
	    c = alphabet.indexOf(str.charAt(i)) + 1;
	    count += c * Math.pow(26, (len-i-1));
	  }
	  return count;
	} else {
	  console.log('invalid column expression: getColumnNumber');
	  return false;
	}
      },

      getCellAddress = function (str) {

	var row, col, re = new RegExp('^([a-z]+)([0-9]+)$','i'), m = re.exec(str);
	if (m) {
	  row = m[2] - 1;
	  col = getColumnNumber(m[1]) - 1;
	  return [row, col];
	} else {
	  console.log('invalid column expression: getColumnNumber');
	  return false;
	}
      },

      getColumnCode = function (col) {

	var alphabet = 'abcdefghijklmnopqrstuvwxyz',
	    code = alphabet.charAt(col%26);
	col = (col + 1);

	while (col/26 > 1) {
	  col = col/26;
	  code = alphabet.charAt(col%26 - 1) + code;
	}
	return code;
      },

      getCellCode = function (row, col) {
	
	return getColumnCode(col) + (row + 1).toString();
      },

      arrayHasAddress = function (array, address) {

	var i, len = array.length, r = address[0], c = address[1] ;
	for (i=0; i<len; i++) {
	  if (array[i][0] === r && array[i][1] === c) {
	    return i;
	  }
	}
	return -1;
      },

      makeCell = function (row, col, input) {
	  return {
	    'input': input,
	    'type': getType(input),
	    'value': evaluate(row, col, input),
	    'row': row,
	    'col': col,
	    dependencies: [],
	    dependents: []
	  };
      },

      getValues = function (matrix) {
	var i, j, a, m = matrix.length, n = matrix[0].length, v = [];
	
	for (i=0; i<m; i+=1) {
	  a = [];
	    for (j=0; j<n; j+=1) {
	      a[j] = matrix[i][j].value;
	    }
	  v[i] = a;
	}
	  return v;
      },

      cellHandler = {

	cellValue: function (targetAddress, parentCode) {
	  var cell, parent, parentAddress = getCellAddress(parentCode),
	      parentRow = parentAddress[0], parentCol = parentAddress[1],
	      targetRow = targetAddress[0], targetCol = targetAddress[1];

	  cell = merlin.data[targetRow][targetCol];
	  parent = merlin.data[parentRow][parentCol];

	  if (arrayHasAddress(cell.dependencies, [parentRow, parentCol]) === -1) {
	    cell.dependencies.push([parentRow, parentCol]);
	  }

	  if (arrayHasAddress(parent.dependents, [targetRow, targetCol]) === -1) {
	    parent.dependents.push([targetRow, targetCol]);
	  }

	  return merlin.$root.handsontable('getDataAtCell', parentRow, parentCol);
	}
      },
            
      merlin = {

	$root: null,
	
	initVal: '',

	data: [],

	eventRegistry: {},

	editProxy: {
	  status: false,
	  address: []
	},

	initialize: function ($el) {
	  this.$root = $el;
	  this.buildMenu();

	  parser.lexer.cellHandler = cellHandler;

	  var i, j, a;
	  for (i=0; i<properties.rows; i+=1) {
	    a = [];
	    for (j=0; j<properties.cols; j+=1) {
	      a[j] = makeCell(i, j, this.initVal);
	    }
	    this.data[i] = a;
	  }
	  this.on('beginEdit', this.beginEditMode);
	  this.on('finishEdit', this.finishEditMode);
	},

	fire: function (event, parameters) {
	  var array, func, handler, i, type = typeof event === 'string' ? event : event.type;
	  if (this.eventRegistry.hasOwnProperty(type)) {
	    array = this.eventRegistry[type];
	    for (i = 0; i < array.length; i += 1) {
	      handler = array[i];
	      func = handler.method;
	      if (typeof func === 'string') {
		func = this[func];
	      }
	      func.apply(this, parameters);
	    }
	  }
	},

	on: function (type, method) {
	  var handler = {
	    method: method
	  };
	  if (this.eventRegistry.hasOwnProperty(type)) {
	    this.eventRegistry[type].push(handler);
	  } else {
	    this.eventRegistry[type] = [handler];
	  }
	},

	off: function (method) {},
  
	buildMenu: function () {
	  var $menu = $('<div></div>').addClass('btn-group')
		.append('<a href="#" class="btn"><i class="icon-picture"></i></a>')
		.append('<a href="#" class="btn"><i class="icon-fullscreen"></i></a>');

	  this.$root.prepend($menu);
	},
	
	handleCellUpdate: function (row, col, input) {

	  var cell = this.data[row][col];

	  if (input !== undefined) {
	    cell.type = getType(input);
	    cell.input = input;
	  }
	  cell.value = evaluate(row, col, cell.input);
	  if (cell.type === 'expr') {
	    this.$root.handsontable('setDataAtCell', row, col, cell.value, false, 'update');
	  }
	  
	  var i, d, len = cell.dependents.length;
	  for (i=0; i<len; i+=1) {
	    d = cell.dependents[i];
	    this.handleCellUpdate(d[0], d[1]);
	  }
	},
	
	update: function (changes) {

	  var k, i, j, input, cell, type, n = changes.length, self = this;
	  for (k=0; k<n; k+=1) {
	    i = changes[k][0];
	    j = changes[k][1];
	    input = changes[k][3];
	    this.handleCellUpdate(i, j, input);
	  }
	},

	beginEditMode: function (i, j, textarea, editProxy) {

	  this.setAsInput(i, j);
	  this.editProxy.status = true;
	},
	
	finishEditMode: function () {

	  this.editProxy.status = false;
	},
	
	setAsInput: function (i, j) {

	  if (this.data[i][j].type === 'expr') {
	    this.$root.handsontable('setDataAtCell', i, j, this.data[i][j].input, false, 'update');
	  }
	}
      },

      properties = {
	rows: 10,
	cols: 10,
	rowHeaders: true,
	colHeaders: true,
	enterBeginsEditing: true,

	onSelection: function (rStart, cStart, rEnd, cEnd) {

	  if (merlin.editProxy.status) {

	    var address = merlin.editProxy.address,
		current = merlin.editProxy.textarea.val(),
		cellCode = getCellCode(rStart, cStart);

//	    $(merlin.editProxy.textarea).val(current + cellCode);
	  }
	},

	onBeginEditing: function (row, col, textarea, editProxy) {
	  console.log(editProxy);
	  merlin.fire('beginEdit', [row, col, textarea, editProxy]);
	},

	onFinishEditing: function () {
	  merlin.fire('finishEdit');
	},

	onBeforeChange: function (changes) {
	},

	onChange: function (changes, source) {
	  if (source !== 'update') { merlin.update(changes); }
	}

      };

  $.fn.extend({
    
    merlin: function (config) {

      $.extend(properties, config||{});
      merlin.initialize(this);
      return this
	.handsontable(properties)
	.handsontable('loadData', getValues(merlin.data));
    }

  });

}(jQuery));
