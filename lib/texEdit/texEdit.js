(function ($) {

/*   * Replace rules
   *  example : a in A ==> a in B is converted into
   *            a \in A \Rightarrow a \in B
   */

  /*
    var aliasKeywords (Array)
    Description : An array containing info about alias of keywords.
    var noBackslashKeywords (Array)
    Description : The editor will add backslash automatically before keywords in this array.
    var replaceRule : (Array)
    Description : An aray containing info about replacing words.
    Elements : An array [RegEx, TeX]
    function makeReplaceRule()
    Description : A function to append noBackslashKeywords and aliasKeywords to replaceRule.
  */
  var aliasKeywords = [
    ['del','nabla'],
    ['nl','newline'],
    ['ohm','Omega'],
    ['Ohm','Omega'],
    ['union','cup'],
    ['intersect','cap'],
    ['bcap','bigcap'],
    ['bcup','bigcup'],
    ['bsqcup','bigsqcup'],
    ['Therefore','therefore'],
    ['Because','because'],
    ['llfloor','left \\lfloor'],
    ['rrfloor','right \\rfloor'],
    ['llceil','left \\lceil'],
    ['rrceil','right \\rceil'],
    ['EE','exists'],
    ['Forall','forall'],
    ['rd','partial'],
    ['heart','heartsuit'],
    ['diamond','diamondsuit'],
    ['club','clubsuit'],
    ['spade','spadesuit'],
    ['Triangle','triangle'],
    ['QED','Box']
  ];

  var noBackslashKeywords = [
    /*General*/'to','not','mid','parallel','color','left','right','begin','end','mathbb','newline',
    'LaTeX','TeX','unicode','prime','smile','frown','bowtie','Join','overset','underset',
    'overbrace','underbrace','overleftarrow','overrightarrow','overline','underline',
    'widetilde','widehat','backslash',
    /*Basic*/'frac','sqrt','times','therefore','because','small','tiny','large','LARGE','huge','phantom',
    'cdot','cdots','ldots','vdots','ddots','dagger','ddagger','propto','sim','lfloor','rfloor','lceil',
    'rceil','langle','rangle','hbar','imath','jmath','ell','angle','prod',
    /*Arrows*/'uparrow','downarrow','updownarrow','Uparrow','Downarrow','Updownarrow','nwarrow','nearrow',
    'swarrow','searrow',
    /*Trig*/'sin','cos','tan','csc','sec','cot','sinh','cosh','coth','arcsin','arccos','arctan',
    /*LogExp*/'log','ln','lg','exp',
    /*Calculus*/'sum','liminf','limsup','lim','oint','int','infty','max','min','nabla','partial',
    /*S&R&L*/'lnot','in','ni','subset','subseteq','subsetneq','supsetneq','sqsubset','sqsubseteq','supset',
    'supseteq','sqsubset','sqsupset','sqsupseteq','cup','cap','sqcup','sqcap','setminus','oplus','ominus',
    'otimes','oslash','odot','perp','bigcap','bigcup','bigsqcup','forall','exists','neg','emptyset',
    /*Accents*/'hat','acute','bar','dot','check','grave','vec','ddot','breve','tilde',
    /*Greek (capital)*/'Gamma','Delta','Theta','Lambda','Xi','Pi','Sigma','Upsilon','Phi','Psi','Omega',
    /*Greek (small)*/'alpha','beta','gamma','delta','epsilon','varepsilon','zeta','eta','theta','vartheta',
    'iota','kappa','lambda','mu','nu','xi','pi','varpi','rho','varrho','sigma','varsigma','tau','upsilon',
    'phi','varphi','chi','psi','omega',
    /*Misc*/'aleph','beth','gimel','daleth','Pr','copyright','Re','Im','natural','sharp','flat',
    'Box','Diamond','triangle','clubsuit','diamondsuit','heartsuit','spacesuit'
  ];

  var replaceRule = (function () {

    replaceRule = [
      ['\\<\\=\\=\\=','\\Longleftarrow'],
      ['\\=\\=\\=\\>','\\Longrightarrow'],
      ['\\<\\=\\=\\>','\\Longleftrightarrow'],
      ['\\<\\-\\-\\>','\\longleftrightarrow'],
      ['\\|\\-\\-\\>','\\longmapsto'],
      
      ['\\.\\.\\.','\\cdots'],
      
      ['\\<\\|\\=','\\unlhd'],
      ['\\|\\>\\=','\\unrhd'],
      
      ['\\<\\!\\=','\\lneq'],
      ['\\>\\!\\=','\\gneq'],
      
      ['\\!\\=\\=','\\not\\equiv'],
      ['\\|\\-\\>','\\mapsto'],
      ['\\<\\-\\>','\\leftrightarrow'],
      ['\\<\\=\\>','\\Leftrightarrow'],
      
      ['\\<\\=\\=','\\Leftarrow'],
      ['\\=\\=\\>','\\Rightarrow'],
      ['\\<\\-\\-','\\longleftarrow'],
      ['\\-\\-\\>','\\longrightarrow'],
      ['\\<\\-','\\leftarrow'],
      ['\\-\\>','\\rightarrow'],
      ['\\~\\>','\\leadsto'],
      
      ['\\!\\=','\\neq'],
      ['\\=\\=','\\equiv'],
      ['\\:\\=','\\overset{\\underset{\\mathrm{def}}{}}{=}'],
      ['\\~\\=','\\cong'],
      ['\\~\\-','\\simeq'],
      ['\\~\\~','\\approx'],
      
      ['\\<\\=','\\leq'],
      ['\\>\\=','\\geq'],
      ['\\<\\<','\\ll'],
      ['\\>\\>','\\gg'],
      
      ['\\<\\|','\\lhd'],
      ['\\|\\>','\\rhd'],
      ['\\|\\|','\\parallel'],
      
      ['\\+\\-','\\pm'],
      ['\\-\\+','\\mp'],
      ['\\*\\*','\\times'],
      ['\\/\\/','\\div'],
      ['\\\\\\-','\\setminus'],
      
      ['\\\\\\/','\\vee'],
      ['\\/\\\\','\\wedge'],
      ['\\|\\-','\\vdash'],
      ['\\|\\=','\\models'],
      ['\\-\\|','\\dashv'],
      
      //newline
      ['\\r',''],
      ['\\n\\n','\\newline']
    ]; //Default replace rules. Longest comes first.

    for (i=0;i<noBackslashKeywords.length;i++) {
      aliasKeywords.push([noBackslashKeywords[i],noBackslashKeywords[i]]);
    }
    for (i=0;i<aliasKeywords.length;i++) {
      replaceRule.push(['([^A-Za-z0-9\\\\]|^)('+aliasKeywords[i][0]+')([^A-Za-z0-9]|$)','$1\\'+aliasKeywords[i][1]+'$3']);
    }
    for (i=0;i<replaceRule.length;i++) {
      replaceRule[i][0] = new RegExp(replaceRule[i][0],'g');
    }

    return replaceRule;

  }());
  
  
  var eqPHolder = '\\placeholder'; //the placeholder string.

  var buttonInfo = {dx:80,dy:30,colNum:7}; //information of arrange of buttons. dx,dy : distance between button chunks,
  //colNum : number of button chunks in a row.

  var texfy = function (tex) { //EZ TeX -> TeX
    //replace placeholders
    var i = 0;

    var colArr = ['','red','orange','green','blue','cyan','purple','magenta'];

    if (eqPHolder !== '') {
      while (tex.indexOf(eqPHolder) >= 0) {
	var col = colArr[i%colArr.length];
	tex = tex.replace(eqPHolder, (col === '' ? '':'\\color{' +
				      colArr[i%colArr.length] +
				      '}') + '{\\small\\bigcirc}');
	i++;
      }
    }
    //replace by replaceRule
    tex = tex.replace(/ /g, '  ');

    for (i=0; i<replaceRule.length; i++) {
      tex = tex.replace(replaceRule[i][0], ' '+replaceRule[i][1]+' ');
    }

    tex = tex.replace(/\</g,' \\lt ').replace(/\>/g,' \\gt ');
    while (tex.indexOf('  ') >= 0) { 
      tex = tex.replace(/  /g, ' '); 
    }
    tex = tex.replace(/([^A-Za-z0-9]|^) /g,'$1');
    tex = tex.replace(/ ([^A-Za-z0-9]|$)/g,'$1');

    return tex;
  };

  var delegate = function (scope, func, data) {//To use in setTimeout(). For IE.
    return function () {
      func.apply(scope, Array.prototype.slice.apply(arguments).concat(data));
    };
  };

  /**
   * generate the list of buttons in the editor
   **/

  /*
    var atLocal (boolean)
    Description : Will the images used on buttons be loaded from img/ directory?
    var localDirectory (String)
    Description : local directory of image file. Default : './img/'
    var editButtons (Array)
    Description : List of buttons.
    Elements : An object (chunk of buttons).
    title : Title of the chunk of buttons.
    display : A 'button' to be displayed to preview the chunk of buttons.
    content : List of buttons in the chunk of buttons.
    function _$_(title,texInsert,texDisp,latexRender,colspan)
    Description : this function makes an object which contains data of a button.
    Arguments
    title : title of the button
    texInsert : TeX to be inserted. Use '@' to represent the selected text. Default : title
    texDisp : TeX to be displayed. Default : texInsert
    latexRender : LaTeX renderer to be used. Use '@' to represent LaTeX. Default : Google Chart API
    colspan : Colspan value of a button. Default : 1
    Return value : An object.
    title : Title of the button.
    img : Image URL of the button.
    data : TeX to be inserted.
    colspan : colspan of the button.
  */
  var atLocal = true; //see function _$_.
  var localDirectory = "./lib/texEdit/img/";
  //test purpose
  //localDirectory = "https://github.com/123jimin/EZ-web-TeX-editor/raw/master/img/";
  var _$_ = function (title, texInsert, texDisp, latexRender, colspan) {
    
    if(title==='<-') {
      atLocal = false;
    } //If list of button is completed and images are all saved,
    //then atLocal = true always and this function should be modified.
    var encodeFunction = encodeURIComponent; //Encoding function to used.
    if (!title) {
      return {'title':'','img':'','data':''}; //empty button
    }
    if (!texInsert||texInsert==0) {
      texInsert = title;
    }
    if (!texDisp||texDisp==0) {
      texDisp = texInsert;
    }
    if (latexRender=='codecogs') {
      latexRender = 'http://latex.codecogs.com/png.latex?@'; //CodeCogs LaTeX renderer
    }
    if (!colspan||colspan==0) {
      colspan=1;
    }

    texDisp = texDisp.replace(/\@/g,'{\\small\\bigcirc}'); //Change @ to a circle.

    if (atLocal) {
      latexRender = localDirectory+'@.png'; //local image file
      encodeFunction = function (s) {
	return s
	  .replace(/\\/g,'_')
	  .replace(/( |\{|\})+/g,'')
	  .replace(/\+/g,'P')
	  .replace(/\-/g,'M')
	  .replace(/\>/g,'R')
	  .replace(/\</g,'L')
	  .replace(/\=/g,'EQ')
	  .replace(/\./g,'D')
	  .replace(/([A-Z])/g,'!$1')};
    } else {
      if (!latexRender||latexRender==0) {
	latexRender = 'http://chart.googleapis.com/chart?cht=tx&chl=@'; //Default LaTeX renderer.
      }
    }
    texDisp = latexRender.replace('@',encodeFunction(texfy(texDisp)));
    return {
      'title':title,
      'img':texDisp,
      'data':texInsert,
      'colspan':colspan
    };
  };

  var editButtons = [
    //GREEK SMALL LETTERS
    {
      'title':'Greek Small Letters',
      'display':_$_('alpha','alpha','alpha beta gamma'),
      'content':[
	[
	  _$_('alpha'),
	  _$_('beta'),
	  _$_('gamma'),
	  _$_('delta'),
	  _$_('epsilon'),
	  _$_('varepsilon')
	],
	[
	  _$_('zeta'),
	  _$_('eta'),
	  _$_('theta'),
	  _$_('vartheta'),
	  _$_('iota'),
	  _$_('kappa')
	],
	[
	  _$_('lambda'),
	  _$_('mu'),
	  _$_('nu'),
	  _$_('xi'),
	  _$_('pi'),
	  _$_('varpi')
	],
	[
	  _$_('rho'),
	  _$_('varrho'),
	  _$_('sigma'),
	  _$_('varsigma'),
	  _$_('tau'),
	  _$_('upsilon')
	],
	[
	  _$_('phi'),
	  _$_('varphi'),
	  _$_('chi'),
	  _$_('psi'),
	  _$_('omega')
	]
      ]
    },
    //GREEK LARGE LETTERS & HEBREW
    {
      'title':'Greek Large Letters, Hebrew',
      'display':_$_('Gamma',0,'Gamma Pi aleph'),
      'content':[
	[
	  _$_('Gamma'),
	  _$_('Delta'),
	  _$_('Theta'),
	  _$_('Lambda'),
	  _$_('Xi')
	],
	[
	  _$_('Pi'),
	  _$_('Sigma'),
	  _$_('Upsilon'),
	  _$_('Phi'),
	  _$_('Psi')
	],
	[
	  _$_('Omega'),
	  _$_('aleph'),
	  _$_('beth',0,0,'codecogs'),
	  _$_('gimel',0,0,'codecogs'),
	  _$_('daleth',0,0,'codecogs')
	]
      ]
    },
    //CONSTRUCTIONS
    {
      'title':'Constructions',
      'display':_$_('hat',0,'hat{@} grave{@} acute{@}'),
      'content':[
	[
	  _$_('hat','hat{@}'),
	  _$_('check','check{@}'),
	  _$_('grave','grave{@}'),
	  _$_('acute','acute{@}'),
	  _$_('breve','breve{@}'),
	  _$_('bar','bar{@}')
	],
	[
	  _$_('vec','vec{@}'),
	  _$_('tilde','tilde{@}'),
	  _$_('dot','dot{@}'),
	  _$_('ddot','ddot{@}'),
	  _$_('widehat','widehat{@}','widehat{abc}',0,2)
	],
	[
	  _$_('overline','overline{@}','overline{abc}',0,2),
	  _$_('widetilde','widetilde{@}','widetilde{abc}',0,2),
	  _$_('overbrace','overbrace{@}','overbrace{abc}',0,2)
	],
	[
	  _$_('overleftarrow','overleftarrow{@}','overleftarrow{abc}','codecogs',2),
	  _$_('overrightarrow','overrightarrow{@}','overrightarrow{abc}','codecogs',2),
	  _$_('underbrace','underbrace{@}','underbrace{abc}',0,2)
	],
	[
	  _$_('underline','underline{@}','underline{abc}',0,2),
	  _$_('overset','overset{#}{@}','overset{@}{abc}'),
	  _$_('underset','underset{#}{@}','underset{@}{abc}'),
	]
      ]
    },
    //BINARY OPERATORS
    {
      'title':'Binary Operators',
      'display':_$_('+-',0,'+- otimes cap'),
      'content':[
	[
	  _$_('+-'),
	  _$_('-+'),
	  _$_('**'),
	  _$_('//'),
	  _$_('/\\'),
	  _$_('\\/')
	],
	[
	  _$_('cap'),
	  _$_('cup'),
	  _$_('\\-'),
	  _$_('sqcap'),
	  _$_('sqcup'),
	  _$_('\\uplus')
	],
	[
	  _$_('oplus'),
	  _$_('ominus'),
	  _$_('otimes'),
	  _$_('odot'),
	  _$_('oslash'),
	  _$_('\\bigcirc')
	],
	[
	  _$_('\\ast'),
	  _$_('\\star'),
	  _$_('\\bullet'),
	  _$_('cdot'),
	  _$_('\\circ'),
	  _$_('\\diamond')
	],
	[
	  _$_('\\wr'),
	  _$_('dagger'),
	  _$_('ddagger'),
	  _$_('\\amalg'),
	  _$_('\\triangleleft'),
	  _$_('\\triangleright')
	],
	[
	  _$_('\\bigtriangleup'),
	  _$_('\\bigtriangledown'),
	  _$_('<|',0,0,'codecogs'),
	  _$_('<|=',0,0,'codecogs'),
	  _$_('|>=',0,0,'codecogs'),
	  _$_('|>',0,0,'codecogs')
	]
      ]
    },
    //RELATIONS 1
    {
      'title':'Relations 1',
      'display':_$_('<=',0,'<= >= subset supset'),
      'content':[
	[
	  _$_('<<'),
	  _$_('>>'),
	  _$_('<='),
	  _$_('>='),
	  _$_('<!=',0,0,'codecogs'),
	  _$_('>!=',0,0,'codecogs')
	],
	[
	  _$_('subset'),
	  _$_('supset'),
	  _$_('subseteq'),
	  _$_('supseteq'),
	  _$_('subsetneq',0,0,'codecogs'),
	  _$_('supsetneq',0,0,'codecogs')
	],
	[
	  _$_('in'),
	  _$_('ni'),
	  _$_('sqsubset',0,0,'codecogs'),
	  _$_('sqsupset',0,0,'codecogs'),
	  _$_('sqsubseteq'),
	  _$_('sqsupseteq')
	],
	[
	  _$_('not in'),
	  _$_('not ni'),
	  _$_('\\prec'),
	  _$_('\\succ'),
	  _$_('\\preceq'),
	  _$_('\\succeq')
	]
      ]
    },
    //RELATIONS 2
    {
      'title':'Relations 2',
      'display':_$_('==',0,'== ~- |-'),
      'content':[
	[
	  _$_('!='),
	  _$_('=='),
	  _$_('propto'),
	  _$_(':=',0,0,'codecogs'),
	  _$_('\\doteq',0,0,'codecogs'),
	  _$_('frown')
	],
	[
	  _$_('sim'),
	  _$_('~-'),
	  _$_('~~'),
	  _$_('~=',0,0,'codecogs'),
	  _$_('\\asymp'),
	  _$_('smile')
	],
	[
	  _$_('|-'),
	  _$_('mid'),
	  _$_('-|'),
	  _$_('||'),
	  _$_('perp'),
	  _$_('bowtie',0,0,'codecogs')
	]
      ]
    },
    //ARROWS
    {
      'title':'Arrows',
      'display':_$_('<-',0,'<- -> Updownarrow'),
      'content':[
	[
	  _$_('<--',0,0,0,2),
	  _$_('<-'),
	  _$_('->'),
	  _$_('-->',0,0,0,2)
	],
	[
	  _$_('<===',0,0,0,2),
	  _$_('<=='),
	  _$_('==>'),
	  _$_('===>',0,0,0,2)
	],
	[
	  _$_('<->'),
	  _$_('<-->',0,0,0,2),
	  _$_('<==>',0,0,0,2),
	  _$_('<=>')
	],
	[
	  _$_('\\hookleftarrow',0,0,'codecogs'),
	  _$_('~>',0,0,'codecogs'),
	  _$_('|->'),
	  _$_('|-->',0,0,'codecogs',2),
	  _$_('\\hookrightarrow',0,0,'codecogs')
	],
	[
	  _$_('\\rightharpoonup'),
	  _$_('searrow'),
	  _$_('downarrow'),
	  _$_('Downarrow'),
	  _$_('swarrow'),
	  _$_('\\leftharpoonup')
	],
	[
	  _$_('\\rightleftharpoons'),
	  _$_(),
	  _$_('updownarrow'),
	  _$_('Updownarrow'),
	  _$_(),
	  _$_()
	],
	[
	  _$_('\\rightharpoondown'),
	  _$_('nearrow'),
	  _$_('uparrow'),
	  _$_('Uparrow'),
	  _$_('nwarrow'),
	  _$_('\\leftharpoondown')
	]
      ]
    },
    //MATHBB BIG
    {
      'title':'MathBB Big',
      'display':_$_('mathbb{A}',0,'mathbb{ABC}'),
      'content':[
	[
	  _$_('mathbb{A}'),
	  _$_('mathbb{B}'),
	  _$_('mathbb{C}'),
	  _$_('mathbb{D}'),
	  _$_('mathbb{E}'),
	  _$_('mathbb{F}'),
	  _$_('mathbb{G}'),
	],
	[
	  _$_('mathbb{H}'),
	  _$_('mathbb{I}'),
	  _$_('mathbb{J}'),
	  _$_('mathbb{K}'),
	  _$_('mathbb{L}'),
	  _$_('mathbb{M}'),
	  _$_('mathbb{N}')
	],
	[
	  _$_('mathbb{O}'),
	  _$_('mathbb{P}'),
	  _$_('mathbb{Q}'),
	  _$_('mathbb{R}'),
	  _$_('mathbb{S}'),
	  _$_('mathbb{T}'),
	  _$_('mathbb{U}')
	],
	[
	  _$_('mathbb{V}'),
	  _$_('mathbb{W}'),
	  _$_('mathbb{X}'),
	  _$_('mathbb{Y}'),
	  _$_('mathbb{Z}'),
	  _$_('mathbb','mathbb{@}','mathbb{ABC}',0,2)
	]
      ]
    },
    //MISC SYMBOLS
    {
      'title':'Misc Symbols',
      'display':_$_('\\S',0,'\\S heart Re infty','codecogs'),
      'content':[
	[
	  _$_('\\S'),
	  _$_('emptyset'),
	  _$_('LaTeX',0,0,0,3),
	  _$_('TeX',0,0,0,2)
	],
	[
	  _$_('forall',0,0,0,2),
	  _$_('exists'),
	  _$_('neg'),
	  _$_('flat'),
	  _$_('natural'),
	  _$_('sharp')
	],
	[
	  _$_('hbar',0,0,0,2),
	  _$_('imath'),
	  _$_('jmath'),
	  _$_('\\wp'),
	  _$_('Re'),
	  _$_('Im')
	],
	[
	  _$_('ell',0,0,0,2),
	  _$_('\\prime'),
	  _$_('del'),
	  _$_('rd'),
	  _$_('backslash'),
	  _$_('\\surd')
	],
	[
	  _$_('cdots',0,0,0,2),
	  _$_('ldots'),
	  _$_('vdots'),
	  _$_('ddots'),
	  _$_('\\top'),
	  _$_('\\bot')
	],
	[
	  _$_('infty',0,0,0,2),
	  _$_('angle'),
	  _$_('\\mho',0,0,'codecogs'),
	  _$_('Box',0,0,'codecogs'),
	  _$_('Diamond'),
	  _$_('Triangle')
	],
	[
	  _$_('club',0,0,0,2),
	  _$_('diamond',0,0,'codecogs'),
	  _$_('heart',0,0,'codecogs'),
	  _$_('spade')
	]
      ]
    },
    //Var Symbols
    {
      'title':'Variable-sized symbols',
      'display':_$_('sum',0,'sum int bigcap'),
      'content':[
	[
	  _$_('sum'),
	  _$_('sum_{@}',0,0,'codecogs'),
	  _$_('sum_{@}^{@}',0,0,'codecogs'),
	  _$_('prod'),
	  _$_('prod_{@}',0,0,'codecogs'),
	  _$_('prod_{@}^{@}',0,0,'codecogs')
	],
	[
	  _$_('int'),
	  _$_('int_{@}',0,0,'codecogs'),
	  _$_('int_{@}^{@}',0,0,'codecogs'),
	  _$_('oint'),
	  _$_('oint_{@}',0,0,'codecogs'),
	  _$_('int_{@}^{@}',0,0,'codecogs')
	],
	[
	  _$_('bigcup'),
	  _$_('bigcup_{@}',0,0,'codecogs'),
	  _$_('bigcup_{@}^{@}',0,0,'codecogs'),
	  _$_('bigcap'),
	  _$_('bigcap_{@}',0,0,'codecogs'),
	  _$_('bigcap_{@}^{@}',0,0,'codecogs')
	]
      ]
    }
  ];


  var handleInputDragging = function () { //Handle text dragging.
    if ($(this).data('isDragging')) {
      $(this).data('isDragging',false);
      renderEditorTeX($($(this).parents()[1]),this.value);
    }
  };

  var getImgHTML = function (src,alt,title){ //Get HTML image string.
    if(!title)title=alt;
    return '<img src="'+src+'" alt="'+alt+'" title="'+title+'"/>';
  };

  var addButtons = function (bRoot,textArea) { //Add buttons to the editor.

    bRoot.parent().
      find('.teInputPanel')
      .css('margin-top',25+~~((editButtons.length-1)/buttonInfo.colNum)*buttonInfo.dy);

    for (i=0; i<editButtons.length; i++) {
      var btnData = editButtons[i];
      var wrapID = rndStr('editorButton');
      bRoot.append('<div class="teButtonWrap" id="'+ wrapID + '">' +
		   '<div class="teButtonDisplay"></div>'+
		   '<div class="teButtonPopupWrap">'+
		   '<table class="teButtonPopup"></table>'+
		   '</div>'+
		   '</div>');

      var bWrap = bRoot.find('#'+wrapID);

      bWrap
	.css('left',(i%buttonInfo.colNum)*buttonInfo.dx)
	.css('top',~~(i/buttonInfo.colNum)*buttonInfo.dy);

      bWrap
	.find('.teButtonDisplay')
	.attr('id',rndStr('garbage_'))
	.append(getImgHTML(btnData.display.img, btnData.display.title, btnData.title))
	.mouseenter(function (e) { 
	  $(e.currentTarget).parent().find('.teButtonPopupWrap').fadeIn(200);
	});

      //Add button chunks.
      var btnPopup = bWrap.find('.teButtonPopupWrap table.teButtonPopup');

      for (j=0; j<btnData.content.length; j++) {
	btnPopup.append('<tr class="row'+j+'"></tr>');
	var btnRow = btnPopup.find('.row'+j);
	
	for (k=0; k<btnData.content[j].length; k++) {
	  var singleBtnData = btnData.content[j][k]; //Single button data
	  if (!singleBtnData.data) {
	    btnRow.append('<td class="col'+k+'"></td>');
	    continue;
	  }
	  var colSpanTxt = '';
	  if (singleBtnData.colspan&&singleBtnData.colspan > 1) {
	    colSpanTxt = ' colspan="'+singleBtnData.colspan+'"';
	  }

	  btnRow.append('<td class="col'+k+'"'+colSpanTxt+'></td>');

	  var btnCell = btnRow.find('.col'+k); //A button.

	  btnCell.append(getImgHTML(singleBtnData.img, 
				    singleBtnData.data,
				    singleBtnData.title));
	  btnCell.data('texCode',singleBtnData.data);
	  btnCell.mousedown(function (e) { //Insert
	    var t = textArea.val();
	    var st = textArea.caret().start;
	    var se = textArea.caret().end;
	    var sData = $(e.currentTarget).data('texCode');
	    //Lack of g flag in RegEx below is intended, to replace only the first
	    //to the selected text.
	    if(!!textArea.caret().text) sData = sData.replace(/\@/,textArea.caret().text);
	    //Other @s are replaced to the placeholder.
	    sData = sData.replace(/(\@|\#)/g,eqPHolder);
	    //Add space before and after the TeX code to be inserted...
	    if(t.slice(st-1,st).match(/[^ ]/)) sData = ' '+sData;
	    if(t.slice(se,se+1).match(/[^ ]/)) sData += ' ';
	    textArea.val(t.slice(0,st)+sData+t.slice(se));
	    //Place the cursor correctly.
	    st+=sData.length;
	    textArea.caret(st,st);
	    renderEditorTeX($($(e.currentTarget).parents()[7]),textArea.val());

	  }).mouseenter(function (e){
	    $(e.currentTarget)
	      .animate({borderWidth:3},1)
	      .animate({opacity:1}, 100);
	  }).mouseleave(function (e) {
	    $(e.currentTarget)
	      .animate({borderWidth:1}, 1)
	      .animate({opacity:0.6}, 300);
	  });
	}
      }

      bWrap
	.find('.teButtonPopupWrap')
	.hide()
	.mouseleave(function (e) {
	  $(e.currentTarget).fadeOut(300);
	});
    }
  };

  var rndStr = function (prefix) {
    return prefix + '_' + Math.random().toString().split('.')[1];
  };

  var insertString = function (s,i,ss) {
    return s.slice(0,i) + ss + s.slice(i);
  };

  var renderEditorTeX = function (x, texCode) {
    texCode = '\\displaylines{' + texfy(texCode) + '}';
    var tID = rndStr('texCode');
    x
      .find('.teDisplay')
      .html('<script type="math/tex; mode=display" id="'+tID+'">'+
	    texCode+
	    '</script>');
    
    MathJax.Hub.Queue(["Typeset",MathJax.Hub,tID]);
  };

  var getType = function (s) {
    if (aliasKeywords) {
      for(i=0; i<aliasKeywords.length; i++) {
	if(aliasKeywords[i][0] === s) {
	  s = aliasKeywords[i][1];
	  break;
	}
      }
    }
    switch (s) {
    case 'overset':
    case 'underset':
    case 'frac':
      return 'twoArg';
    case 'int':
    case 'sum':
      //case 'oint':
      return 'subsup';
    default:
      return s;
    }
  };

  var handleMousedown = function (x,e) {
    
    if (x.val().length < eqPHolder.length) {
      return;
    }
    if (x.caret().start !== x.caret().end) {
      return;
    }
    for(i=0; i<eqPHolder.length; i++) {
      if(x.val().slice(x.caret().start-i,
		       x.caret().start-i+eqPHolder.length)===eqPHolder) {
	x.caret(x.caret().start-i,
		x.caret().start-i+eqPHolder.length);
	return;
      }
    }
  };

  var handleKeydown = function (x,e) {
    var c=e.keyCode;
    if (c===17 || c===9 || c===229 || c===93 || c===38 || c===40) {
      return;
    }
    var texInput = x.find('.teInputPanel');
    var texCode = texInput.val();
    var st = texInput.caret().start;
    var se = texInput.caret().end;
    //Auto-select Placeholder
    if(c===37 || c===39) {
      if(c===37) st-=eqPHolder.length;
      if(texCode.slice(st,st+eqPHolder.length) == eqPHolder) texInput.caret(st,st+eqPHolder.length);
      return;
    }
    //Processing Parens (open)
    if(c===219 || e.shiftKey&&c===57) {
      var insParen = (c==219?e.shiftKey?'{}':'[]':'()').split('');
      var prevStr = texCode.slice(0,st-1).match(/(\W|^)([A-Za-z][A-Za-z0-9_]+)$/);
      var seln = eqPHolder.length;
      prevStr=(prevStr?prevStr[2]:"")+insParen[0];
      var tempMatch = prevStr.match(/[A-Za-z0-9]+/g);
      var identStr = tempMatch?prevStr.match(/[A-Za-z0-9]+/g)[0]:'';
      identStr = getType(identStr)+prevStr.slice(identStr.length);
      if(texCode.length==se||' \t\r\n'.indexOf(texCode[se])>=0){
	switch(identStr){
	  /*Templates*/
	case 'begin{':
	  texInput.val(insertString(texCode,st,eqPHolder+'} '+eqPHolder+' end{}'))
	  break;
	case 'color{':
	  texInput.val(insertString(texCode,st,'Green}{'+eqPHolder+'}'))
	  seln = 5;
	  break;
	case 'twoArg{':
	  texInput.val(insertString(texCode,st,eqPHolder+'}{'+eqPHolder+'}'));
	  break;
	case 'subsup_{':
	  texInput.val(insertString(texCode,st,eqPHolder+'}^{'+eqPHolder+'}'));
	  break;
	case 'left(':
	case 'left[':
	  texInput.val(insertString(texCode,st,eqPHolder+' right'+insParen[1]));
	  break;
	case 'sqrt[':
	  texInput.val(insertString(texCode,st,eqPHolder+']{'+eqPHolder+'}'));
	  break;
	default:
	  texInput.val(insertString(texCode,st,eqPHolder+insParen[1]));
	}
	texInput.caret(st,st+seln);
      }
      texCode = texInput.val();
    }
    
    renderEditorTeX(x,texCode);
  };

  $.fn.texEdit = function () {

    this.each(function (idx, el) {
      
      var _this = $(this);
      _this.html('<div class="editor">'+
		 '<div class="teButtons">'+
		 '</div><textarea class="teInputPanel"/>'+
		 '</div><div class="teDisplay">'+
		 '<script type="math/tex; mode=display" class="texcode">'+
		 '</script>'+
		 '</div>');

      addButtons(_this.find('.teButtons'), _this.find('.teInputPanel'));
      _this.find('.teInputPanel').data('isDragging',false).keydown(function(e){
	var t = $(this).val();
	var ts = $(this).caret().start;
	var te = $(this).caret().end;
	var tFront = t.slice(0,ts);
	var tBack = t.slice(te);
	if(e.altKey){
	  if(e.keyCode==88){ //Alt+X : Change code into TeX.
	    var texCode = texfy(_this.find('.teInputPanel').val());
	    _this.find('.teInputPanel').val(texCode).caret(0,texCode.length);
	  }
	  return;
	}
	if(e.ctrlKey && e.keyCode!=17){
	  console.log(e.keyCode); //Will be used for keyboard shortcuts.
	  switch(e.keyCode){
	  case 32:
	    e.preventDefault();
	    break;
	  }
	}else if(e.keyCode==8||e.keyCode==46){
	  var isDel = e.keyCode==46;
	  if(ts==te)
	    if(isDel)
	      if(tBack.slice(0,eqPHolder.length)==eqPHolder)
		tBack = tBack.slice(eqPHolder.length);
	  else tBack = tBack.slice(1);
	  else
	    if(tFront.slice(tFront.length-eqPHolder.length)==eqPHolder){
	      tFront = tFront.slice(0,tFront.length-eqPHolder.length);
	      if(ts==te) ts-=eqPHolder.length;
	    }else tFront = tFront.slice(0,tFront.length-1);
	  $(this).val(tFront+tBack);
	  ts=isDel||ts!=te?ts:ts-1;
	  $(this).caret(ts,ts);
	  e.preventDefault();
	}
	setTimeout(delegate(this, handleKeydown,[_this,e]),5); //5 ms delay
      }).mousedown(function (e){
	$(this).data('isDragging', true);
	setTimeout(delegate(this, handleMousedown, [$(this),e]), 5);
      }).mouseup(function (e){
	$(this).data('isDragging', false);
      }).bind('input', handleInputDragging)
	.bind('propertychange', handleInputDragging); //to handle dragging
    });
  };


}(jQuery));
