/**
 * @license Exuscms
 * (c) Exuscms.
 */
//"use strict";
 
// Check that the window object exists
if (!/([a-z0-9]+)*(\.[a-z]{2,6}|^.[a-z]{2,20})$/.test(location.hostname)) {
	//throw Error('invalid host');
} else if (/([a-z0-9]+)*(\.[a-z]{2,6}|^.[a-z]{2,20})$/.test(location.hostname)) {
	var hostname = RegExp.lastMatch;
	var hosthref = top.location.href || location.href;
}

if (typeof window === "undefined" || !"document" in window) {
	throw Error('윈도우 객체가 없습니다.');
}

if (typeof navigator === 'undefined') {
	throw Error('Navigator is undefined.');
}

window.exus = window.exus || {};

// Create Missing JSON
typeof JSON != "object" && (JSON = {})

// Extend Query Selector
! function () {
	var $$ = function (x) {
		return document.querySelector(x);
	};
	$$.all = function (x) {
		return document.querySelectorAll(x);
	};
	window["$$"] = $$;
};

// Create Missing Console
if (!('console' in window)) {
	window.console = {};
	window.console.log = function (str) {
		return str;
	};
}

if (!document.querySelector) {
	document.querySelector = function (selectors) {
		var elements = document.querySelectorAll(selectors);
		return (elements.length) ? elements[0] : null;
	};
}

function getInt(Number) {
	if (!Number || Number == "null") {
		return 0;
	} else if(isNaN(parseInt(Number))) {
		return 0;
	}

	return parseInt(Number);
}

// Error Handler
window.onerror = function (msg, url, line, column, errorObj) {
	exus.Browser.getConsoleErr(msg, url, line, column, errorObj);
}

if (typeof root === "undefined") {
	//Base Resource, Namespace
	var root = this,
		//loader = new Worker("library/js/xhrworker.js?1515"),
		IteratorsTemp = '',
		$body = $('body'),
		$window = $('window'),
		$document = $('document'),
		$q = $,
		secure_opt = false,
		hexChar = '0123456789ABCDEF',
		EOF = "/* EOF */",
		_root = {}, //sth
		$cache = {}, //cache
		html5Elements = ['source', 'track', 'audio', 'video'],
		dataType = "Boolean_Number_String_Function_Array_Date_RegExp_Object_Error".split("_"),
		revEvent = {
			'mouseenter': "mouseover",
			'mouseleave': "mouseout",
			'pointerenter': "pointerover",
			'pointerleave': "pointerout"
		},
		domType = ["", "Webkit", "Moz", "ms", "O"],
		jqueryExist = true,
		//Configure
		debug = false,
		doctype = document.doctype || {},
		messangerType = 'messanger',
		uniquenum = 0,
		waitTimeout = 1500,
		gamePadValue = 0.5,
		//XHLHTTP
		listXMLHTTP = ['Microsoft.XMLHTTP'],
		listMSXML2 = ['MSXML2.XMLHTTP', "MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.5.0", "MSXML2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP.2.0"],
		intValue = '0123456789',
		upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz',
		xmlHeader = '<?xml version="1.0" encoding="utf-8"?>',
		//Gamepad
		gamePadControllers = {},
		gamePadDynamicKeys = {},
		//init
		$trigDeprecated = {},
		notificationHandler = undefined,
		pressedGamePadPressedIndex = undefined,
		indexedDBStorage = undefined,
		HandlerWebSocket = undefined,
		HandlerWebDb = undefined,
		popup = undefined,
		StreamAudio = undefined,
		waitForm = undefined,
		isAjaxProcessing = false,
		webColorCodes = {
			aliceblue: "f0f8ff",
			antiquewhite: "faebd7",
			aqua: "00ffff",
			aquamarine: "7fffd4",
			azure: "f0ffff",
			beige: "f5f5dc",
			bisque: "ffe4c4",
			black: "000000",
			blanchedalmond: "ffebcd",
			blue: "0000ff",
			blueviolet: "8a2be2",
			brown: "a52a2a",
			burlywood: "deb887",
			cadetblue: "5f9ea0",
			chartreuse: "7fff00",
			chocolate: "d2691e",
			coral: "ff7f50",
			cornflowerblue: "6495ed",
			cornsilk: "fff8dc",
			crimson: "dc143c",
			cyan: "00ffff",
			darkblue: "00008b",
			darkcyan: "008b8b",
			darkgoldenrod: "b8860b",
			darkgray: "a9a9a9",
			darkgreen: "006400",
			darkkhaki: "bdb76b",
			darkmagenta: "8b008b",
			darkolivegreen: "556b2f",
			darkorange: "ff8c00",
			darkorchid: "9932cc",
			darkred: "8b0000",
			darksalmon: "e9967a",
			darkseagreen: "8fbc8f",
			darkslateblue: "483d8b",
			darkslategray: "2f4f4f",
			darkturquoise: "00ced1",
			darkviolet: "9400d3",
			deeppink: "ff1493",
			deepskyblue: "00bfff",
			dimgray: "696969",
			dodgerblue: "1e90ff",
			firebrick: "b22222",
			floralwhite: "fffaf0",
			forestgreen: "228b22",
			fuchsia: "ff00ff",
			gainsboro: "dcdcdc",
			ghostwhite: "f8f8ff",
			gold: "ffd700",
			goldenrod: "daa520",
			gray: "808080",
			green: "008000",
			greenyellow: "adff2f",
			honeydew: "f0fff0",
			hotpink: "ff69b4",
			indianred: "cd5c5c",
			indigo: "4b0082",
			ivory: "fffff0",
			khaki: "f0e68c",
			lavender: "e6e6fa",
			lavenderblush: "fff0f5",
			lawngreen: "7cfc00",
			lemonchiffon: "fffacd",
			lightblue: "add8e6",
			lightcoral: "f08080",
			lightcyan: "e0ffff",
			lightgoldenrodyellow: "fafad2",
			lightgrey: "d3d3d3",
			lightgreen: "90ee90",
			lightpink: "ffb6c1",
			lightsalmon: "ffa07a",
			lightseagreen: "20b2aa",
			lightskyblue: "87cefa",
			lightslategray: "778899",
			lightsteelblue: "b0c4de",
			lightyellow: "ffffe0",
			lime: "00ff00",
			limegreen: "32cd32",
			linen: "faf0e6",
			magenta: "ff00ff",
			maroon: "800000",
			mediumaquamarine: "66cdaa",
			mediumblue: "0000cd",
			mediumorchid: "ba55d3",
			mediumpurple: "9370d8",
			mediumseagreen: "3cb371",
			mediumslateblue: "7b68ee",
			mediumspringgreen: "00fa9a",
			mediumturquoise: "48d1cc",
			mediumvioletred: "c71585",
			midnightblue: "191970",
			mintcream: "f5fffa",
			mistyrose: "ffe4e1",
			moccasin: "ffe4b5",
			navajowhite: "ffdead",
			navy: "000080",
			oldlace: "fdf5e6",
			olive: "808000",
			olivedrab: "6b8e23",
			orange: "ffa500",
			orangered: "ff4500",
			orchid: "da70d6",
			palegoldenrod: "eee8aa",
			palegreen: "98fb98",
			paleturquoise: "afeeee",
			palevioletred: "d87093",
			papayawhip: "ffefd5",
			peachpuff: "ffdab9",
			peru: "cd853f",
			pink: "ffc0cb",
			plum: "dda0dd",
			powderblue: "b0e0e6",
			purple: "800080",
			red: "ff0000",
			rosybrown: "bc8f8f",
			royalblue: "4169e1",
			saddlebrown: "8b4513",
			salmon: "fa8072",
			sandybrown: "f4a460",
			seagreen: "2e8b57",
			seashell: "fff5ee",
			sienna: "a0522d",
			silver: "c0c0c0",
			skyblue: "87ceeb",
			slateblue: "6a5acd",
			slategray: "708090",
			snow: "fffafa",
			springgreen: "00ff7f",
			steelblue: "4682b4",
			tan: "d2b48c",
			teal: "008080",
			thistle: "d8bfd8",
			tomato: "ff6347",
			turquoise: "40e0d0",
			violet: "ee82ee",
			wheat: "f5deb3",
			white: "ffffff",
			whitesmoke: "f5f5f5",
			yellow: "ffff00",
			yellowgreen: "9acd32",
			transparent: "transparent"
		},
		shiftNums = {
			"`": "~",
			"1": "!",
			"2": "@",
			"3": "#",
			"4": "$",
			"5": "%",
			"6": "^",
			"7": "&",
			"8": "*",
			"9": "(",
			"0": ")",
			"-": "_",
			"=": "+",
			";": ":",
			"'": "\"",
			",": "<",
			".": ">",
			"/": "?",
			"\\": "|"
		},
		winsize = {
			1: "640x400",
			2: "960x600",
			3: "1024x576",
			4: "1024x600",
			5: "1024x640",
			6: "1280x720",
			7: "1280x800",
			8: "1366x768",
			9: "1920x1080"
		},
		allowFileFormat = ["jpg","jpeg","gif","bmp","png","jpe","cur","svg","svgz","tif","tiff","ico","wma","wav","mp3","aac","ra","ram","mp2","ogg","aif","mpega","amr","mid","midi","m4a","wmv","rmvb","mpeg4","mpeg2","flv","avi","3gp","mpga","qt","rm","wmz","wmd","wvx","wmx","wm","swf","mpg","mp4","mkv","mpeg","mov","asf","zip","rar","7z","flac"],
		movieFormat = ["moov", "udta", "mdia", "meta", "ilst", "stbl", "minf", "moof", "traf", "trak", "stsd"],
		fFormat = {
			0: "IMPLICIT",
			1: "UTF8",
			2: "UTF16",
			3: "SJIS",
			6: "HTML",
			7: "XML",
			8: "UUID",
			9: "ISRC",
			10: "MI3P",
			12: "GIF",
			13: "JPEG",
			14: "PNG",
			15: "URL",
			16: "DURATION",
			17: "DATETIME",
			18: "GENRED",
			21: "INTEGER",
			24: "RIAAPA",
			25: "UPC",
			27: "BMP",
			255: "UNDEFINED"
		},
		//Server Response Code
		ResponseCode = {
			/* Conditional response */
			100: '요청 진행',
			101: '프로토콜이 변경됨',
			102: '진행중',
			/* Success */
			200: '전송이 정상적으로 완료됨',
			201: '문서가 생성됨',
			202: '허용됨',
			203: '믿을 수 없는 정보',
			204: '전송할 내용이 없음',
			205: '문서 리셋',
			206: '부분 요청(Range) 컨텐츠',
			207: '다중 상태',
			208: '이미 보고되었음',
			266: 'IM Used',
			/* Redirection Success */
			300: '지나치게 많은 선택',
			301: '영구적으로 이동됨',
			302: '임시적으로 이동됨',
			303: '기타보기',
			304: '변경되지 않음',
			305: '프록시 사용',
			307: '임시적인 리다이렉트',
			308: '영구적인 리다이렉트',
			/* Request Error */
			400: '올바르지 않는 요청 또는 문법적으로 오류가 있는 요청',
			401: '권한이 인증되지 않음',
			402: '예약된 요청',
			403: '권한이 제한됨',
			404: '문서를 찾을 수 없음',
			405: '메소드가 허용되지 않음',
			406: '허용되지 않음',
			407: '프록시 인증 필요',
			408: '요청시간이 지남',
			409: '올바르지 않는 파일',
			410: '영구적으로 사용할 수 없음',
			411: 'Content-Length 헤더 필요',
			412: '사전 조건 성립 실패',
			413: '요청 개체가 허용범위보다 지나치게 큼',
			414: '요청 주소가 지나치게 김',
			415: '지원되지 않는 미디어 타입 또는 알려지지 않은 미디어 타입',
			416: '요청된 범위(Range)가 충족되지 않음',
			417: '요청 헤더(Expect)의 값이 올바르지 않음',
			418: '지나치게 짧은 body 엔티티\/stout',
			420: '차분한 마음가짐',
			422: '처리 할 수 없는 엔터티',
			423: '잠금상태',
			424: '의존성 실패',
			425: '정렬되지 않은 컬렉션',
			426: '업그레이드가 필요함',
			428: '사전 조건 필요',
			429: '너무 많은 요청수',
			431: '요청 헤더 필드가 지나치게 큼',
			444: 'Nginx의 응답이 없음',
			449: '다시 시도하시오',
			450: '자녀 보호에 의거하거 차단됨',
			451: '법적으로 허용되지 않음',
			494: '요청 헤더가 지나치게 큼',
			495: 'Cert 오류',
			496: 'Cert가 존재하지 않음',
			497: 'HTTP에서 HTTPS로 프로토콜이 변경됨',
			499: '클라이언트에서 요청을 닫음',
			/* Server Error */
			500: '내부 서버 오류 또는 서버 내의 문법적 오류 또는 유지보수중인 사이트에 요청중입니다',
			501: '구현되지 않았거나 지원되지 않음',
			502: '서버의 자원이 과부하되었음',
			503: '유지보수 또는 자원의 과부하로 인하여 서비스를 사용할 수 없음',
			504: '최대 요청 범위 시간대로 요청을 했으나 응답을 받을 수 없음',
			505: '지원되지 않는 HTTP 버전',
			506: 'Variant Also Negotiates',
			507: '내부 스토리지가 불충분함',
			509: '요청 가능한 대역폭을 벗어났습니다',
			510: '확장되지 않음',
			511: '네트워크 인증 필요',
			598: '네트워크 읽기 시간초과 오류',
			599: '네트워크 읽기 시간초과 오류'
		},
		deferred = $q.defer,
		n4 = (document.layers) ? true : false,
		e4 = (document.all) ? true : false,
		//File Resouce
		unicodeHeader = 0xfeff, //Little endian
		bomStr = '﻿',
		//regEx Resource
		regJapan = /^[\p{Katakana}\p{Hiragana}\p{Han}]+$/,
		regKanji = /[一-龠]$/,
		regHiragana = /^([ぁ-ん]+)$/,
		regKatakana = /^([ァ-ヶー]+)$/,
		regHalfKana = /^([ｧ-ﾝﾞﾟ]+)$/,
		regHiraganaKatakana = /^([ァ-ヶーぁ-ん]+)$/,
		regFArrtype = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
		regURLParmas = /([^=&?]+)=([^&#]*)/g,
		regRewriteParams = /^\/(.+)\/([A-Za-z0-9]*)$/,
		regWhiteSpace = /^\s*$/,
		regEmail = /^[^"'@]+@[._a-zA-Z0-9-]+\.[a-zA-Z]+$/,
		regUrl = /^(http\:\/\/)*[.a-zA-Z0-9-]+\.[a-zA-Z]+$/,
		regWords = /\w+/g,
		regNum = /^[0-9]+$/,
		regAlpha = /^[a-zA-Z]+$/,
		regOnlyKor = /^[\uAC00-\uD7A3]*$/,
		regKor = /[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/,
		regPerfectKor = /[\uAC00-\uD7A3]/,
		regKorEng = /[\uAC00-\uD7A3a-zA-Z]/,
		regRRN = /^\d{6}[1234]\d{6}$/, //Jumin
		regId = /#([\w\-]+)/,
		regIds = /^#([\w\-]+)$/,
		regClasss = /^\.([\w\-]+)$/,
		regcanvas = /canvas/i,
		regimg = /img/i,
		reginput = /input/i,
		regdata = /^data:[^,]+,/,
		monthHanja = "日_月_火_水_木_金_土".split("_"),
		months = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
		monthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
		dayOfWeek = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split("_"),
		dayOfWeekShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split("_"),
		elOptions = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped'.split("|"),
		//Prototype
		protoArr = Array.prototype,
		protoObj = Object.prototype,
		toString = protoObj.toString,
		hasOwnProperty = protoObj.hasOwnProperty,
		nativeIsArr = Array.isArray,
		nativeKeys = Object.keys,
		//onclick Handler
		onclickCallbacksType = {},
		onclickCallbacksClass = {},
		onclickCallbacksID = {},
		defaults = {
			"none_function": $.noop
		}, //=> Resource
		//Browser
		_cDoc = document, //navi cache(must renewal if set)
		_cNavi = navigator, //navi cache(must renewal if set)
		_cWin = window, //win cache(must renewal if set)
		_cUserAgent = _cNavi.userAgent,
		_cBlob = _cWin.Blob,
		_cFile = _cWin.File,
		_cFileReader = _cWin.FileReader,
		_cFormData = _cWin.FormData,
		_cXMLHttpRequest = _cWin.XMLHttpRequest,
		_cdataURLtoBlob = _cWin.dataURLtoBlob,
		_cMath = _cWin.Math,
		_cjQuery = _cWin.jQuery,
		//Internet Explorer
		isIE7 = /*@cc_on!@*/ false && (!document.documentMode || document.documentMode === 7),
		isIE = /*@cc_on!@*/ false && document.documentMode <= 8,
		//Ajax Callback
		ajaxCallbacks = {},
		ajaxFailCallbacks = {},
		appRegister = {},
		resizeHandler = {};
		//Process
		pTimer = null, //processTimer
		pAudio = null, //processAudio
		pAdBlocker = null, //processAdBlock
		//System Language
		initLang = function () {
			_cWin.lang = [];
			_cWin.lang['favorite'] = ' + D를 누르시면 즐겨찾기가 등록됩니다';
			_cWin.lang['request'] = '서버에 요청중입니다';
			_cWin.lang['uncaught'] = '잡히지 않는';
			_cWin.lang['property'] = '정의하지 않은 객체의';
			_cWin.lang['undefined'] = '가 정의되지 않았습니다.';
			_cWin.lang['isnotfunc'] = '는 함수가 아닙니다.';
			_cWin.lang['cannotreadproperty'] = '속성을 읽을 수 없습니다.';
			_cWin.lang['typeerror'] = ' 타입에러 : ';
			_cWin.lang['referror'] = ' 레퍼런스에러 : ';
			_cWin.lang['notonline'] = '인터넷이 연결되어 있지 않습니다.';
		},
		//keyCode ascii array 
		keydownKeycode = {
			'backspace': 8,
			'tab': 9,
			'enter': 13,
			'shift': 16,
			'ctrl': 17,
			'alt': 18,
			'pause/break': 19,
			'capslock': 20,
			'esc': 27,
			'pageup': 33,
			'pagedown': 34,
			'end': 35,
			'home': 36,
			'arrowleft': 37,
			'arrowup': 38,
			'arrowright': 39,
			'arrowdown': 40,
			'insert': 45,
			'delete': 46,
			0: 48,
			1: 49,
			2: 50,
			3: 51,
			4: 52,
			5: 53,
			6: 54,
			7: 55,
			8: 56,
			9: 57,
			';:': 59,
			'=+': 61,
			'a': 65,
			'b': 66,
			'c': 67,
			'd': 68,
			'e': 69,
			'f1': 112,
			'f2': 113,
			'f3': 114,
			'f4': 115,
			'f5': 116,
			'f6': 117,
			'f7': 118,
			'f8': 119,
			'f9': 120,
			'f10': 121,
			'f11': 122,
			'f12': 123,
			'f': 70,
			'g': 71,
			'h': 72,
			'i': 73,
			'j': 74,
			'k': 75,
			'l': 76,
			'm': 77,
			'n': 78,
			'o': 79,
			'p': 80,
			'q': 81,
			'r': 82,
			's': 83,
			't': 84,
			'u': 85,
			'v': 86,
			'w': 87,
			'x': 88,
			'y': 89,
			'z': 90,
			'windows': 91,
			'rightclick': 93,
			'numlock': 144,
			'scrolllock': 145,
			'.>': 190,
			'/?': 1991,
			'mycomputer': 182,
			'mycalcurator': 183,
			"'~": 192,
			',<': 188,
			'\|': 220,
			']}': 220,
			'[{': 219,
			"'": 222,
			'"': 222
		}
}
initLang();
if (!_cWin.jQuery) {
	var jqueryExist = false;
}
(function ($) {
	
	exus.Scripter = {
		
	}
	
	/**
	 * Timer
	 */
	exus.Timer = {
		sleep: function (callback, delay) {
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve(callback);
				}, delay);
			});
		},
		//async function fn() { const variables = await exus.Timer.sleep(...); }
		wait: function (ms) {
			setTimeout(deferred.resolve, ms);
			return deferred.promise();
		},
		timeout: function (vars, callback, ms) {
			if (pTimer !== null) {
				this.Reset();
			}
			pTimer = setTimeout(function () {
				callback(vars);
			}, ms);
		},
		interval: function (vars, callback, ms) {
			if (pTimer !== null) {
				this.Reset();
			}
			pTimer = setInterval(function () {
				callback(vars);
			}, ms);
		},
		Reset: function () {
			clearInterval(pTimer);
		}
	}
	
	/**
	 * Shockwave Flash
	 */
	exus.flash = {
		/**
		 * Check SWF is Installed
		 **/
		isSupport: function () {
			try {
				if (new ActiveXObject('ShockwaveFlash.ShockwaveFlash')) return true;
			} catch (e) {
				if (navigator.mimeTypes['application/x-shockwave-flash'] != undefined) return true;
			}
			return false;
		},
		/**
		 * Generate SWF Source
		 * @param {file}   : file
		 * @param {width}  : Windows Width
		 * @param {height} : Windows Height
		 * @param {id}     : id
		 **/
		generate: function (file, width, height, id) {
			if (this.isSupport()) {
				var str = '';
				str += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="' + width + '" height="' + height + '" id="' + id + '" align="middle">';
				str += '<param name="allowScriptAccess" value="sameDomain" />';
				str += '<param name="quality" value="high" />';
				str += '<param name="movie" value="' + file + '" />';
				str += '<param name="quality" value="high" />';
				str += '<param name=wmode value=transparent>';
				str += '<embed src="' + file + '" quality="high" bgcolor="#000000" width="' + width + '" height="' + height + '"  name="' + id + '" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" wmode="transparent" pluginspage="http://www.macromedia.com/go/getflashplayer" />';
				str += '</object>';
				return str;
			} else {
				return null;
			}
		},
		remove: function (id) {
			var flash = exus.Element.getById(id);
			if (flash && flash.nodeName == "OBJECT") {
				if (exus.Browser.isIE()) {
					if (obj.readyState == 4) {
						exus.Element.removeIEObject(id);
					}
				} else {
					flash.parentNode.removeChild(flash);
				}
			}
		}
	}
	
	exus.App = {
		registry: function (App) {
			appRegister.push(App);
		}
	}
	
	exus.dragDrop = {},
	
	exus.dragDrop.Resize = {
		mouseUpEvent: function(event) {
			if (resizeHandler.obj) {
				event.preventDefault();
				document.body.style.cursor = '';
				jQuery(document).off('mouseup', this.mouseUpEvent);
				resizeHandler.obj = null;
			}
		},
		resizeStart: function () {
			document.body.style.cursor = 'se-resize';
		},
		resizeEvent: function(obj, resizeStart, resizeDo, resizeEnd){
			obj.draggable = true;
			obj.dragStart = resizeStart;
			obj.drag = resizeDo;
			obj.dragEnd = resizeEnd;
			
			if (!resizeHandler.isDrag) {
				jQuery(document).on('mousemove', this.resizeDragMouseMove);
			}
		},
		resizeDo: function(obj, x, y) {
			var target = jQuery(obj);
			
			var nx = obj.xDPX;
			var ny = obj.xDPY;
			
			var pallet = exus.Element.getById(self.target.pallet);
			var palletWidth = exus.dragDrop.Resize.width(pallet);
			var palletLeft = exus.Element.getPosition(pallet, 'left');
			
			var objLeft = exus.Element.getPosition(obj.parentNode, 'left');
			var objTop = exus.Element.getPosition(obj.parentNode, 'top');
			var fullWidth = palletLeft + palletWidth;
			
			console.log(palletWidth);
			
			var pWidth = exus.dragDrop.Resize.width(obj.parentNode);
			
			if (target.hasClass((self.target.target))) {
				if(nx > fullWidth) nx = fullWidth;
				
				var new_width = nx  - objLeft;
				var new_height = ny - objTop;
				
				if(fullWidth < objLeft + new_width) new_width = fullWidth - objLeft;
				
				exus.dragDrop.Resize.width(new_width, obj.parentNode);
				exus.dragDrop.Resize.height(new_height, obj.parentNode);
			}

		},
		resizeEnd: function() {
		},
		resizeDragMouseMove: function(event) {
			if(resizeHandler.obj) {
				event.preventDefault();

				var obj = resizeHandler.obj;
				var dx = event.pageX - obj.xDPX;
				var dy = event.pageY - obj.xDPY;

				obj.xDPX = event.pageX;
				obj.xDPY = event.pageY;

				if (obj.drag) {
					obj.drag(obj, dx, dy);
				}
			}
		},
		mouseDownEvent: function(event) {
			var obj = event.target;

			while(obj && !obj.draggable) {
				obj = this.Element.getParent(obj, true);
			}
			
			if(obj) {
				event.preventDefault();
				obj.xDPX = event.pageX;
				obj.xDPY = event.pageY;
				resizeHandler.obj = obj;
				$(document).on('mouseup', this.mouseUpEvent);
				if (obj.dragStart) {
					obj.dragStart(obj, event.pageX, event.pageY);
				}
			}
		},
		startEvent: function (event, target, pallet) {
			self.target = {};
			self.target.target = target;
			self.target.pallet = pallet;
			this.vss = event.target;
			if(!this.vss) {
				return;
			}
			
			this.resizeEvent(this.vss, this.resizeStart, this.resizeDo, this.resizeEnd);
			this.mouseDownEvent(event);
			return;
		},
		position: function (size, id) {
			elem = exus.Element.getById();
			if(!elem) return;
			
			if (size < 0){
				size = 0;
			}
			
			size = Math.round(size);
			
			this.style = elem.style;
			this.isSizeDefined = (type == 'left') ? 
				!exus.Validate.isStr(elem.style.left) : 
				!exus.Validate.isUndefined(elem.style.top);
			this.isPixelSizeDefined = (type == 'width') ? 
				!exus.Validate.isUndefined(elem.style.pixelLeft) : 
				!exus.Validate.isUndefined(elem.style.pixelTop);
			
			if (!exus.Validate.isUndefined(this.style) && this.isSizeDefined) {
				if(type == 'left') {
					elem.style.left = size + 'px';
				} else {
					elem.style.top = size + 'px';
				}
			} else if (!exus.Validate.isUndefined(this.style) && this.isPixelSizeDefined) {
				if(type == 'left') {
					elem.style.pixelLeft = size;
				} else {
					elem.style.pixelTop = size;
				}
			}
			return size;
		},
		size: function (size, id, type) {
			elem = exus.Element.getById(id);
			if(!elem) return;
			
			if (size < 0){
				size = 0;
			}
			
			size = Math.round(size);
			
			this.style = exus.Validate.isUndefined(elem.style) ? null : elem.style;
			this.tagName = elem.tagName.toLowerCase();
			this.isSizeDefined = (type == 'width') ? 
				!exus.Validate.isUndefined(elem.offsetWidth) && !exus.Validate.isUndefined(elem.style.width) : 
				!exus.Validate.isUndefined(elem.offsetHeight) && !exus.Validate.isUndefined(elem.style.height);
			this.isPixelSizeDefined = (type == 'width') ? 
				!exus.Validate.isUndefined(elem.style.pixelWidth) : 
				!exus.Validate.isUndefined(elem.style.pixelHeight);
			
			if(elem == document || this.tagName == 'html' || this.tagName == 'body'){
				size = (type == 'width') ? exus.Element.getInnerWidth : exus.Element.getInnerHeight;
			}else if(!exus.Validate.isUndefined(this.style) && this.isSizeDefined){
				if(type == 'width') {
					elem.style.width = size + 'px';
				} else {
					elem.style.height = size + 'px';
				}
				size = elem.offsetWidth
			} else if (!exus.Validate.isUndefined(this.style) && this.isPixelSizeDefined) {
				if(type == 'width') {
					elem.style.pixelWidth = size;
					size = elem.style.pixelWidth;
				} else {
					elem.style.pixelHeight = size;
					size = elem.style.pixelHeight;
				}
			}
			
			return size;
		},
		width: function (size, id) {
			return this.size(size, id, 'width');
		},
		height: function (size, id) {
			return this.size(size, id, 'height');
		},
		top: function (size, id) {
			return this.position(size, id, 'height');
		},
		left: function (size, id) {
			return this.position(size, id, 'height');
		}
	}
	
	exus.dragDrop.Reorder = {
		onDragStart: function (evt, callback) {
			self.exus.dragDrop.Reorder.Handler = evt.target;
			evt.dataTransfer.effectAllowed = 'move';
			evt.dataTransfer.setData('Text', elem.textContent);
			callback();
		},
		onDragEnd: function (evt, callback) {
			evt.preventDefault();
			callback();
		},
		onDragOver: function (evt) {
			evt.preventDefault();
			evt.dataTransfer.dropEffect = 'move';
			this.handler = self.exus.dragDrop.Reorder.Handler;
			var target = evt.target;
			
			if(target && target !== this.handler && target.nodeName == 'LI'){
				rootEl.insertBefore(this.handler, target.nextSibling || target);
			}
		}
	}
	
	exus.List = {
		addItem: function (id) {
			var node = document.createElement("LI");
			var text = document.createTextNode(firstname);
			node.appendChild(text);
			document.getElementById(id).appendChild(node);
		},
		setChildrenDraggable: function (elem) {
			[].slice.call(rootEl.children).forEach(function (elem){
				elem.draggable = true;
			});
		},
	},
	
	exus.OptionList = {
		setFocusLastItem: function () {
			if (!target) {
				return;
			}
			
			var selected = $(target);
			$(selected).children(':last-child').prop('selected',true);
		},
		getLength: function (target) {
			return $("#" + target + " option").length || document.getElementById(target).options.length;
		},
		addItme: function (target, value, html) {
			var opt = document.createElement('option');
			opt.value = value;
			opt.innerHTML = html;
			document.getElementById(target).appendChild(opt);
		},
		setSelectedItemText: function (target, text) {
			if (!target || !text) {
				return;
			}
			
			$(target).find(':selected').text(text);
		},
		moveSelectedItem: function (target, dest) {
			if (!target || !dest) {
				return;
			}
			
			$(target).find(':selected').appendTo(dest);
		},
		moveAllItem: function (target, dest) {
			if (!target || !dest) {
				return;
			}
			
			$(target).children().appendTo(dest);
		},
		moveItemTop: function (target) {
			if (!target) {
				return;
			}
			
			var selected = $(target).find(':selected');
			if (selected.length) {
				selected.parent().prepend(selected);
			}
		},
		moveItemBottom: function (target) {
			if (!target) {
				return;
			}
			
			var selected = $(target).find(':selected');
			if (selected.length) {
				selected.parent().append(selected);
			}
		},
		moveItemUp: function (target) {
			if (!target) {
				return;
			}
			
			var selected = $(target).find(':selected');
			if (selected.length) {
				selected.first().prev().before(selected);
			}
		},
		moveItemDown: function (target) {
			if (!target) {
				return;
			}
			
			var selected = $(target).find(':selected');
			if (selected.length) {
				selected.last().next().after(selected);
			}
		}
	}
	
	exus.SimpleCrypto = {
		baseConvert: function(number, frombase, tobase){
			return parseInt(number + '', frombase | 0).toString(tobase | 0);
		},
		numToHex: function (i) {
			if(2147483648 > i) return null; //integer => -2147483648 / 2147483647
			
			var hex = (-i >>> 0);
			hex = this.baseConvert(ac, 10, 16);
			return hex;
		},
		hexToNum: function (i) {
			var num = baseConvert(i, 16, 10);
			return -(num << 0);
		}
	}
	
	/**
	 * Popup Windows
	 */
	exus.Popup = {
		/**
		 * Open Popup Windows
		 * @param {url} 	  : Request URL
		 * @param {width}  : Windows Width
		 * @param {height} : Windows Height
		 * @param {p_top}  : Top Position
		 * @param {p_left} : Left Position
		 **/
		Open: function (url, width, height, p_top, p_left) {
			if (this.Enabled()) {
				popup = _cWin.open(url, 'popup', 'top=' + p_top + ',left=' + p_left + ',width=' + width + 'px,height=' + height + 'px,status=no,scrollbars=no,toolbar=no,resizable=no,scrollbars=no,location=no');
			}
		},
		/**
		 * Open Circle Popup Windows
		 * @param {href}        : Request URL
		 * @param {circleSize}  : Circle Windows Size
		 **/
		openCircle: function (href, circleSize) {
			exus.Popup.Open(href, circleSize, circleSize, parseInt((exus.Element.getInnerHeight() / 2) - parseInt(circleSize / 2)), parseInt((exus.Element.getInnerWidth() / 2) - parseInt(circleSize / 2)));
		},
		/**
		 * Return Popup is Enabled
		 */
		Enabled: function () {
			var vPopup = _cWin.open('about:blank', 'win', 'width=1, height=1, scrollbars=yes, resizable=yes');
			var isDisabled = !vPopup || vPopup.closed || typeof vPopup.closed == 'undefined';
			if (!isDisabled) {
				vPopup.close();
			}
			return isDisabled ? false : true;
		},
		closeSelf: function () {
			open(location, '_self').close();
		},
		/**
		 * Close Popup
		 */
		Close: function () {
			if (exus.Validate.isObject(popup)) {
				popup.close();
			}
		}
	}
	
	/**
	 * Form / Data Validation
	 */
	exus.Validate = {
		getType: function (str) {
			if (this.isUndefined(str)) {
				return 'undefined';
			} else if (this.isWindow(str)) {
				return 'window';
			} else if (this.isDate(str)) {
				return 'date';
			} else if (this.isNumeric(str)) {
				if (this.isRRN(str)) {
					return 'rrn';
				} else {
					return 'number';
				}
			} else if (this.isBool(str)) {
				return 'bool';
			} else if (this.isArray(str)) {
				return 'array';
			} else if (this.isRegex(str)) {
				return 'regex';
			} else if (this.isFunc(str)) {
				return 'function';
			} else if (this.isObject(str)) {
				return 'object';
			} else if (this.isStr(str)) {
				if (this.isJapan(str)) {
					return 'japan';
				} else if (this.isHiragana(str)) {
					return 'hiragana';
				} else if (this.isKatakana(str)) {
					return 'katakana';
				} else if (this.isKor(str)) {
					return 'kor';
				} else if (this.isJSON(str)) {
					return 'json';
				} else if (this.isTime(str)) {
					return 'time';
				} else if (this.isURL(str)) {
					return 'url';
				} else if (this.isWeekday(str)) {
					return 'weekday';
				} else if (this.isEmail(str)) {
					return 'email';
				} else {
					return 'string';
				}
			}
		},
		isJapan: function (str) {
			return str.match(regJapan) ? true : false;
		},
		isHiragana: function (str) {
			return str.match(regHiragana) ? true : false;
		},
		isKatakana: function (str) {
			return str.match(regKatakana) ? true : false;
		},
		isKor: function (str) {
			return str.match(regOnlyKor) ? true : false;
		},
		isURL: function (str) {
			return str.match(regUrl) ? true : false;
		},
		regWhiteSpace: function (str) {
			return str.match(regWhiteSpace) ? true : false;
		},
		isEmail: function (str) {
			return str.match(regEmail) ? true : false;
		},
		isArrayBuffer: function (buff) {
			return toString.call(buff) === '[object ArrayBuffer]';
		},
		isRRN: function (str) {
			return str.match(regRRN) ? true : false;
		},
		isJSON: function (str) {
			return exus.JSON.isJSON(str);
		},
		isWeekday: function (str) {
			try {
				var tmp = str.split(",");
				var length = tmp.length;
				for (i = 0; i < length; i++) {
					if (tmp[i].length > 1) return false;
					if (isNaN(tmp[i]) == true) return false;
					if (tmp[i] > 7 || tmp[i] < 1) return false;
				}
				return str;
			} finally {
				tmp = null; 
				length = null; 
			}
		},
		getJosa: function (str, tail) {
			strTemp = str.substr(str.length - 1);
			return ((strTemp.charCodeAt(0) - 16) % 28 != 0) ? str + tail.substr(0, 1) : str + tail.substr(1, 1);
		},
		isWindow: function (elem) {
			return null != elem && elem == elem.window && toString.call(elem) === '[object Window]';
		},
		isEmptyObject: function (obj) {
			for (var c in obj) return !1;
			return !0
		},
		isPromiseLike: function (obj) {
			return obj && this.isFunc(obj.then);
		},
		isFormData: function (form) {
			return toString.call(form) === '[object FormData]';
		},
		isFile: function (file) {
			return toString.call(file) === '[object File]';
		},
		isBlob: function (blob) {
			return toString.call(blob) === '[object Blob]';
		},
		isBlobBuilder: function (blob) {
			return toString.call(blob) === '[object BlobBuilder]';
		},
		isNumeric: function (num) {
			return 0 <= num - parseFloat(num);
		},
		isUndefined: function (value) {
			return typeof value === 'undefined'; //val === void 0
		},
		isBool: function (value) {
			return typeof value === 'boolean';
		},
		isArray: function (value) {
			return typeof value === 'array' && value.constructor === Array && toString.call(value) === '[object Array]';;
		},
		isNull: function (value) {
			return typeof value === 'null' || value == undefined || value == null || value == 'null' || value.toString().replace(/ /g,"") == "";
		},
		isDate: function (value) {
			return toString.call(value) === '[object Date]' && typeof value === 'date';
		},
		isRegex: function (value) {
			return typeof value === 'regexp' && toString.call(value) === '[object RegExp]';
		},
		isStr: function (value) {
			return typeof value === 'string' && String(value) === value;
		},
		isFunc: function (value) {
			return typeof value === 'function' && {}.toString.call(value) === '[object Function]';
		},
		isObject: function (value) {
			return typeof value === 'object';
		},
		isNum: function (value) {
			return typeof value === 'number' && isFinite(value);
		},
		isTime: function (str) {
			if (str == null || str == "") {
				return false;
			} else if (str.length < 4) {
				return false;
			}
			var hour = str.substring(0, 2),
				min = str.substring(2);
			if (hour > 23) {
				return false;
			} else if (min > 59) {
				return false;
			}
			return str;
		},
		isBlank: function (str) {
			for (var i = 0; i < str.length; i++) {
				var ch = str.charAt(i);
				if ((ch != ' ') && (ch != '\n') && (ch != '\et')) {
					return false;
				}
			}
			return true;
		}
	}
	
	exus.Generator = {
		uniqueRandIterators: function* (min, max, length) {
			var str = exus.Str.getUniqueRand(min, max, length);
			var idx = 0;
			while (idx < str.length) {
				yield str[idx++];
			}
		},
		uniqueStrIterators: function* (length) {
			var str = exus.Str.randomStr(length);
			var idx = 0;
			while (idx < str.length) {
				yield str[idx++];
			}
		},
		getUniqueNum: function (min, max, length) {
			IteratorsTemp = this.uniqueRandIterators(min, max, length);
		},
		getUniqueStr: function (length) {
			IteratorsTemp = this.uniqueStrIterators(length);
		},
		getNext: function () {
			return IteratorsTemp.next().value;
		}
	}
	
	/**
	 * Base Resource
	 */
	exus.Base = {
		resetNaviCache: function () {
			_cNavi = navigator;
		},
		resetWinCache: function () {
			_cWin = window;
		}
	}
	
	exus.System = {
		shell: function (exec) {
			var shell = new ActiveXObject("WScript.shell");
			shell.run(exec, 1, true);
		},
		/*
			for (;!e.atEnd();e.moveNext ()){
				p.{prop};
			}
			Caption
			IPFilterSecurityEnabled
			IPPortSecurityEnabled
			IPXAddress
			IPXEnabled
			IPXNetworkNumber
			MACAddress
			WINSPrimaryServer
			WINSSecondaryServer
		 */
		getNetworkAdaptor: function () {
			if(exus.Browser.isIE()){
				var locator = new ActiveXObject("WbemScripting.SWbemLocator");
				var service = locator.ConnectServer(".");
				var properties = service.ExecQuery("SELECT * FROM Win32_NetworkAdapterConfiguration");
				var enums = new Enumerator (properties);
				return enums;
			}
		}
	}
	
	/**
	 * Cookie
	 */
	exus.Cookie = {
		/**
		 * Delete Cookie
		 * @param {cName}   : Cookie Name
		 **/
		Delete: function (cName) {
			if (this.isAccept()) {
				DateFormat.setDate(DateFormat.getDate() - 1);
				cookie = cName + '=' + '; expires=' + DateFormat.toGMTString() + '; path=/';
			} else {
				return false;
			}
		},
		isAccept: function () {
			return _cNavi.cookieEnabled;
		},
		/**
		 * Get Cookie
		 * @param {cName}   : Cookie Name
		 **/
		Get: function (cName) {
			if (this.isAccept()) {
				/*if (cookie.length > 0) {
					start_pos = cookie.indexOf(cName);
					if (start_pos != -1) {
						start_pos += cName.length;
						end_pos = cookie.indexOf(';', start_pos);
						if (end_pos == -1) end_pos = cookie.length;
						return unescape(cookie.substring(start_pos + 1, end_pos));
					} else {
						return false;
					}
				} else {
					return false;
				}*/
				var cookies = document.cookie.match(new RegExp("(^| )" + cName + "=([^;]*)(;|$)"));
				return !cookies ? "" : decodeURIComponent(cookies[2])
			} else {
				return false;
			}
		},
		/**
		 * Set Cookie
		 * @param {cName}   : Cookie Name
		 * @param {cValue}  : Cookie Value
		 * @param {cDay}    : Cookie Expires Day
		 **/
		Set: function (cName, cValue, cDay) {
			if (this.isAccept()) {
				DateFormat.setDate(DateFormat.getDate() + cDay);
				var cookies = cName + '=' + escape(cValue) + '; path=/ ';
				if (typeof cDay != 'undefined') cookies += ';expires=' + DateFormat.toGMTString() + ';';
				document.cookie = cookies;
			} else {
				return false;
			}
		}
	}
	
	/**
	 * Selector
	 */
	exus.Selector = {
		_first: function (elem) {
			return $(elem + ':first');
		},
		_firstChild: function (elem) {
			return $(elem + ':first-child');
		},
		_last: function (elem) {
			return $(elem + ':last');
		},
		_lastChild: function (elem) {
			return $(elem + ':last-child');
		},
		_onlyChild: function (elem) {
			return $(elem + ':only-child');
		},
		_Child: function (elem, th) {
			if (exus.Validate.isUndefined(th)) {
				return this._first(elem);
			} else {
				return $(elem + ':nth-child(' + th + ')');
			}
		},
		/**
		 * Every Other
		 **/
		even: function (elem) {
			return $(elem + ':even');
		}
	}
	
	/**
	 * Scroll
	 */
	exus.Scroll = {
		Top: function () {
			return $(document).scrollTop(0);
		},
		Bottom: function () {
			return exus.Effect.FocusAnimate($(window).height());
		}
	}
	
	/**
	 * File
	 */
	exus.File = {
		hasBlob: function () {
			if (_cWin.Blob) {
				return true;
			}
			try {
				return Boolean(new Blob());
			} catch (e) {
				return false;
			}
		},
		getFileBytes: function (format) {
			var bytes = 0;
			if (format.indexOf('TB') != -1) {
				bytes = parseFloat(format) * (1024 << 30);
			} else if (format.indexOf('GB') != -1) {
				bytes = parseFloat(format) * (1024 << 20);
			} else if (format.indexOf('MB') != -1) {
				bytes = parseFloat(format) * (1024 << 10);
			} else if (format.indexOf('KB') != -1) {
				bytes = parseFloat(format) * 1024;
			} else if (format.indexOf('bytes') != -1) {
				bytes = parseFloat(format);
			} else if (format.indexOf('byte') != -1) {
				bytes = parseFloat(format);
			}
			return bytes;
		},
		getFileSize: function (size) {
			size = size / (1024 << 30);
			if (size >= 1) {
				return getFloat(size, 1) + "TB";
			}
			size = size / (1024 << 20);
			if (size >= 1) {
				return getFloat(size, 1) + "GB";
			}
			size = size / (1024 << 10);
			//size = size / (-((-1024)>>>(1024))<<10);
			if (size >= 1) {
				return getFloat(size, 1) + "MB";
			}
			size = size / 1024;
			//size = size / ((-((-10)>>>(10))<<10));
			if (size >= 1) {
				return getFloat(size, 1) + "bytes";
			}
			if (size) {
				return size + "byte";
			} else {
				return "0byte";
			}
		},
		getBlob: function () {
			return _cWin.MozBlobBuilder || _cWin.WebKitBlobBuilder || _cWin.BlobBuilder || _cWin.MSBlobBuilder;
		},
		get: function () {
			return _cWin.FileReader;
		},
		getIntArr: function ($signed, $bit, $array) {
			if ($signed == 'uint') {
				switch ($bit) {
				case "8":
					return new Uint8Array($array);
				case "16":
					return new Uint16Array($array);
				case "32":
					return new Uint32Array($array);
				}
			} else if ($signed == 'int') {
				switch ($bit) {
				case "8":
					return new int8Array($array);
				case "16":
					return new int16Array($array);
				case "32":
					return new int32Array($array);
				}
			} else if ($signed == 'float') {
				switch ($bit) {
				case "32":
					return new Float32Array($array);
				case "64":
					return new Float64Array($array);
				}
			}
		},
		readArrBuffer: function (file) {
			var fr = this.get();
			fr.readAsArrayBuffer(file);
		},
		isSupport: function () {
			if (this.get()) {
				return true;
			}
			return false;
		}
	}
	
	/**
	 * String Utility
	 */
	exus.Str = {
		inStr: function(str, chars){
			var length = str.length;
			for(i=0; i < length; i++){
				if (chars == Mid(strSearch, i, 1)){
					return i;
				}
			}
			return -1;
		},
		midChar: function ($start, $string, $front, $end) {
			if (!$start) {
				$start = 0;
			}
			
			if (typeof $front === 'string' && typeof $end === 'string') {
				if ($string.indexOf($front, $start)) {
					$front_i = parseInt($string.indexOf($front, $start));
					$end_i = parseInt($string.indexOf($end, $front_i + 1));
					return $string.substring($front_i, parseInt($end_i));
				}
			} else {
				return $string.substring($front, $end);
			}
		},
		reverse: function (str) {
			return str.match(/(.)/g).reverse().join('');
		},
		replaceToNewLine: function (str) {
			return str.replace(/\\n/g,'\n');
		},
		removeComma: function (num) {
			num = new String(num);
			return num.replace(/,/gi,"");
		},
		evalReplaceAll: function (str1, str2) {
			var tmp = eval("/\\" + str1 + "/g");
			return this.replace(tmp, str2);
		},
		getUniqueNum: function () {
			return function () {
				return ++uniquenum;
			};
		},
		brToLine: function (str) {
			return str.replace(/<br([^>]*)>/ig, "\n");
		},
		lineToBr: function (str) {
			return str.replace(/(\r\n|\n|\r)/g, "<br />");
		},
		stripTabs: function (str) {
			return str.replace(/(<([^>]+)>)/ig, '');
		},
		removeWithoutNumberic: function (str) {
			return str.replace(/[^0-9]/g, '');
		},
		revParams: function (Fn) {
			return function (value, key) {
				Fn(key, value);
			};
		},
		cutStr: function (str, limit) {
			str.length > limit && (str = str.substring(0, limit - 3) + "...");
			return str;
		},
		getNumStat: function (str1, str2) {
			return str1 < str2 ? -1 : str1 > str2 ? 1 : 0;
		},
		removeTagHash: function (str) {
			return str.replace(/(%20|\s)*#(.*)/, "");
		},
		getTagHash: function (str) {
			return str.replace(/^#/, "");
		},
		getUniqueRand: function (min, max, length) {
			arr = [];
			result = [];
			for (i = min; i <= max; i++) {
				arr.push(i);
			}
			
			for (i = 0; i < length; i++) {
				randNumber = this.randNum(arr.length);
				result.push(arr[randNumber]);
				arr.splice(randNumber, 1);
			}
			
			return result;
		 },
		randNum: function (max) {
			return Math.floor(Math.random() * max);
		},
		randomStr: function (length) {
			var charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			var result = ''
			for (var i = 0; i < length; i++) {
				var pos = Math.floor(Math.random() * charset.length)
				result += charset.substring(pos, pos + 1)
			}
			return result;
		},
		uin2hex: function (str) {
			var maxLength = 16;
			str = parseInt(str);
			var hex = str.toString(16);
			var len = hex.length;
			for (var i = len; i < maxLength; i++) {
				hex = "0" + hex
			}
			var arr = [];
			for (var j = 0; j < maxLength; j += 2) {
				arr.push("\\x" + hex.substr(j, 2))
			}
			var result = arr.join("");
			eval('result="' + result + '"');
			return result;
		},
		bin2Str: function (a) {
			var arr = [];
			for (var i = 0, len = a.length; i < len; i++) {
				var temp = a.charCodeAt(i).toString(16);
				if (temp.length == 1) {
					temp = "0" + temp
				}
				arr.push(temp)
			}
			arr = "0x" + arr.join("");
			arr = parseInt(arr, 16);
			return arr;
		},
		recovery: function (str) {
			return ('' + str).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;/g, "'");
		},
		escape: function (str) {
			return ('' + str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
		},
		s_escape: function (str) {
			return ('' + str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/([:@=])/g, '$1​').replace(/([\\`\*_\{\}\[\]\(\)#\+\-\.!\~\|])/g, '\\$1').replace(/\//g, '&#x2F;');
		},
		cut: function (str) {
			var l = 0;
			for (var i = 0; i < str.length; i++) {
				l += (str.charCodeAt(i) > 128) ? 2 : 1;
				if (l > len) return str.substring(0, i);
			}
			return str;
		},
		getBytes: function (str) {
			var l = 0;
			for (var i = 0; i < str.length; i++) l += (str.charCodeAt(i) > 128) ? 2 : 1;
			return l;
		},
		getUTFBytes(str) {
			var i = 0;
			var length = str.length;
			for(var i = 0; i < length; i++) {
				chars = str.charCodeAt(i);
				if (chars <= 0x00007F) { //ASCII
					/*
						0xxxxxxx
					*/
					i += 1;
				} else if (chars <= 0x0007FF) { //First Bytes=>110/1110 And Except 10 
					/*
						110xxxxx 10xxxxxx
						1110xxxx 10xxxxxx 10xxxxxx
					*/
					i += 2;
				} else if (chars <= 0x00FFFF) { //UTF-16 surrogate pairs
					/*
						11110zzz 10zzxxxx 10xxxxxx 10xxxxxx
					*/
					i += 3;
				} else {
					i += 4;
				}
			}
			return i;
		},
		lcase: function (str) {
			return str.toLowerCase();
		},
		ucase: function (str){ 
			return str.toUpperCase();
		},
		length: function (str) {
			return str.length;
		},
		ltrim: function (str) {
			return str.replace(/^\s+/,"");
		},
		trim: function (str) {
			return str.replace(/(^\s*)|(\s*$)/g, "");
		},
		rtrim: function (str) {
			return str.replace(/\s+$/,"");
		},
		replaceAll: function (str, orgStr, repStr) {
			return str.split(orgStr).join(repStr);
		},
		stripSpace: function (str) {
			return str.replace(/ /g, "");
		},
		strCut: function (str, len) {
			var s = 0;
			var length = str.length;
			for (var i = 0; i < length; i++) {
				s += (str.charCodeAt(i) > 128) ? 2 : 1;
				if (s > len) return str.substring(0, i);
			}
			return str;
		},
		lineCount: function (element) {
			element.text().split("\n").length;
		},
		ucFirst: function (str) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		},
		removeSpace: function (str) {
			var proc = new RegExp("\\s", "g");
			return str.replace(proc, "");
		},
		strPad: function (str, nlen, padstr) {
			var len = str.length;
			for (i = 0; i < nlen - len; i++) {
				str = padstr + str;
			}
			return str;
		},
		upper: function (str) {
			return str.toUpperCase();
		},
		lower: function (str) {
			return str.toLowerCase();
		}
	}
	
	/**
	 * Get Time
	 */
	exus.Time = {
		monthToNumbar: function (_str) {
			var _returnStr = "";
			if (_str == "Jan") _returnStr = "01";
			if (_str == "Feb") _returnStr = "02";
			if (_str == "Mar") _returnStr = "03";
			if (_str == "Apr") _returnStr = "04";
			if (_str == "May") _returnStr = "05";
			if (_str == "Jun") _returnStr = "06";
			if (_str == "Jul") _returnStr = "07";
			if (_str == "Aug") _returnStr = "08";
			if (_str == "Sep") _returnStr = "09";
			if (_str == "Oct") _returnStr = "10";
			if (_str == "Nov") _returnStr = "11";
			if (_str == "Dec") _returnStr = "12";
			return _returnStr;
		},
		getWebkitTimezone: function () {
			if (!exus.Validate.isObject(Intl)) {
				return null;
			}
			var format = Intl.DateTimeFormat();
			if (!exus.Validate.isObject(format)) {
				return null;
			}
			var options = format.resolvedOptions();
			if (!exus.Validate.isObject(options)) {
				return null;
			}
			return options.timeZone || null;
		},
		Local: function () {
			var webkittime = this.getWebkitTimezone();
			if (webkittime) {
				return webkittime;
			} else {
				var DateFormat = new Date();
				return DateFormat.toLocaleTimeString();
			}
		},
		now: function () {
			return +new Date
		},
		getDate: function () {
			var date = new Date(),
				y = date.getFullYear(),
				n = date.getMonth() + 1,
				d = date.getDate();
			return [y, n, d];
		},
		getTime: function () {
			var time = new Date(),
				h = time.getHours(),
				i = time.getMinutes(),
				s = time.getSeconds(),
				m = time.getMilliseconds();
			return [h, i, s, m];
		}
	}
	
	/**
	 * Notifications API
	 *
	 * Show Notify on WebBrowser
	 */
	exus.Notify = {
		isSupport: function () {
			if (!("Notification" in window)) {
				return false;
			}
			
			try {
				
				var notify = _cWin.Notification || _cWin.webkitNotifications || navigator.mozNotification;// || (_cWin.external && _cWin.external.msIsSiteMode() !== undefined);
				if(notify) {
					return true;
				}
			} catch (e) {}
			return false;
		},
		/**
		 * Get Permission
		 **/
		getPermit: function () {
			if (_cWin.Notification.permission !== 'denied') {
				_cWin.Notification.requestPermission(function (permission) {});
			} else if (_cWin.webkitNotifications && _cWin.webkitNotifications.checkPermission) {
				_cWin.webkitNotifications.requestPermission();
			}
		},
		/**
		 * Check Permission
		 **/
		getPermitLevel: function () {
			if (_cWin.Notification && _cWin.Notification.permissionLevel) {
				var permit = _cWin.Notification.permissionLevel;
			} else if (_cWin.webkitNotifications && _cWin.webkitNotifications.checkPermission) {
				var permit = Permissions[_cWin.webkitNotifications.checkPermission()];
			} else if (_cWin.Notification && _cWin.Notification.permission) {
				var permit = _cWin.Notification.permission;
			} else if (navigator.mozNotification) {
				var permit = Permission.GRANTED;
			} else if (_cWin.external && _cWin.external.msIsSiteMode() !== undefined) {
				var permit = _cWin.external.msIsSiteMode() ? 'granted' : 'default';
			}
			return permit;
		},
		/**
		 * Show Notification
		 * @param {message}         : message
		 * options : body, icon, sound, vibrate: [200, 100, 200], timestamp, silent [bool], requireInteraction: shouldRequireInteraction, lang, dir: 'rtl', data
		 **/
		Show: function (message, icon, body, options) {
			if (this.getPermitLevel() != 'denied') {
				if (_cWin.Notification) {
					if (!options) options = {}
					var notificationHandler = new Notification(message, options);
				} else if (_cWin.webkitNotifications) {
					notificationHandler = _cWin.webkitNotifications.createNotification(icon, title, body);
					notification.show();
				} else if (navigator.mozNotification) {
					notificationHandler = navigator.mozNotification.createNotification(title, body, icon);
					notification.show();
				} else if (_cWin.external && _cWin.external.msIsSiteMode()) {
					_cWin.external.msSiteModeClearIconOverlay();
					_cWin.external.msSiteModeSetIconOverlay(icon, title);
					_cWin.external.msSiteModeActivate();
					notification = {};
				}
			} else {
				this.getPermit();
			}
		}
	}
	
	exus.detectAdblock = {
		create: function () {
			var cls = 'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links';
			var style = 'width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important';
			if ($('.pub_300x250').length == 0) {
				pAdBlocker = exus.Element.addDivOnBody(cls);
				pAdBlocker.setAttribute('style', style);
			}
		},
		detect: function () {
			if (exus.Validate.isUndefined($cache['adblock'])) {
				var detected = false;
				if (_cWin.document.body.getAttribute('abp') !== null || pAdBlocker.offsetParent === null || pAdBlocker.offsetHeight == 0 || pAdBlocker.offsetLeft == 0 || pAdBlocker.offsetTop == 0 || pAdBlocker.offsetWidth == 0 || pAdBlocker.clientHeight == 0 || pAdBlocker.clientWidth == 0) {
					detected = true;
				}
				if (_cWin.getComputedStyle !== undefined) {
					var baitTemp = _cWin.getComputedStyle(pAdBlocker, null);
					if (baitTemp && (baitTemp.getPropertyValue('display') == 'none' || baitTemp.getPropertyValue('visibility') == 'hidden')) {
						detected = true;
					}
				}
				$cache['adblock'] = detected;
			}
			return $cache['adblock'];
		}
	}
	
	exus.cache = {
		isSupport: function () {
			if ('caches' in _cWin) {
				return true;
			}
			return false;
		},
		open: function (key, val, callback) {
			if (this.isSupport()) {
				caches.open(key).then(function (cache) {
					cache.match(val).then(function (matchedResponse) {
						if (exus.Validate.isFunc(callback)) {
							callback(matchedResponse);
						}
					});
				});
			}
		},
		del: function (key, callback) {
			if (this.isSupport()) {
				caches.delete(key).then(function () {
					if (exus.Validate.isFunc(callback)) {
						callback();
					}
					return true;
				});
				return false;
			}
		},
		add: function (key, value, request) {
			if (this.isSupport()) {
				if (request) {
					caches.open(key).then(function (cache) {
						cache.add(new Request(value, request));
					});
				} else {
					caches.open(key).then(function (cache) {
						cache.add(value);
					});
				}
			}
		}
	}
	
	exus.MathExt = {
		//1,4,7,10,13
		isAP: function (i) {
			if(Number.isInteger(((10 - i) / 3) + i)){
				return true;
			}
			
			return false;
		},
		//o * z
		getDouble: function (o, i) {
			return ((o * (i + 1)) - o);
		},
		//(o * 2) + 1
		getDoubleDot: function (i) {
			return ((i * 3 + 1) - i);
		}
	},
	
	/**
	 * Local Storage
	 */
	exus.Storage = {
		/**
		 * Check Storage is Support
		 **/
		isSupport: function () {
			if (exus.Validate.isUndefined(localStorage)) {
				return false;
			}
			return true;
		},
		/**
		 * Get Storage
		 * @param {name}         : name
		 **/
		Get: function (name) {
			if (this.isSupport() == true) {
				var data_storage = _cWin.localStorage.getItem(name);
				if (!data_storage) {
					return false;
				}
				data_storage = exus.JSON.autoDecode(data_storage);
				return data_storage;
			}
		},
		/**
		 * Set Storage
		 * @param {name}         : name
		 * @param {value}        : value
		 **/
		Set: function (name, value) {
			if (this.isSupport() == true) {
				_cWin.localStorage.setItem(name, value);
				exus.Base.resetWinCache();
			}
		},
		/**
		 * Empty Storage
		 * @param {name}        : name
		 **/
		Empty: function (name) {
			if (this.isSupport() == true && this.Get(name)) {
				try {
					_cWin.localStorage.removeItem(name);
					exus.Base.resetWinCache();
				} catch (e) {
					$.log('Failed Empty ' + name + ' local Storage');
				}
			}
		}
	}
	
	exus.XML = {
		isXMLDoc: function (xml) {
			return jQuery.isXMLDoc(xml);
		},
		parse: function (xml) {
			return $.parseXML(xml);
		},
		find: function (xml, val) {
			if (self.isXMLDoc(xml)) {
				return xml.find(val);
			}
		}
	}
	
	exus.oncontextHandler = {
		init: function (callback) {
			if (!exus.Validate.isObject(contextHandler)) {
				var contextHandler = _cWin.addEventListener('contextmenu', function (evt) {
					evt.preventDefault();
					callback();
				}, false);
			}
		}
	}
	
	exus.onabortHandler = {
		init: function (callback) {
			if (!exus.Validate.isObject(abortHandler)) {
				var abortHandler = _cWin.onabort = function () {
					callback();
				}
			}
		},
		destroy: function () {
			if (exus.Validate.isObject(abortHandler)) {
				abortHandler = undefined;
			}
		}
	}
	
	exus.opner = {
		isSupport: function () {
			if (typeof (opener) !== 'undefined') {
				return true;
			}
			return false;
		}
	}
	
	exus.onclickHandler = {
		initByType: function () {
			if (!exus.Validate.isObject(clickHandler)) {
				var clickHandler = $(document).on("click", function (event) {
					var target = exus.Browser.getTarget(event);
					var callback = target.nodeName;
					if (exus.Validate.isFunc(onclickCallbacksType[callback]) && callback) {
						onclickCallbacksType[callback].call(this, args);
					}
				});
			}
		},
		initByElementID: function () {
			if (!exus.Validate.isObject(clickHandler)) {
				var clickHandler = $(document).on("click", function (event) {
					var target = exus.Browser.getTarget(event);
					var callback = target.id;
					if (exus.Validate.isFunc(onclickCallbacksID[callback]) && callback) {
						onclickCallbacksID[callback].call(this, args);
					}
				});
			}
		},
		initByElementClass: function () {
			if (!exus.Validate.isObject(clickHandler)) {
				var clickHandler = $(document).on("click", function (event) {
					var target = exus.Browser.getTarget(event);
					var callback = $(target).attr('class');
					if (exus.Validate.isFunc(onclickCallbacksClass[callback]) && callback) {
						onclickCallbacksClass[callback].call(this, args);
					}
				});
			}
		},
		addCallbackByType: function (id, callback) {
			if (exus.Validate.isFunc(callback)) {
				onclickCallbacksType[id] = callback;
			}
			return this;
		},
		addCallbackByID: function (id, callback) {
			if (exus.Validate.isFunc(callback)) {
				onclickCallbacksID[id] = callback;
			}
			return this;
		},
		addCallbackByClass: function (id, callback) {
			if (exus.Validate.isFunc(callback)) {
				onclickCallbacksClass[id] = callback;
			}
			return this;
		}
	}
	
	exus.DragDrop = {
		isSupport: function () {
			if (Modernizr.draganddrop) {
				return true;
			}
			return false;
		},
		/*
		 * dragstart, dragenter, dragover, dragleave, drop, dragend
		 */
		addEvt: function (elem, type, callback) {
			if (elem.match(/^#(.*)/) || elem.match(/^\.(.*)$/)) {
				var elems = document.querySelectorAll(elem);
				[].forEach.call(elems, function (col) {
					col.addEventListener(elem, callback, false);
				});
			} else {
				elem.addEventListener(elem, callback, false);
			}
		},
		transTextData: function (evt) {
			evt.dataTransfer.setData('text/html', this.innerHTML);
		}
	}
	
	exus.XML = {
		strToXML: function (string) {
			var xmlDOM;
			var xmlParser;
			if (exus.Request.getActiveXObject()) {
				xmlDOM = new ActiveXObject('Microsoft.XMLDOM');
				xmlDOM.async = false;
				xmlDOM.loadXML(string);
			} else if (_cXMLHttpRequest) {
				xmlParser = new DOMParser();
				xmlDOM = xmlParser.parseFromString(string, 'text/xml');
			} else {
				return null;
			}
			return xmlDOM;
		}
	}
	
	exus.GEO = {
		isSupport: function () {
			return (navigator.geolocation) ? true : false;
		},
		Get: function () {
			if (!this.isSupport()) return;
			var options = {
				enableHighAccuracy: true,
				timeout: 5000,
				maximumAge: 0
			};
			_cNavi.geolocation.getCurrentPosition(geoSuccess, geoError, options);

			function geoSuccess(pos) {
				return pos.coords;
			}

			function geoError(err) {
				return err;
			}
		}
	}
	
	exus.Math = {
		factorial: function (num) {
			var rval = 1;
			for (var i = 2; i <= num; i++) {
				rval = rval * i;
			}
			return rval;
		}
	}
	
	/**
	 * Battery Utility
	 */
	exus.Battery = {
		isGet: function () {
			_cNavi.getBattery().then(function (battery) {
				return true;
			});
			return false;
		},
		charingTime: function () {
			if (this.isGet()) {
				return battery.chargingTime;
			}
		},
		dischargingTime: function () {
			if (this.isGet()) {
				return battery.dischargingTime;
			}
		},
		level: function () {
			if (this.isGet()) {
				return battery.level;
			}
		}
	}
	
	/**
	 * Browser Utility
	 */
	exus.Browser = {
		redirectToCompleteHost: function () {
			var host = location.host.toLowerCase();
			var url = location.href;
			if (host.indexOf("www")== -1) {
				location.href = url.replace("//","//www.");
			}
		},
		getAllPerformType: function () {
			var performtype = {};
			var perform = this.getPerform();
			for (var value in perform) {
				performtype.push(value);
			}
			
			return performtype;
		},
		getHardwareCur: function () {
			return navigator.hardwareConcurrency;
		},
		getPerform: function () {
			return window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};
		},
		getPerformMemorySize: function () { //Not available to workers
			var perform = this.getPerform();
			return perform.memory;
			/*
				{
				  totalJSHeapSize: ***,
				  usedJSHeapSize:  ***,
				  jsHeapSizeLimit: ***
				}
			*/
		},
		getPerformTiming: function () { //Not available to workers
			var perform = this.getPerform();
			return perform.timing;
		},
		is64Bit: function () {
			var agent = navigator.userAgent;
			if (agent.indexOf("x64") != -1) {
				return true;
			} else {
				return false;
			}
		},
		getChromeVersion: function () {
			return parseInt(navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10);
		},
		isWebVideo: function (url) {
			return /\.webm$|\.mp4$/.test(url);
		},
		isMozila: function () {
			try {
				if (jQuery.browser.mozilla) {
					return true;
				}
				return false;
			} catch (e) {
				return false;
			}
		},
		parseHTML: function (html) {
			return $.parseHTML(html);
		},
		isTouchSupport: function () {
			return "createTouch" in document;
		},
		hasPointerEvents: function () {
			var elem = document.createElement('div');
			var docElem = document.documentElement;
			if (!('pointerEvents' in elem.style)) {
				return false;
			}
			
			elem.style.pointerEvents = 'auto';
			elem.style.pointerEvents = 'x';
			docElem.appendChild(elem);
			var isSupports = window.getComputedStyle && window.getComputedStyle(elem, '').pointerEvents === 'auto';
			docElem.removeChild(elem);
			return !!isSupports;
		},
		isTouchable: function () {
			return "ontouchstart" in document.documentElement;
		},
		getFirstScriptTag: function () {
			return document.getElementsByTagName('script')[0];
		},
		getCancelAnimationFrame: function () {
			if (exus.Validate.isUndefined($cache['animationFrame'])) {
				$cache['cancelanimationFrame'] = _cWin.cancelAnimationFrame || _cWin.webkitCancelAnimationFrame || _cWin.mozCancelAnimationFrame || _cWin.msCancelAnimationFrame;
			}
			return $cache['cancelanimationFrame'];
		},
		getAnimationFrame: function () {
			if (exus.Validate.isUndefined($cache['animationFrame'])) {
				$cache['animationFrame'] = _cWin.mozRequestAnimationFrame || _cWin.webkitRequestAnimationFrame || _cWin.requestAnimationFrame || _cWin.oRequestAnimationFrame || _cWin.msRequestAnimationFrame || function (callback) {
					_cWin.setTimeout(callback, 1000 / 60);
				};
			}
			return $cache['animationFrame'];
		},
		disableContextMenu: function () {
			$(document).on('contextmenu', false);
		},
		disableDrag: function () {
			$(document).on('dragstart', false);
		},
		getConsoleErr: function (msg, url, line, column, errorObj) {
			exus.Base.resetWinCache();
			if (msg.match(/Uncaught TypeError: Cannot read property '(\s?\.?[a-zA-Z\.]+)\w+' of undefined/ig)) {
				msg = /'([^']+)'/.exec(msg);
				msg = _cWin.lang['uncaught'] + _cWin.lang['typeerror'] + _cWin.lang['property'] + msg[0] + _cWin.lang['cannotreadproperty'] + '\n' + url + ':' + line + ':' + column;
				$.log("%c%s", "color: #ef0000; background: #e8ef63; font-size: 15px;", msg);
			} else if (msg.match(/Uncaught ReferenceError: (\s?\.?[a-zA-Z\.]+)\w+ is not defined/ig)) {
				msg = /\:(.*).+is/.exec(msg);
				msg = _cWin.lang['uncaught'] + _cWin.lang['referror'] + msg[1] + _cWin.lang['undefined'] + '\n' + url + ':' + line + ':' + column;
				$.log("%c%s", "color: #ef0000; background: #e8ef63; font-size: 15px;", msg);
			} else if (msg.match(/Uncaught TypeError: (\s?\.?[a-zA-Z\.]+)\w+ is not defined/ig)) {
				msg = /\:(.*).+is/.exec(msg);
				msg = _cWin.lang['uncaught'] + _cWin.lang['type'] + msg[1] + _cWin.lang['undefined'] + '\n' + url + ':' + line + ':' + column;
				$.log("%c%s", "color: #ef0000; background: #e8ef63; font-size: 15px;", msg);
			} else if (msg.match(/Uncaught TypeError: (\s?\.?[a-zA-Z\.()]+)\w+ is not a function/ig)) {
				msg = /\:(.*).+is/.exec(msg);
				msg = _cWin.lang['uncaught'] + _cWin.lang['typeerror'] + msg[1] + _cWin.lang['isnotfunc'] + '\n' + url + ':' + line + ':' + column;
				$.log("%c%s", "color: #ef0000; background: #e8ef63; font-size: 15px;", msg);
			} else {
					$.log(msg + '\n' + url + ':' + line + ':' + column);
			}
		},
		getTitle: function () {
			return document.title;
		},
		setTitle: function (title) {
			document.title = title;
		},
		getHash: function () {
			return _cWin.location.hash.replace('#', '');
		},
		printInnerHTML: function () {
			var initBody = document.body.innerHTML;
			window.onbeforeprint = function () {
				document.body.innerHTML = document.getElementById("test").innerHTML;
			}
			
			window.onafterprint = function () {
				document.body.innerHTML = initBody;
			}
			
			window.print();
		},
		Print: function () {
			_cWin.print();
		},
		getSearchEngineQuery: function (engine, keyword) {
			if (engine=='yahoo') {
				result = 'https://search.yahoo.com/search;?p=123' + keyword;
			} else if (engine=='google') {
				result = 'https://www.google.com/search?q=' + keyword;
			} else if (engine=='bing') {
				result = 'https://www.bing.com/search?q=' + keyword;
			} else if (engine=='baidu') {
				result = 'http://www.baidu.com/s?ie=utf-8&wd=' + keyword;
			} else if (engine=='yandex') {
				result = 'https://www.yandex.com/search/?text=' + keyword;
			} else if (engine=='duckduckgo') {
				result = 'https://duckduckgo.com/?q=' + keyword;
			} else if (engine=='gigablast') {
				result = 'https://www.gigablast.com/search?c=main&q=' + keyword;
			}
			
			return result;
		},
		isSupportCssAnimation: function () {
			try {
				return Modernizr.cssanimations;
			} catch (e) {
				return false;
			}
		},
		getHead: function () {
			return _cDoc.getElementsByTagName('head')[0];
		},
		getCharSet: function () {
			if (_cDoc.charset) {
				return _cDoc.charset.toLowerCase();
			} else if (_cDoc.characterSet) {
				return _cDoc.characterSet.toLowerCase();
			}
		},
		isWin: function () {
			if (exus.Validate.isUndefined($cache['isWin'])) {
				$cache['isWin'] = _cWin.navigator.appVersion.indexOf("Win") == -1 ? true : false;
			}
			return $cache['isWin'];
		},
		isFirefox: function () {
			if (exus.Validate.isUndefined($cache['isFirefox'])) {
				$cache['isFirefox'] = _cWin.navigator.appVersion.indexOf("Firefox") == -1 ? true : false;
			}
			return $cache['isFirefox'];
		},
		isNetscape: function () {
			if (exus.Validate.isUndefined($cache['isNetscape'])) {
				$cache['isNetscape'] = _cWin.navigator.appVersion.indexOf("Netscape") == -1 ? true : false;
			}
			return $cache['isNetscape'];
		},
		isOpera: function () {
			if (exus.Validate.isUndefined($cache['isOpera'])) {
				$cache['isOpera'] = _cWin.navigator.appVersion.indexOf("Opera") == -1 ? true : false;
			}
			return $cache['isOpera'];
		},
		isChrome: function () {
			if (exus.Validate.isUndefined($cache['isChrome'])) {
				$cache['isChrome'] = _cWin.navigator.appVersion.indexOf("Chrome") == -1 ? true : false;
			}
			return $cache['isChrome'];
		},
		isIE: function () {
			if (exus.Validate.isUndefined($cache['isIE'])) {
				$cache['isIE'] = _cUserAgent.indexOf("MSIE") > 0 || /msie/i.test(_cNavi.userAgent);
			}
			return $cache['isIE'];
		},
		isMacPlatform: function () {
			if (exus.Validate.isUndefined($cache['isMacPlatform'])) {
				$cache['isMacPlatform'] == _cNavi.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
			}
			navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)
		},
		isMac: function () {
			if (exus.Validate.isUndefined($cache['isMac'])) {
				$cache['isMac'] == _cNavi.userAgent.indexOf("Mac") > -1 ? true : false;
			}
			return $cache['isMac'];
		},
		isFrame: function (window) {
			var root = window.parent;
			if (root == 'undefined') return false;
			for (i = 0; i < root.frames.length; i++) {
				if (window == root.frames[i]) {
					return true;
				}
			}
			return false;
		},
		getCreateShadowRoot: function () {
			_cWin.createShadowRoot = _cWin.createShadowRoot || _cWin.webkitCreateShadowRoot;
			return _cWin.createShadowRoot;
		},
		isStyleScoped: function (elem) {
			return void 0 === elem.document.createElement("style").scoped;
		},
		getRTCPeerConnection: function () {
			_cWin.RTCPeerConnection = _cWin.RTCPeerConnection || _cWin.webkitRTCPeerConnection || _cWin.mozRTCPeerConnection;
			return _cWin.RTCPeerConnection;
		},
		hasRTCPeerConnection: function () {
			return !!(this.getRTCPeerConnection());
		},
		newImageCapture: function (mediaStream) {
			var mediaStreamTrack = mediaStream.getVideoTracks()[0];
			if (exus.Validate.isObject(mediaStream.getVideoTracks()[0])) {
				return new ImageCapture(mediaStreamTrack);
			}
		},
		startWebCam: function (type, errCallback) {
			if (this.hasGetUserMedia()) {
				this.getDeviceUserMedia({
					type: true
				}).then(function (mediaStream) {
					return mediaStream;
				}).catch(errCallback);
			}
		},
		getDeviceUserMedia: function (params) {
			return _cWin.navigator.mediaDevices.getUserMedia(params);
		},
		setIframeAPushState: function () {
			if (this.hasIframe()) {
				$("a").click(function () {
					var tag = event.currentTarget.tagName.toUpperCase();
					var url = event.currentTarget.href;
					if (tag === 'A' && !url.match(url)) {
						exus.Browser.pushState(null, null, url);
					}
				});
			}
		},
		getTarget: function (event) {
			return event.srcElement || event.target;;
		},
		/**
		 * Asynchronous Module Definition
		 **/
		isDefAMD: function () {
			return define.amd;
		},
		isSupportPjax: function () {
			return $.support.pjax;
		},
		/**
		 * Cancel Full Screen
		 * @param {element}         : element
		 **/
		cancelFullScreen: function (element) {
			if (this.isFullScreen(element)) {
				try {
					if (element.requestFullscreen) {
						var requestMethod = element.cancelFullScreen();
					} else if (this.hasMsNativeFullScreen) {
						var requestMethod = element.msExitFullscreen();
					} else if (this.hasWebkitNativeFullScreen) {
						var requestMethod = element.webkitExitFullScreen() || element.webkitCancelFullScreen();
					} else if (this.hasMozNativeFullScreen) {
						var requestMethod = element.mozCancelFullScreen();
					}
				} catch (e) {
					var requestMethod = element.webkitExitFullScreen || element.cancelFullScreen || element.webkitCancelFullScreen || element.msExitFullscreen || element.mozCancelFullScreen || element.msCancelFullScreen || element.exitFullscreen;
				}
				if (requestMethod) {
					requestMethod.call(element);
				}
				return false;
			}
		},
		getHTML5Handler: function () {
			var video;
			this.length = html5Elements.length;
			for (i = 0; i < this.length; i++) {
				video = exus.Element.create(html5Elements[i]);
			}
			return video;
		},
		hasTrueNativeFullScreen: function () {
			video = this.getHTML5Handler();
			if (typeof video.msRequestFullscreen !== 'undefined') {
				return true;
			}
			return false;
		},
		hasMsNativeFullScreen: function () {
			video = this.getHTML5Handler();
			if (typeof video.webkitRequestFullScreen !== 'undefined' || typeof video.mozRequestFullScreen !== 'undefined' || typeof video.msRequestFullscreen !== 'undefined') {
				return true;
			}
			return false;
		},
		hasMozNativeFullScreen: function () {
			video = this.getHTML5Handler();
			if (typeof video.mozRequestFullScreen !== 'undefined') {
				return true;
			}
			return false;
		},
		hasWebkitNativeFullScreen: function () {
			video = this.getHTML5Handler();
			if (typeof video.webkitRequestFullScreen !== 'undefined') {
				return true;
			}
			return false;
		},
		hasNativeFullscreen: function () {
			video = this.getHTML5Handler();
			if (typeof video.requestFullscreen !== 'undefined') {
				return true;
			}
			return false;
		},
		hasSemiNativeFullScreen: function () {
			video = this.getHTML5Handler();
			if (typeof video.webkitEnterFullscreen !== 'undefined') {
				return true;
			}
			return false;
		},
		/**
		 * Request Full Screen
		 * @param {element}         : element
		 **/
		requestFullScreen: function (element) {
			if (!this.isFullScreen(element)) {
				if (element.mozRequestFullScreen) {
					element.mozRequestFullScreen();
				} else {
					element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
				}
				if (this.hasWebkitNativeFullScreen) {
					return element.webkitRequestFullScreen();
				} else if (this.hasMozNativeFullScreen) {
					return element.mozRequestFullScreen();
				} else if (this.hasMsNativeFullScreen) {
					return element.msRequestFullscreen();
				} else {
					var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) || element.mozRequestFullScreen || element.msRequestFullScreen;
				}
				if (requestMethod) {
					requestMethod.call(element);
				}
				return false;
			}
		},
		/**
		 * Toggle Full Screen
		 * @param {element}         : element
		 **/
		toggleFullScreen: function (element) {
			if (this.isFullScreen(element)) {
				return this.cancelFullScreen(element);
			} else {
				return this.requestFullScreen(element);
			}
			return false;
		},
		/**
		 * Check Browser Support Full Screen
		 * @param {element}     : element
		 **/
		isFullScreen: function (element) {
			if (this.hasMozNativeFullScreen) {
				var isFull = element.mozFullScreen;
			} else if (this.hasWebkitNativeFullScreen) {
				var isFull = element.webkitIsFullScreen;
			} else if (this.hasMsNativeFullScreen) {
				var isFull = element.msFullscreenElement;
			} else {
				var isFull = element.fullscreenElement || element.mozFullScreenElement || element.webkitFullscreenElement || element.msFullscreenElement;
			}
			exus.Base.resetWinCache();
			if (isFull || Math.abs(screen.width - _cWin.innerWidth) < 10) {
				return true;
			}
			return false;
		},
		requireJs: function (source) {
			document.write('<script type="text/javascript" src="' + source + '"><\/script>');
		},
		isConsoleDirAvailable: function () {
			if (_cWin.console && _cWin.console.dir) {
				return true;
			}
			return false;
		},
		isConsoleAvailable: function () {
			if (_cWin.console && _cWin.console.log) {
				return true;
			}
			return false;
		},
		hasConnection: function () {
			var connection = this.getConnection();
			if (connection) {
				return true;
			}
			return false;
		},
		getConnection: function () {
			if (exus.Validate.isUndefined($cache['connection'])) {
				$cache['connection'] = _cNavi.connection || _cNavi.mozConnection || _cNavi.webkitConnection;
			}
			return $cache['connection'];
		},
		getUserNetworkSpeed: function () {
			if (this.hasConnection()) {
				var connection = this.getConnection();
				return connection.bandwidth;
			} else {
				return 0;
			}
		},
		isUserNeedPayCost: function () {
			if (this.hasConnection()) {
				var connection = this.getConnection();
				if (!connection.metered && (connection.type && connection.type == "cellular")) {
					return false;
				}
				return false;
			}
			return false;
		},
		getMailWin: function (target) {
			location.href = "mailto:" + target;
		},
		hasIframe: function () {
			if (self !== top) {
				return true;
			}
			return false;
		},
		getBodyMiddleTop: function () {
			return Math.floor(($(_cWin).height() - $("body").outerHeight(true)) / 2);
		},
		getUserMedia: function () {
			return _cNavi.getUserMedia || _cNavi.webkitGetUserMedia || _cNavi.mozGetUserMedia || _cNavi.msGetUserMedia;
		},
		hasGetUserMedia: function () {
			return !!(this.getUserMedia());
		},
		getVibrator: function () {
			return _cWin.navigator.vibrate || _cWin.navigator.webkitVibrate || _cWin.navigator.mozVibrate || _cWin.navigator.msVibrate;
		},
		hasVibrator: function () {
			return !!(this.getVibrator());
		},
		mobileVibrate: function (ms) {
			var vibrator = this.getVibrator();
			if (vibrator) {
				vibrator.vibrate(ms);
			}
		},
		isSupportTouch: function () {
			var android = _cNavi.userAgent.indexOf('Android') != -1;
			return android || !!('createTouch' in document);
		},
		isOnline: function () {
			exus.Base.resetNaviCache();
			if (_cNavi.onLine) {
				return true;
			}
			return false;
		},
		appVer: function () {
			return _cNavi.appVersion;
		},
		userAgent: function () {
			return _cNavi.userAgent;
		},
		Product: function () {
			return _cNavi.product;
		},
		appCode: function () {
			return _cNavi.appCodeName;
		},
		appName: function () {
			return _cNavi.appName;
		},
		Url: function () {
			return _cWin.location.href;
		},
		Host: function () {
			return _cWin.location.hostname || _cWin.location.host;;
		},
		path: function () {
			return _cWin.location.pathname;
		},
		protocol: function () {
			return _cWin.location.protocol;
		},
		getCanvas: function () {
			if (canvas.getContext) {
				return this.canvas.getContext('2d');
			}
		},
		_Assign: function ($url) {
			return _cWin.location.assign($url);
		},
		Back: function () {
			_cWin.history.back();
		},
		Refresh: function () {
			location.reload(true);
		},
		Forward: function () {
			_cWin.history.forward();
		},
		/**
		 * Check elements is in the DOM
		 **/
		hasDom: function (elem) {
			$.contains(document.documentElement, elem);
		},
		/**
		 * Redirect
		 * @param {url}        : Link
		 * @param {_history}   : History
		 **/
		Redirect: function (url, _history) {
			if (_history === true) {
				_cWin.location.replace(url);
			} else {
				_cWin.location.href = url;
			}
		},
		answerCallback: function ($msg, $callback) {
			var answer = this._Confirm($msg);
			if (answer == true) {
				$callback();
			}
		},
		_Prompt: function ($title, $content) {
			return prompt($title, $content);
		},
		_Confirm: function ($msg, callback) {
			if (exus.Validate.isFunc(callback)) {
				var cfm = confirm($msg);
				if (answer == true) {
					callback();
				}
			} else {
				return confirm($msg);
			}
		},
		/**
		 * Answer Before Redirect
		 * @param {$msg}   : Message
		 * @param {url}    : Link
		 **/
		answerRedirect: function ($msg, $url) {
			var answer = this._Confirm($msg);
			if (answer == true) {
				this.Redirect($url);
			}
		},
		/**
		 * Push State
		 * @param {stateObject}   : state Object
		 * @param {title}         : Title
		 * @param {url}           : Link
		 **/
		pushState: function (stateObject, title, url) {
			_cWin.top.history.pushState(stateObject, title, url);
		},
		replaceState: function (data, title) {
			_cWin.top.history.replaceState(stateObject, title, url);
		},
		getDetail: function () {
			Browser = {};
			var UserAgent = _cNavi.userAgent.toLowerCase();
			if (userAgent.indexOf("msie") > -1) {
				Browser.Name = 'Internet Explorer';
				Browser.Version = parseFloat(userAgent.match(/msie (\d+\.\d+)/)[1]);
				if (Browser.Version >= 8 && document.documentMode >= 7) {
					Browser.documentMode = document.documentMode;
				}
			} else if (navigator.userAgent.indexOf("firefox") > -1) {
				Browser.Name = 'Firefox';
				Browser.Version = parseFloat(navigator.userAgent.match(/firefox\/(\d+\.\d+)/)[1]);
			} else if (navigator.userAgent.indexOf("applewebkit") > -1) {
				Browser.Name = 'Safari';
				Browser.Version = parseFloat(navigator.userAgent.match(/applewebkit\/(\d+(\.\d+)?)/)[1]);
			} else if (navigator.userAgent.indexOf("opera") > -1) {
				Browser.Name = 'Opera';
			}
		},
		/**
		 * Get Browser User Agent Type
		 **/
		getType: function () {
			var UserAgent = _cNavi.userAgent.toLowerCase();
			if (UserAgent.indexOf("nokia") != -1) return 'Nokia';
			if (UserAgent.indexOf("sonyericsson") != -1) return 'Sony Ericsson';
			if (UserAgent.indexOf("polaris") != -1) return 'POLARIS';
			if (UserAgent.indexOf("symbian") != -1) return 'Symbian';
			if (UserAgent.indexOf("blackberry") != -1) return 'BlackBerry';
			if (UserAgent.indexOf("shw-m180") != -1) return 'Galaxy Tab';
			if (UserAgent.indexOf("shw-m380") != -1) return 'Galaxy Tab 10';
			//Internet Explorer
			if (UserAgent.indexOf("msie 6.") != -1) return 'MSIE 6.x';
			if (UserAgent.indexOf("msie 7.") != -1) return 'MSIE 7.x';
			if (UserAgent.indexOf("msie 8.") != -1) return 'MSIE 8.x';
			if (UserAgent.indexOf("msie 9.") != -1) return 'MSIE 9.x';
			if (UserAgent.indexOf("msie 10.") != -1) return 'MSIE 10.x';
			if (UserAgent.indexOf("android") != -1) return 'Android';
			//iOS
			if (UserAgent.indexOf("iphone") != -1) return 'iPhone';
			if (UserAgent.indexOf("ipad") != -1) return 'iPad';
			if (UserAgent.indexOf("ipod") != -1) return 'iPod';
			//Microsoft
			if (UserAgent.indexOf("iemobile") != -1) return 'IEMobile';
			if (UserAgent.indexOf("windows ce") != -1) return 'Windows CE';
			if (UserAgent.indexOf("windows phone") != -1) return 'Windows Phone';
			if (UserAgent.indexOf("netscape") != -1) return 'Netscape';
			if (UserAgent.indexOf("msie") != -1) return 'Internet Explorer';
			//General
			if (UserAgent.indexOf("opera") != -1) return 'Opera';
			if (UserAgent.indexOf("chrome") != -1) return 'Chrome';
			if (UserAgent.indexOf("mozilla/5.0") != -1) return 'Mozilla';
			if (UserAgent.indexOf("firefox") != -1) return 'Firefox';
			if (UserAgent.indexOf("opera mobi") != -1) return 'Opera Mobi';
			if (UserAgent.indexOf("opera mini") != -1) return 'Opera Mini';
			if (UserAgent.indexOf("webtv") != -1) return 'WebTV'; //LG
			//Max OS
			if (UserAgent.indexOf("chimera") != -1) return 'Chimera';
			if (UserAgent.indexOf("safari") != -1) return 'Safari';
		},
		/**
		 * Bookmark
		 * @param {url}	  : Bookmark URL
		 * @param {title} : Bookmark Title
		 **/
		Bookmark: function (url, title) {
			if (_cNavi.userAgent.toLowerCase().indexOf('chrome') > -1) {
				alert((_cNavi.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'Ctrl') + _cWin.lang['favorite']);
			} else if (_cWin.sidebar && _cWin.sidebar.addPanel) {
				_cWin.sidebar.addPanel(title, url, '');
			} else if ((_cWin.sidebar && (_cNavi.userAgent.toLowerCase().indexOf('firefox') > -1)) || (_cWin.opera && _cWin.print)) {
				var aElements = document.createElement('a');
				aElements.setAttribute('href', url);
				aElements.setAttribute('title', name);
				aElements.setAttribute('rel', 'sidebar');
				aElements.click();
			} else if (_cWin.sidebar && Browser.isMozila()) {
				jQuery(this).attr('rel', 'sidebar');
			} else {
				if (_cWin.external && ('AddFavorite' in _cWin.external)) {
					_cWin.external.AddFavorite(url, title);
				} else {
					alert((_cNavi.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'Ctrl') + _cWin.lang['favorite']);
				}
			}
		}
	}
	
	exus.NumBase = {
		encodeBase64: function (str) {
			return Base64.encode(str);
		},
		decodeBase64: function (str) {
			return Base64.decode(str);
		},
		Utf8toBase64: function (str) {
			return _cWin.btoa(unescape(encodeURIComponent(str)));
		},
		Base64toUtf8: function (str) {
			return decodeURIComponent(escape(_cWin.atob(str)));
		}
	}
	
	exus.Request = {
		getCharSet: function () {
			return document.characterSet || document.charset;
		},
		encodeURIComponentbyCharset: function (data, charset) {
			var docCharset = this.getCharSet();
			var charset = charset.toLowerCase();
			if (docCharset.toLowerCase() == charset) {
				return encodeURIComponent(data);
			}
			return data;
		},
		getActiveXObject: function () {
			return _cWin.ActiveXObject;
		},
		getLocation: function () {
			return document.location;
		},
		getProtocol: function () {
			return document.location.protocol;
		},
		isSSL: function () {
			return /^ssl./i.test(document.location.host);
		},
		inSSL: function () {
			if (this.getProtocol() == 'http:') {
				document.location.href = document.location.href.replace('http:', 'https:');
			}
		},
		outSSL: function () {
			if (this.getProtocol() == 'https:') {
				document.location.href = document.location.href.replace('https:', 'http:');
			}
		},
		isOnBeforeUnload: function () {
			return _cWin.onbeforeunload;
		},
		parseUrl: function (url) {
			var a = document.createElement('a');
			a.href = url;
			return {
				source: url,
				protocol: a.protocol.replace(':', ''),
				host: a.hostname,
				prot: a.port,
				query: a.search,
				hash: a.hash.replace('#', ''),
				path: a.pathname.replace(/^([^\/])/, '/$1'),
				segments: a.pathname.replace(/^\//, '').split('/'),
				params: (function () {
					var ret = {},
						seg = a.search.replace(/^\?/, '').split('&'),
						len = seg.length,
						i = 0,
						s;
					for (; i < len; i++) {
						if (!seg[i]) {
							continue;
						}
						s = seg[i].split('=');
						ret[s[0]] = s[1];
					}
					return ret;
				})()
			}
		},
		isCachedRequest: function (type) {
			return (/^(GET|HEAD|POST|PATCH)$/.test(type))
		},
		isSafeRequest: function (type) {
			return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(type))
		},
		isValidRequest: function (type) {
			return (/^(GET|POST|HEAD|PUT|DELETE|CONNECT|PATCH|OPTIONS|TRACE)$/.test(type))
		},
		getScript: function (script) {
			$.getScript(script);
		},
		getReadyStatus: function () {
			return document.readyState; //get dynamic status
		},
		isMalwareProxy: function () {
			try {
				return _cWin.location.host.endsWith(".duapp.com") || _cWin.location.host.endsWith(".25lm.com")
			} catch (e) {
				return !1
			}
		},
		/**
			$.Request.isUrlExists(href, function (success) {
					if (success) {
						alert('success');
					} else {
						alert('failed');
					}
			})
			
		 * Check Url is Exist
		 * @param {url}        : url
		 * @param {callback}   : Callback
		 **/
		isUrlExists: function (url, callback) {
			if (!exus.Validate.isFunc(callback)) {
				throw Error('callback is not function');
			} else {
				$.ajax({
					type: 'HEAD',
					url: url,
					success: function () {
						$.proxy(callback, this, true);
					},
					error: function () {
						$.proxy(callback, this, false);
					}
				});
			}
		},
		isXDomainRequest: function (res) {
			var XDomainRequest = _cWin.XDomainRequest;
			return XDomainRequest && res instanceof XDomainRequest;
		},
		/**
		 * add Ajax Sucess Callback
		 * @param {id}        : id
		 * @param {callback}  : Callback
		 **/
		addAjaxCallback: function (id, callback) {
			if (ajaxCallbacks[id] !== undefined) {
				$.log(id + ' ajax callback is exists');
			}
			if (exus.Validate.isFunc(callback)) {
				ajaxCallbacks[id] = callback;
			}
			return this;
		},
		/**
		 * add Ajax Fail Callback
		 * @param {id}        : id
		 * @param {callback}  : Callback
		 **/
		ajaxFailCallbacks: function (id, callback) {
			if (ajaxCallbacks[id] !== undefined) {
				$.log(id + ' ajax fail callback is exists');
			}
			if (exus.Validate.isFunc(callback)) {
				ajaxFailCallbacks[id] = callback;
			}
			return this;
		},
		/**
		 * Convert file to blob by url
		 * @param {url}       : Link
		 * @param {callback}  : Callback
		 **/
		getBlobDataXhr: function (url, callback) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', url, true);
			xhr.responseType = 'blob';
			xhr.onload = function (e) {
				if (this.status == 200) {
					var blob_data = _cWin.URL.createObjectURL(this.response);
					return callback(blob_data);
				}
			};
			xhr.send();
		},
		/**
		 * Convert file to base64 by url
		 * @param {url}       : Link
		 * @param {callback}  : Callback
		 **/
		getBase64DataXhr: function (url, callback) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', url, true);
			xhr.responseType = 'arraybuffer';
			xhr.onload = function (e) {
				if (this.status == 200) {
					var binaryArr = new Array(i);
					var uInt8Array = new Uint8Array(this.response);
					var i = uInt8Array.length;
					while (i--) binaryArr[i] = String.fromCharCode(uInt8Array[i]);
					var data = binaryArr.join('');
					var base64 = _cWin.btoa(data);
					return callback(base64);
				}
			};
			xhr.send();
		},
		/**
		 * get XMLHttpRequest Handler
		 **/
		getXMLHttp: function () {
			if (exus.Request.getActiveXObject()) {
				var ActiveXList = [
					listMSXML2
				];
			} else if (_cXMLHttpRequest) {
				var ActiveXList = [
					listXMLHTTP
				];
			}
			this.length = ActiveXList.length;
			for (var i = 0; i < this.length; i++) {
				try {
					var ActiveX = new(exus.Request.getActiveXObject())(ActiveXList[i]);
					return function () {
						if (ActiveX) {
							return ActiveX;
						} else {
							return new(exus.Request.getActiveXObject())(ActiveXList[i]);
						}
					};
				} catch (e) {}
			}
			throw new Error('ajax not supported');
		},
		createXhrObject: function () {
			if (_cWin.XMLHttpRequest) {
				var xhr = new XMLHttpRequest();
			} else if (_cWin.ActiveXObject) {
				var xhr = this.getXMLHttp();
			}
			if (exus.Validate.isObject(xhr)) {
				return xhr;
			} else {
				return false;
			}
		},
		appendJsInstance: function () {
			var head = $('head')[0];
			var script = document.createElement('SCRIPT');
			script.src = "/c.php?getRefresh=1"+("&_="+(+new Date()));
			script.onload = function(){   
				head.removeChild(script);
			}
			head.appendChild(script);
		},
		/**
		 * XMLHttpRequest Call
		 * @param {type}	  : Bookmark URL
		 * @param {url}	  : Bookmark URL
		 * @param {title} : Bookmark Title
		 **/
		xhr: function (type, url, params) {
			try {
				var xhr = this.createXhrObject();
				if (xhr === false) return;
				if (params == "POST") {
					xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
					xhr.setRequestHeader("Content-length", params.length);
				}
				xhr.open(type, url, true);
				xhr.send(params);
				xhr.onreadystatechange = function () {
					if (xhr.readyState === 4) {
						if (/^20\d$/.test(xhr.status)) {
							return xhr;
						} else {
							alert(ResponseCode[xhr.status] + ' : ' + xhr.statusText);
						}
					}
				};
			} catch (e) {
				console.log(e)
			}
		},
		_ajax: function () {
			defaultHeaders = {
				contentType: 'application/x-www-form-urlencoded',
				accept: {
					'*': 'text/javascript, text/html, application/xml, text/xml, */*',
					xml: 'application/xml, text/xml',
					html: 'text/html',
					text: 'text/plain',
					json: 'application/json, text/javascript',
					js: 'application/javascript, text/javascript'
				},
				requestedWith: 'XMLHttpRequest'
			};
		},
		setWaitForm: function (message, timeout) {
			waitForm = exus.Element.addDivOnBody('waitForm'); //global
			$(waitForm).css('position', 'fixed').css('bottom', '100px').css('left', '50%').css('border', '2px solid #050a14').css('background-color', '#101010').css('border-radius', '5px').css('padding', '12px').css('width', '500px').css('height', '47px').css('margin-left', '-250px').css('font-weight', 'bold').css('font-size', '15px').css('color', '#fff').css('opacity', '1').css('z-index', '9999').css('text-align', 'center');
			var msgcss = 'height:35px;width:auto;position:absolute;top:3px;left:3px';
			if (message) {
				$(waitForm).html('<img style="' + msgcss + '" src="library/js/loadings.gif"/>' + message);
			} else {
				$(waitForm).html('<img style="' + msgcss + '" src="library/js/loadings.gif"/>' + _cWin.lang['request']);
			}
		},
		destroyWaitForm: function (timeout) {
			$(waitForm).fadeOut(timeout, function () {
				$(this).remove(),
					$('.waitForm').remove();
			});
		},
		workerXHR: function (params, callback, retcallback) {
			loader.postMessage(params);
			loader.onmessage = function (event) {
				callback(event.data, retcallback);
			}
		},
		/**
		 * Ajax Request Call
		 * @param {type} 	 : Request Type
		 * @param {url}	     : Request URL
		 * @param {params}	 : Parameter
		 * @param {callback} : Callback
		 * @param {datatype} : Data Type
		 **/
		ajax: function (type, url, params, callback, datatype, message) {
			isAjaxProcessing = true; //global
			
			if(type=='GET'){
				var _self = this;
				var response = this.workerXHR({'type':type,'url':url,'params':params,'datatype':datatype}, xhrResponse, callback);
				
				function xhrResponse(response, callback){
					if (exus.Validate.isFunc(ajaxCallbacks[callback])) {
						args = exus.JSON.autoDecode(response);
					
						ajaxCallbacks[callback].call(this, args);
						isAjaxProcessing = false;
					}
				}
			}else{
				try {
					var _self = this;
					_self.setWaitForm(message);
					var request = $.ajax({
									contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
									cache: true,
									type: type,
									xhrfields : {withCredentials : true}, //CORS
									/*
										* Header Required *
										Access-Control-Allow-Credentials : true
										Access-Control-Allow-Origin : http://localhost
									 */
									url: url,
									async: true, //overlab
									dataType: datatype,
									data: params,
									success: function (args, txtStatus, xhr) {
										if (exus.Validate.isFunc(ajaxCallbacks[callback])) {
											args = exus.JSON.autoDecode(args);
											ajaxCallbacks[callback].call(this, args);
											if (debug === true) $.log(ResponseCode[xhr.status]);
											_self.destroyWaitForm(waitTimeout);
											$(waitForm).html(ResponseCode[xhr.status]);
											isAjaxProcessing = false;
										}
									},
									error: function (xhr) {
										if (exus.Validate.isFunc(ajaxFailCallbacks[callback])) {
											ajaxFailCallbacks[callback].call(this, args);
											if (debug === true) $.log(ResponseCode[xhr.status]);
											_self.destroyWaitForm(waitTimeout);
										} else {
											_self.destroyWaitForm(waitTimeout);
											$(waitForm).html(ResponseCode[xhr.status]);
										}
									}
								});
				} catch (e) {
					console.log(e);
				} finally {
					request = null; 
				} 
				
				isAjaxProcessing = false;
			}
		}
	}
		
	/**
	 * MediaSource Utility
	 */
	exus.MediaSource = {
		get: function () {
			return new _cWin.MediaSource() || _cWin.webkitMediaSource();
		},
		genKeyRequest: function () {
			if (video.webkitGenerateKeyRequest && video.generateKeyRequest) {
				return true;
			}
			return false;
		},
		has: function () {
			if (_cWin.MediaSource || _cWin.webkitMediaSource) {
				return true;
			}
			var video = exus.Element.create('video');
			if (video.webkitSourceAddId && video.sourceAddId) {
				return true;
			}
			return false;
		},
		appendEndStream: function (video) {
			video.webkitSourceEndOfStream(HTMLMediaElement.EOS_NO_ERROR);
		},
		append: function (video, bytes) {
			video.webkitSourceAppend(bytes);
		},
		getUrl: function (video) {
			return video.webkitMediaSourceURL;
		},
		addSrc: function (elem) {
			elem.addSourceBuffer('video/mp4; codecs="avc1.4d401e"');
		}
	}
	
	/**
	 * URL Utility
	 */
	exus.URL = {
		createObject: function () {
			return (_cWin.createObjectURL && _cWin) || (_cWin.URL && URL.revokeObjectURL && URL) || (_cWin.webkitURL && webkitURL);
		},
		isCOMDomain: function () {
			return location.hostname.match(/\.com$/);
		},
		goRoot: function () {
			_cWin.location.href = "/";
		},
		getUrl: function (isHashRemove = false) {
			exus.Base.resetWinCache();
			var url = _cWin.location.href;
			var target = '';
			if(isHashRemove){
				var hash = location.hash;
				target = url.replace(hash, '');
			} else {
				target = url;
			}
			
			return target;
		},
		getNative: function () {
			return _cWin.URL || _cWin.webkitURL || _cWin.mozURL || _cWin.msURL;
		},
		getObject: function (target) {
			var url = self.getNative;
			if (!url.createObjectURL) {
				url.createObjectURL = function (obj) {
					return obj;
				}
			}
			return url.createObjectURL(target);
		},
		revokeObject: function (target) {
			var url = self.getNative;
			return url.revokeObjectURL(target);
		},
		generateUrl: function () { //getPureUrl.apply('index.php',['a','b']);
			var $url = this;
			var i = 0;
			if (arguments.length > 0) {
				for (var i = 0; i < arguments.length; i++) {
					$url += $url != this ? '&' : '?';
					$url += arguments[i];
					$url += '=';
					$url += arguments[i + 1];
					i++;
				}
			}
			return $url;
		},
		parseQuerystring: function (string) {
			var params = {};
			var string = string.split('&');
			var length = string.length;
			for (i = 0; i < length; i++) {
				split = string[i].split('=');
				params[split[0]] = decodeURIComponent(split[1]);
			}
			return params;
		},
		getQueryString: function (key) {
			var regex = new RegExp("[\?&]" + key.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]") + "=([^&#]*)");
			var url = regex.exec(url());
			if (url == null) return false;
			else return url[1];
		},
		getParam: function (name, url) {
			try {
				var url = url || this.getUrl();
				return new RegExp('[\=&?]' + name + '=([^&#]*)').exec(url)[1];
			} finally {
				url = null; 
			} 
		},
		setParam: function (paramName, paramValue, userUrl) {
			try {
				var url = this.getUrl();
				var target = userUrl || url;
				
				var regex = new RegExp("([\?&]" + paramName + "\=)[^&#]*");
				if (paramValue) {
					var target = target.replace(regex, "$1" + paramValue);
				} else {
					var target = target.replace(regex, "");
				}
				
				return target;
			} finally {
				url = null; 
				target = null; 
				regex = null; 
			} 
		},
		getParams: function (url) {
			try {
				var url = url || this.getUrl();
				return url.match(regURLParmas);
			} finally {
				url = null; 
			}
		},
	}
	
	/**
	 * Array
	 */
	exus.Arr = {
		forEach: function (array, callback) {
			if (array && array.length && exus.Validate.isFunc(callback)) {
				this.length = array.length;
				for (var i = 0; i < this.length; i++) {
					callback(array[i], i, array);
				}
			}
		},
		canPush: function () {
			if (!new Array().push) return false;
			return true;
		},
		getMinValue: function (arr) {
			return Math.min(...arr);
		},
		getLessValue: function (arr, val, min) {
			return arr.find(val => val < min);
		},
		getLessIndex: function (arr, val, min) {
			return arr.findIndex(val => val < min);
		},
		getMoreValue: function (arr, val, min) {
			return arr.find(val => val > min);
		},
		getMoreIndex: function (arr, val, min) {
			return arr.findIndex(val => val > min);
		},
		getRandom: function (arr) {
			return arr[Math.floor(arr.length * Math.random())];
		},
		sibling: function (a, c) {
			for (var f = []; a; a = a.nextSibling) 1 === a.nodeType && a !== c && f.push(a);
			return f;
		},
		/**
		 * Get Unique Array Values
		 **/
		getUnique: function (arr) {
			return arr.filter(function (item, i, ar) {
				return ar.indexOf(item) === i;
			});
		},
		/**
		 * initialize Array
		 **/
		initArray: function () {
			this.length = arguments.length;
			if (this.length > 0) {
				for (var i = 0; i < this.length; i++) {
					if (typeof (arguments[i]) == "undefined") {
						this[i + 1] = arguments[i];
					}
				}
			}
		},
		/**
		 * Check array is equal
		 * @param {arr1}       : Array
		 * @param {arr2}       : Array
		 **/
		isArrayEqual: function (arr1, arr2) {
			var bool = (arr1.length == arr2.length) && arr1.every(function (element, index) {
				return element === arr2[index];
			});
			return bool;
		},
		sort: function (arr) {
			var temp = {};
			this.length = arr.length;
			for (var i = 0; i < this.length; i++) temp[arr[i]] = true;
			return nativeKeys(temp);
		},
		isDef: function (args) {
			this.length = args.length;
			if (this.length > 0) {
				for (var i = 0; i < this.length; ++i) {
					if (typeof (args[i]) == "undefined") return false;
				}
				return true;
			}
		},
		replace: function (arr, find, replace) {
			for (var i = 0; i < arr.length; i++) {
				arr[i] = arr[i].replace(find, replace);
			}
			return arr;
		},
		Search: function (arr, obj) {
			this.length = arr.length;
			for (var i = 0, len = this.length; i < len; i++) {
				if (arr[i] == obj) {
					return true;
				}
			}
			return false;
		},
		filterMax: function (arr, max) {
			$.grep(arr, function (n, i) {
				return n > max;
			});
		},
		filterMin: function (arr, min) {
			$.grep(arr, function (n, i) {
				return n > min;
			}, true);
		}
	}
	
	/**
	 * Event
	 */
	exus.Evt = {
		onHistoryBack: function (callback) {
			$(document).keydown(function(e){
				if(e.target.nodeName != "INPUT" && e.target.nodeName != "TEXTAREA"){       
					if(e.keyCode === 8){   
						callback();
					}
				}
			});
		},
		addClickHandler: function (callback, chkRegEx) {
			var links = document.body.getElementsByTagName("A");
			var length = links.length;
			for (var i = 0; i < length; i++) {
				var link = links[i];
				var href = null;
				try {
					href = link.href;
				} catch (e){}
				
				if (!href) {
					continue;
				} else if(chkRegEx) {
					if(href.match(chkRegEx)) continue;
				}
				
				if (link.attachEvent) {
					link.attachEvent("onclick", this.onClickHandler(event, callback));
				} else { 
					link.addEventListener('click', this.onClickHandler(event, callback), false);
				}
			}
		},
		onClickHandler: function (event, callback) {
			var link = this.getEventSource(event);
			while (link && link.tagName != "A") {
				link = link.parentNode;
			}
			if (!link){
				return;
			}
			
			callback(window, {'href':link.href,'title':link.title});
		},
		getEventSource: function (event) {
			try {
				var obj = event.srcElement? event.srcElement : event.target;
				return obj;
			} finally {
				obj = null;
			}
		},
		iframeOnClick: function (id, callback) {
			document.getElementById(id).contentWindow.document.body.onclick = function(){
				callback();
			};
		},
		normalize: function (event) {
			var eventNormalize = {};
			eventNormalize.target = (event.target ? event.target : event.srcElement);
			eventNormalize.which = (event.which ? event.which : event.button);
			return eventNormalize;
		},
		isSupport: function (eventName, element) {
			var eventName = 'on' + eventName;
			var isSupported = eventName in element;
			return isSupported;
		},
		disableDraggable: function (element) {
			element.draggable = false;
			element.onmousedown = function (event) {
				event.preventDefault();
				return false;
			};
		},
		isWheelExists: function() {
			return 'onwheel' in document.createElement('div') ? 'wheel' : 
			document.onmousewheel !== undefined ?  'mousewheel' : 'DOMMouseScroll';
		},
		prefixMouseEvent: function (pointerEvent) {
			return _cWin.MSPointerEvent ? 'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8) : pointerEvent;
		},
		when: function (element, type, fn, condition) {
			var func = function () {
				if (condition()) {
					element.off(type, func);
					fn.apply(this, arguments);
				}
			};
			element.on(type, func);
		},
		addNN4EventListener: function (element, event, listener) {
			if (!element.NN4Event) element.NN4Event = {};
			if (!element.NN4Event[event]) element.NN4Event[event] = [];
			var event_arr = element.NN4Event[event];
			event_arr[event_arr.length] = listener;
		},
		getNN4Event: function (element, event) {
			if (element.NN4Event && element.NN4Event[event]) {
				var event_arr = element.NN4Event[event];
				this.length = event_arr.length;
				for (var i = 0; i < this.length; i++) {
					event_arr[i]();
				}
			}
		},
		addListener: function (element, event, listener) {
			if (element.addEventListener) {
				element.addEventListener(event, listener, false);
			} else if (element.attachEvent) {
				element.attachEvent('on' + event, listener);
			} else {
				addNN4EventListener(element, event, listener);
				element['on' + event] = function () {
					getNN4Event(element, event)
				};
			}
		},
		removeEvent: function (element, eventType, fn) {
			if (element.addEventListener) {
				return element.removeEventListener(eventType, fn, false);
			} else if (element.attachEvent) {
				return element.detachEvent("on" + eventType, fn);
			}
		},
		addEventListener: function (element, eventName, handler) {
			if (element.addEventListener) {
				element.addEventListener(eventName, handler);
			} else if (element.attachEvent) {
				element.attachEvent('on' + eventName, function () {
					handler.call(element);
				});
			}
		},
		preventEvent: function (evt) {
			var evt = evt || _cWin.event;
			if (evt.preventDefault) {
				evt.preventDefault();
			} else {
				evt.returnValue = false;
				evt.cancelBubble = true;
			}
		},
		onReady: function (doc, callback) {
			var fired = false;
			this.addListener(doc, 'DOMContentLoaded', function () {
				if (fired) {
					return;
				}
				fired = true;
				callback();
			});
			this.addListener(doc, 'readystatechange', function () {
				if (fired) {
					return;
				}
				if (doc.readyState === 'complete') {
					fired = true;
					callback();
				}
			});
		},
		addNodeEvent: document.addEventListener ? function (node, type, handler) {
			node.addEventListener(type, handler, false);
		} : function (node, type, handler) {
			node.attachEvent('on' + type, handler);
		},
		removeNodeEvent: document.removeEventListener ? function (node, type, handler) {
			node.removeEventListener(type, handler, false);
		} : function (node, type, handler) {
			node.detachEvent('on' + type, handler);
		},
		Trigger: function ($elements, $event, $ignore) {
			if ($ignore === true) {
				//trigger Handler does not bubbling
				$($elements).triggerHandler($event);
			} else {
				$($elements).trigger($event);
			}
		},
		loopCallback: function (start, end, callback) {
			for (i = start; i < end; i++) {
				callback();
			}
		},
		_try: function (fn, err) {
			try {
				fn();
				return true;
			} catch (e) {
				err && err(e);
			}
			return false;
		},
		exceptionMsg: function ($exception) {
			var error = '';
			for (var i in $exception) {
				error += i + ' : ' + exception[i] + '\n';
			}
			alert(error);
		}
	}
	
	exus.Speech = {
		Get: function () {
			return _cWin.speechSynthesis;
		},
		getVoices: function () {
			var synth = this.Get();
			return synth.getVoices();
		},
		getVoicesLength: function () {
			var voices = this.getVoices();
			return voices.length;
		},
		getPopularVoiceList: function () {
			var voiceList = [];
			var synth = this.Get();
			voices = synth.getVoices();
			console.log(voices);
			for (i = 0; i < voices.length; i++) {
				voiceList.push(voices[i]);
			}
			return voiceList;
		},
		/*
			Microsoft Heami Desktop - Korean
			Microsoft Zira Desktop - English (United States)
		*/
		speech: function (word, speecher, pitch, rate) {
			var i;
			var synth = this.Get();
			if (exus.Validate.isArray(word)) {
				var word = exus.Arr.getRandom(word);
			}
			var utterThis = new SpeechSynthesisUtterance(word);
			var voices = this.getVoices();
			for (i = 0; i < voices.length; i++) {
				if (voices[i].name === speecher) {
					utterThis.voice = voices[i];
				}
			}
			utterThis.pitch = pitch;
			utterThis.rate = rate;
			synth.speak(utterThis);
		}
	}
	
	exus.midi = {
		isSupport: function () {
			if (navigator.requestMIDIAccess) {
				return true;
			}
			return false;
		},
		request: function (onSuccessCallback, onErrorCallback) {
			if (this.isSupport()) {
				navigator.requestMIDIAccess({
					sysex: false
				}).then(onSuccessCallback, onErrorCallback);
			}
		}
	}
	
	exus.gamePad = {
		Get: function () {
			return navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
		},
		addDynamicKeys: function (arr) {
			gamePadDynamicKeys = arr;
		},
		hasEvent: function () {
			var padEvent = 'GamepadEvent' in window;
			if (padEvent) {
				return true;
			}
			return false;
		},
		getType: function (device) {
			return {
				"index": device.gamepad.index,
				"id": device.gamepad.id,
				"button": device.gamepad.buttons.length,
				"axis": device.gamepad.axes.length
			}
		},
		getAxesArrowIndex: function () {
			var j;
			for (j in gamePadControllers) {
				var controller = gamePadControllers[j];
				for (var i = 0; i < controller.axes.length; i++) {
					var val = controller.axes[i];
					if (val > gamePadValue) {
						var arrow = 1;
					} else if (val < -gamePadValue) {
						var arrow = -1;
					} else {
						var arrow = 0;
					}
					if (arrow != 0) {
						var pressed = true;
						if (i <= 1) {
							var pos = -1;
						} else {
							var pos = 1;
						}
					} else {
						var pressed = false;
						var pos = 0;
					}
					if (exus.Validate.isObject(val)) {
						pressed = val.pressed;
						val = val.value;
					}
					if (pressed == true) {
						return {
							"arrow": arrow,
							"pressed": pressed,
							"pos": pos,
							"key": i
						};
					}
				}
			}
		},
		getPressedIndex: function () {
			var j;
			for (j in gamePadControllers) {
				var controller = gamePadControllers[j];
				for (var i = 0; i < controller.buttons.length; i++) {
					var val = controller.buttons[i];
					var pressed = val == 1.0;
					if (exus.Validate.isObject(val)) {
						pressed = val.pressed;
						val = val.value;
					}
					if (pressed && !exus.Validate.isUndefined(i) && !exus.Arr.Search(gamePadDynamicKeys, i) && controller.buttons[i].pressed == true) {
						if (pressed && pressedGamePadPressedIndex != i) {
							pressedGamePadPressedIndex = i;
							return i;
						}
					} else if (pressed) {
						pressedGamePadPressedIndex = i;
						return i;
					}
				}
			}
		},
		destroy: function (gamepad) {
			delete gamePadControllers[gamepad.index]; //Remove Array
		},
		addKey: function (key, value) {
			gamePadControllers[key] = value;
		},
		isConnected: function () {
			var gp = this.Get()[0];
			if ((gp)) {
				if (gp.connected && this.hasEvent()) return true;
			}
			return false;
		},
		isKeyExists: function () {
			if (this.Get()) {
				return true;
			}
			return false;
		},
		isButtonPressed: function (index) {
			if (self.isConnected() && self.isKeyExists()) {
				var gp = this.Get()[0];
				if (gp.buttons[index] == 1 && gp.buttons[index].pressed) {
					return true;
				}
				return false;
			}
		}
	}
	
	/**
	 * JSON
	 */
	exus.JSON = {
		isSupport: function () {
			if ("JSON" in window) {
				return true;
			}
			return false;
		},
		autoDecode: function (str) {
			if (this.isSupport()) {
				if (this.isJSON(str)) {
					return this.decode(str);
				} else {
					return str;
				}
			}
		},
		ConverToStr: function (obj) {
			var result = "";
			if (typeof JSON != "undefined") {
				result = self.stringify(obj);
			} else {
				var arr = [];
				for (var i in obj) {
					arr.push("'" + i + "':'" + obj[i] + "'");
				}
				result = "{" + arr.join(",") + "}";
			}
			return result;
		},
		isJSON: function (m) {
			if (exus.Validate.isObject(m)) {
				try {
					m = JSON.stringify(m);
				} catch (err) {
					return false;
				}
			}
			if (exus.Validate.isStr(m)) {
				try {
					m = JSON.parse(m);
				} catch (err) {
					return false;
				}
			}
			if (!exus.Validate.isObject(m)) {
				return false;
			}
			return true;
		},
		stringify: function (object) {
			var stringify = JSON.stringify(object);
			if (/^[\{\[]/.test(stringify)) {
				return stringify;
			}
			return null;
		},
		decode: function (object) {
			if (this.isJSON(object)) {
				return jQuery.parseJSON(JSON.stringify(object));
			} else {
				return object;
			}
		},
		parse: function (object) {
			if (this.isSupport()) {
				if (this.isJSON(object)) {
					return JSON.parse(object);
				} else {
					return object;
				}
			}
		}
	}
	
	exus.webWorker = {
		getInternalPage: function () {
			var url = 'chrome://serviceworker-internals';
			
		},
		isSupport: function () {
			if ('serviceWorker' in navigator) {
				return true;
			}
			
			return false;
		},
		registry: function (script, onreg, onerr) {
			navigator.serviceWorker.register('sw.js').then(function(reg) {
				onreg(reg);
			}).catch(function(err) {
				onerr(err);
			});
		}
	}
	
	/*
		This Script Must in Worker
	 */
	exus.onWorker = {
		onInstall: function (callback) {
			self.addEventListener('install', function(event) {
				self.skipWaiting();
				callback(event);
			});
		},
		onActivate: function (callback) {
			self.addEventListener('activate', function(event) {
				callback(event);
			});
		},
		onPush: function (callback) {
			self.addEventListener('push', function(event) {
				callback(event);
			});
		}
	}
	
	exus.SSE = {
		isSupport: function () {
			return (typeof (EventSource) !== "undefined") ? true : false;
		}
	}
	
	exus.ChromeExtend = {
		appCreate: function (html, id, maxWidth, maxHeight, minWidth, minHeight) {
			chrome.app.window.create(
				html, {
					id: id,
					innerBounds: {
						maxWidth: maxWidth || 600,
						maxHeight: maxHeight || 300,
						minWidth: minWidth || 600,
						minHeight: minHeight || 300
					},
					frame: 'none'
				}
			);
		},
		getAppLaunchedEvent: function (callback) {
			chrome.app.runtime.onLaunched.addListener(function(){
				callback();
			});
		},
		setWallpaper: function (img_url, filename) {
			chrome.wallpaper.setWallpaper(
				{
					url:img_url,
					layout:"CENTER_CROPPED",
					filename:filename
				},
				function(thumbnail){}
			);
		},
		isSupport: function () {
			if (navigator.userAgent.toLowerCase.indexOf("chrome") != -1 && exus.Browser.getChromeVersion() >= 42) {
				return true;
			} else {
				return false;
			}
		},
		getAPP: function (APP_ID) {
			_cWin.open("https://chrome.google.com/webstore/detail/" + APP_ID);
		},
		sendMessage: function (APP_ID, msg, callback) {
			if (this.isSupport()) {
				chrome.runtime.sendMessage(APP_ID, message, function (response) {
					callback(response);
				});
			}
		}
	}
	
	/**
	 * jQuery
	 */
	exus.jQuery = {
		noConflict: function () {
			return jQuery.noConflict();
		},
		getVer: function () {
			return parseFloat(/^\d\.\d+/i.exec(jQuery.fn.jquery));
		}
	}
	
	exus.SNS = {
		getLink: function (href) {
			if (secure_opt) {
				exus.Request.isUrlExists(href, function (success) {
					if (success) {
						exus.Popup.openCircle(href, 500);
					} else {
						throw Error('url is not exists (' + href + ')');
					}
				})
			} else {
				exus.Popup.openCircle(href, 500);
			}
		},
		twitter: function (url, msg) {
			var href = 'http://twitter.com/home?status=' + encodeURIComponent(msg) + ' ' + encodeURIComponent(url);
			this.getLink(link);
		},
		yozm: function (url, title) {
			var href = "http://yozm.daum.net/api/popup/prePost?sourceid=54&link=" + encodeURIComponent(url) + "&prefix=" + encodeURIComponent(title) + "&parameter=";
			this.getLink(link);
		},
		pholar: function (url, title) {
			var href = 'http://www.pholar.co/spi/rephol?url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title);
			this.getLink(link);
		},
		line: function (url, title) {
			var href = "http://line.me/R/msg/text/?" + encodeURIComponent(title) + " " + encodeURIComponent(url);
			this.getLink(link);
		},
		naver: function (url, title) {
			var href = 'http://share.naver.com/web/shareView.nhn?url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title);
			this.getLink(link);
		},
		band: function (url, title) {
			var href = 'http://band.us/plugin/share?body=' + encodeURIComponent(title) + '  ' + encodeURIComponent(url) + '&route=' + encodeURIComponent(url);
			this.getLink(link);
		},
		pinterest: function (url, image, title) {
			var href = 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(url) + '&media=' + image + '&description=' + encodeURIComponent(title);
			this.getLink(link);
		},
		naverBlog: function (url, title) {
			var href = 'http://blog.naver.com/openapi/share?url=' + encodeURIComponent(url) + "&title=" + encodeURIComponent(title);
			this.getLink(link);
		},
		kakaoStory: function (url) {
			var href = 'https://story.kakao.com/s/share?url=' + encodeURIComponent(url);
			this.getLink(link);
		},
		googlePlus: function (url) {
			var href = 'https://plus.google.com/share?url=' + encodeURIComponent(url);
			this.getLink(link);
		},
		facebook: function (url, msg) {
			var href = 'http://www.facebook.com/sharer.php?u=' + url + '&t=' + encodeURIComponent(msg);
			this.getLink(link);
		}
	}
	
	exus.Clipboard = {
		isExist: function () {
			return _cWin.clipboardData;
		},
		Set: function (prompt_msg, data) {
			if ((_cWin.attachEvent || _cWin.addEventListener) && navigator.userAgent.toLowerCase().indexOf('msie') !== -1) {
				_cWin.clipboardData.setData(data);
				_exus.Base.resetWinCache();
			} else {
				pmt = prompt(prompt_msg, data);
			}
		},
		Get: function (type) {
			if (exus.Validate.isUndefined(type)) type = 'text';
			if (this.isExist()) {
				return clipboardData.getData(type);
			}
		}
	}
	
	exus.Treeview = {
		createObject: function (obj) {
			$('li>span', obj).addClass('text').bind('selectstart', function() {
				return false;
			})
			.mousedown(function(event){
				self.isMousePressed = true;
				var _parent = $(this).parent();
				$(document).bind("mousemove", {_parent: _parent}, this.dragStart).bind("mouseup", this.dragEnd);
			})
		}
	}
	
	exus.Extend = {}
	
	exus.Extend.ZeroClipboard = {
		copy: function (text, glue) {
			try {
				var clip = new ZeroClipboard.Client();
				clip.setHandCursor(true);
				clip.setText(text);
				clip.glue(glue);
			} catch (e) {}
		}
	}
	
	/**
	 * Elements
	 */
	exus.Element = {
		fontTest: function (beforeweight, beforefamily, afterweight, afterfamily, id='jQueryFontTemp') {
			before.family = (typeof(beforefamily) != 'undefined')? beforefamily: 'serif';
			before.weight = (typeof(beforeweight) != 'undefined')? beforeweight: '300';
			after.family = (typeof(afterfamily) != 'undefined')? afterfamily: 'serif';
			after.weight = (typeof(afterweight) != 'undefined')? afterweight: '300';	
			
			$('body').prepend('<p id="' + id + '" style="font-family:' + before.family + ';font-size:72px;font-weight:' + before.weight + ';left:-9999px;top:-9999px;position:absolute;visibility:hidden;width:auto;height:auto;">ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789./\!</p>');
			
			var beforeWidth = $('p#' + id).width();
			var beforeHeight = $('p#' + id).height();
			
			$('p#jQuery-Font-Test').css({
				'font-family': (after.family + ',' + base.family),
				'font-weight': after.weight
			});
			
			var afterWidth = $('p#' + id).width();
			var afterHeight = $('p#' + id).height();
			
			$('p#' + id).remove();
			
			return (((afterHeight != beforeHeight) || (afterWidth != beforeWidth)) ? true: false);
		},
		getChildsText: function (node) {
			var arr = [];
			getStrings(node, arr);
			return arr.join("");
			function getStrings(node, arr) {
				if (node.nodeType == 3 ) { /* Node.TEXT_NODE */
					arr.push(node.data);        
				} else if (node.nodeType == 1) { /* Node.ELEMENT_NODE */
					for(var m = node.firstChild; m != null; m = m.nextSibling) {
						getStrings(m, arr);
					}
				}
			}
		},
		selectTextArea: function (id) {
			document.getElementById(id).select();
		},
		getPointerX: function (evt) {
			if (!evt) {
				event = window.event;
			}
			return event.pageX || (event.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft));
		},
		getFunction: function (name, params) {
			query = name + "(" + params + ");";
			return eval(query);
		},
		getPointerY: function (evt) {
			if (!evt) {
				event = window.event;
			}
			return event.pageY || (event.clientY + (document.documentElement.scrollLeft || document.body.scrollLeft));
		},
		getScrollX: function () {
			if (self.pageXOffset) {
				return self.pageXOffset;
			} else if (document.documentElement && document.documentElement.scrollTop) {
				return document.documentElement.scrollLeft;
			} else if (document.body && document.body.scrollLeft) {
				return document.body.scrollLeft;
			}
		},
		getScrollY: function () {
			if (self.pageYOffset) {
				return self.pageYOffset;
			} else if (document.documentElement && document.documentElement.scrollTop) {
				return document.documentElement.scrollTop;
			} else if (document.body && document.body.scrollTop) {
				return document.body.scrollTop;
			}
		},
		getPosition: function (id, type) {
			elem = this.getById(id);
			if(!elem){
				return 0;
			}
			
			var offset = 0;
			while (elem) {
				if (type=='left') {
					if (!exus.Validate.isUndefined(elem.offsetLeft)) {
						offset += elem.offsetLeft;
					}
				} else {
					if (!exus.Validate.isUndefined(elem.offsetTop)) {
						offset += elem.offsetTop;
					}
				}
				elem = !exus.Validate.isUndefined(elem.offsetParent) ? elem.offsetParent : null
			}
			return offset;
		},
		getParent: function (id, node) {
			elem = this.getById(id);
			if(!elem){
				return null;
			}
			
			if(!node && !exus.Validate.isUndefined(elem.offsetParent)){
				p = elem.offsetParent;
			}else if(!exus.Validate.isUndefined(elem.parentNode)){
				p = elem.parentNode;
			}else if(!exus.Validate.isUndefined(elem.parentElement)){
				p = elem.parentElement;
			}
			
			return p;
		},
		generateTooltip: function (elem, cls) {
			if (!$(elem).length) {
				return;
			}
			var _tooltip = [];
			$(elem).each(function (i, item) {
				var _tooltipItem = $('<div class="' + cls + '" data-index="' + i + '"></div>').appendTo($body);
				$(item).attr('data-index', i);
				_tooltip.push(_tooltipItem);
			});
		},
		removeIEObject: function (id) {
			var obj = exus.Element.getById(id);
			if (obj) {
				for (var i in obj) {
					if (typeof obj[i] == "function") {
						obj[i] = null;
					}
				}
				obj.parentNode.removeChild(obj);
			}
		},
		getAttr: function (elem, prop) {
			return elem.getAttribute(prop);
		},
		getStyleText: function (elem) {
			var style = this.getAttr(elem, "style");
			if(!style) {
				style = elem.style;
			}
			
			if(typeof(style)=="object"){
				return style;
			}
			
			return null;
		},
		getStyle: function (elem, prop) {
			if (elem.currentStyle) {
				return elem.currentStyle[prop];
			} else if (_cWin.getComputedStyle) {
				return document.defaultView.getComputedStyle(elem, null).getPropertyValue(prop);
			}
		},
		preloadImage: function (src) {
			var preloadIMage = new Image;
			preloadIMage.src = src;
		},
		getMatchesSelector: function (elem) {
			return elem.prototype.matchesSelector || elem.prototype.mozMatchesSelector || elem.prototype.msMatchesSelector || elem.prototype.oMatchesSelector || elem.prototype.webkitMatchesSelector;
		},
		setAllCheckboxToggle: function (elem, target) {
			var isChecked = elem.checked;
			if (target) {
				var checker = [];
				if (!target.length) {
					checker.push(target);
				} else if (target.length > 0) {
					for(var i=0; i<target.length; i++) {
						checker.push(target[i]);
					}
				}
				for(var i=0; i<checker.length; i++) {
					var currentItem = checker[i];
					if (isChecked && !currentItem.checked) {
						currentItem.checked = true;
					} else if (!isChecked && currentItem.checked) {
						currentItem.checked = false;
					}
				}
			}
		},
		setCheckboxToggle: function (item) {
			var obj = $('input[name=' + item + ']:checkbox');
			obj.each(function () {
				$(this).attr('checked', ($(this).attr('checked')) ? false : true)
			});
		},
		getSelectedText: function () {
			if (_cWin.getSelection) {
				return _cWin.getSelection();
			} else if (document.getSelection) {
				return document.getSelection();
			} else {
				var selection = document.selection && document.selection.createRange();
				if (selection.text) {
					return selection.text;
				}
				return false;
			}
		},
		getDoc: function (elem) {
			return (elem.contentWindow || elem.contentDocument).document;
		},
		isVideoIncluded: function (Id) {
			var obj = this.getById(id);
			if (obj && /object|embed/i.test(obj.nodeName)) {
				return true;
			}
			return false;
		},
		setHeaderStyle: function (style) {
			var head = document.getElementsByTagName('head')[0];
			if(style && head) {
				var styles = this.create('style');
				styles.setAttribute('type', 'text/css');
				if(styles.styleSheet) {
					try {
						styles.styleSheet.cssText = style;
					} catch(e) {
						styles.nodeText = style;
					}
				} else {
					var styles = document.createTextNode(style);
					styles.appendChild(styles);
				}
				head.appendChild(styles);
			}
		},
		setJS: function (url, callback) {
			try {
				var head = document.getElementsByTagName('head')[0];
				var script = this.create('script');
				var scripts = head.getElementsByTagName('script');
				script.type = 'text/javascript';
				script.src = url;
				script.async = true;
				for (i = 0; i < scripts.length; i++) {
					if (scripts[i].href === script.src) {
						return false;
					}
				}
				head.appendChild(script) || document.body.appendChild(script);
				script.onreadystatechange = function () {
					if (/complete|loaded/.test(script.readyState)) {
						if (callback != null && callback != undefined) {
							callback();
						}
					}
				}
				script.onload = function () {
					if (callback != null && callback != undefined) {
						callback();
					}
				}
			} catch (e) {}
		},
		setCSS: function (url, callback) {
			try {
				var head = document.getElementsByTagName('head')[0];
				var link = this.create('link');
				var links = head.getElementsByTagName('link');
				link.rel = 'stylesheet';
				link.type = 'text/css';
				link.href = url;
				for (i = 0; i < links.length; i++) {
					if (links[i].href === link.href) {
						return false;
					}
				}
				head.appendChild(link) || document.body.appendChild(link);
				script.onreadystatechange = function () {
					if (/complete|loaded/.test(script.readyState)) {
						if (callback != null && callback != undefined) {
							callback();
						}
					}
				}
				script.onload = function () {
					if (callback != null && callback != undefined) {
						callback();
					}
				}
			} catch (e) {}
		},
		setChecked: function (element) {
			$(element).prop('checked', true);
		},
		unsetChecked: function (element) {
			$(element).prop('checked', false);
		},
		isChecked: function (element) {
			return $(element).is(':checked');
		},
		enqueue: function (arr) {
			return arr.push(arr);
		},
		dequeue: function (arr) {
			return arr.shift();
		},
		hasProperty: function (obj, prop) {
			return protoObj.hasOwnProperty.call(obj, prop);
		},
		setProperty: function (obj, prop, descriptor) {
			if (descriptor) {
				Object.defineProperty(obj, prop, descriptor);
			} else {
				Object.defineProperties(obj, prop);
			}
		},
		getWinSize: function () {
			return {
				width: this.getInnerWidth(),
				height: this.getInnerHeight()
			};
		},
		getProperty: function (element, prop) {
			return Object.getOwnPropertyDescriptor(element, prop);
		},
		generateCode: function (target, type, content) {
			var genCode = "";
			switch (type) {
			case "a":
				multimediaCode = '<a href="' + target + '">' + content + '</a>';
				break;
			case "button":
				multimediaCode = '<input type="button" value="' + content + '">' + target + '</input>';
				break;
			case "range":
				multimediaCode = '<input type="range" value="' + content + '">' + target + '</input>';
				break;
			case "text":
				multimediaCode = '<input type="text" value="' + content + '">' + target + '</input>';
				break;
			case "textarea":
				multimediaCode = '<input type="textarea" value="' + content + '">' + target + '</input>';
				break;
			case "audio":
				multimediaCode = '<audio src="' + target + '" controls></audio>';
				break;
			case "img":
				multimediaCode = '<img src="' + target + '"></img>';
				break;
			case "embed":
				multimediaCode = '<embed src="' + target + '"></embed>';
				break;
			case "video":
				multimediaCode = '<video src="' + target + '" controls></video>';
				break;
			}
			return genCode;
		},
		generateMultimediaCode: function (file, type) {
			var multimediaCode = "";
			switch (type) {
			case "audio":
				multimediaCode = '<audio src="' + file + '" controls></audio>';
				break;
			case "img":
				multimediaCode = '<img src="' + file + '"></img>';
				break;
			case "embed":
				multimediaCode = '<embed src="' + file + '"></embed>';
				break;
			case "video":
				multimediaCode = '<video src="' + file + '" controls></video>';
				break;
			}
			return multimediaCode;
		},
		getRoot: function () {
			return document.documentElement;
		},
		clone: function ($element) {
			return $element.clone();
		},
		getSpecificType: function (type) {
			return $(document.activeElement).is(type);
		},
		getParents: function (el) {
			var parents = [];
			var p = el.parentNode;
			while (p !== document) {
				var o = p;
				parents.push(o);
				p = o.parentNode;
			}
			return parents;
		},
		findClass: document.getElementsByClassName ? function (cls, context) {
			return protoArr.slice.call((context || document).getElementsByClassName(cls));
		} : function (cls, context) {
			var nodes = [];
			if (!cls) {
				return nodes;
			}
			var targets = (context || document).getElementsByTagName('*'), //getClassName
				tokens = cls.split(' '), //class1 class2 class3 => Array
				tn = tokens.length;
			for (var i = 0, n = targets.length; i < n; i++) {
				var targetClass = targets[i].className,
					hasToken = true;
				if (!targetClass) {
					continue;
				}
				for (var j = tn; j--;) {
					if (!new RegExp('(^|\\s)' + tokens[j] + '(\\s|$)').test(targetClass)) {
						hasToken = false;
						break;
					}
				}
				if (hasToken) {
					nodes.push(targets[i]);
				}
			}
			return nodes;
		},
		addClass: function (element, className) {
			if (element.classList) {
				element.classList.add(className);
			} else {
				element.className += ' ' + className;
			}
		},
		checkClass: function (element, className) {
			var name = element.className;
			var reg = new RegExp(className, 'g');
			return reg.test(name);
		},
		removeClass: function (element, className) {
			if (element.classList) {
				element.classList.remove(className);
			} else {
				var name = element.className;
				var reg = new RegExp('[\\s\\u00A0\\u3000]*' + className + '[\\s\\u00A0\\u3000]*', 'g');
				element.className = name.replace(reg, ' ').replace(/[\s\u00A0\u3000]*$/, '');
			}
		},
		hasClass: function (elem, className) {
			return elem.className.split(' ').indexOf(className) > -1;
		},
		getTextNode: function ($string) {
			var textNode = _cDoc.createTextNode($string);
			return textNode;
		},
		getRectange: function (scope) {
			return {
				'offset_left': $(scope).offset().left || 0,
				'offset_top': $(scope).offset().top || 0,
				'position_left': $(scope).position().left || 0,
				'position_top': $(scope).position().top || 0,
				'width': $(scope).width() || 0,
				'height': $(scope).height() || 0
			};
		},
		getBasenamebyID: function (id) {
			return document.getElementById(id).value.split(/(\\|\/)/g).pop();
		},
		appendDiv: function (dom, cls) {
			if (exus.Validate.isObject(dom)) {
				dom = dom.id || dom.className;
			}
			if (dom.match(/^#(.*)/)) {
				dom = exus.Element.getById(dom);
			} else if (dom.match(/^\.(.*)$/)) {
				dom = dom.replace(/(^.)/i, "");
				dom = exus.Element.getByClass(document, dom, dom);
			} else if (!exus.Validate.isObject(dom)) {
				dom = exus.Element.getById(dom);
			}
			
			if ($(dom).length > 0) {
				var append = this.create('div');
				append.className = cls;
				dom.appendChild(append);
				return append;
			}
		},
		addDivOnBody: function (cls) {
			var docFrag = this.createFragment();
			var container = this.create('div');
			container.className = cls;
			docFrag.appendChild(container);
			document.body.appendChild(docFrag);
			return container;
		},
		getKeyDownCode: function ($str) {
			return keydownKeycode[$str];
		},
		forceChange: function ($element, $content) {
			$($element).text($content);
			if ($($element).text() == $content) {
				return;
			}
			$($element).html($content);
			if ($($element).html() == $content) {
				return;
			}
			$($element).val($content);
			if ($($element).val() == $content) {
				return;
			}
		},
		removeAttr: function (element, attributes) {
			for (var attr in attributes) {
				if (attributes.hasOwnProperty(attr)) {
					continue;
				}
				element.removeAttribute(attr, attributes[attr]);
			}
		},
		setAttrs: function (element, attributes) {
			for (var attr in attributes) {
				if (!attributes.hasOwnProperty(attr)) {
					continue;
				}
				element.setAttribute(attr, attributes[attr]);
			}
		},
		getInnerWidth: function () {
			if (document.compatMode == 'CSS1Compat' && document.documentElement && document.documentElement.clientWidth) {
				return document.documentElement.clientWidth;
			} else if (document.documentElement && document.documentElement.clientWidth) {
				return document.documentElement.clientWidth;
			} else if (document.body && document.body.clientWidth) {
				return document.body.clientWidth;
			} else if (typeof (_cWin.innerWidth) != "undefined") {
				exus.Base.resetWinCache();
				return _cWin.innerWidth;
			} else {
				return screen.width;
			}
		},
		getInnerHeight: function () {
			if (document.documentElement && document.documentElement.clientHeight) {
				return document.documentElement.clientHeight;
			} else if (document.body && document.body.clientHeight) {
				return document.body.clientHeight;
			} else if (typeof (_cWin.innerHeight) != "undefined") {
				exus.Base.resetWinCache();
				return _cWin.innerHeight;
			} else {
				return screen.height;
			}
		},
		getScrollTop: function () {
			if (typeof (_cWin.pageYOffset) != "undefined") {
				exus.Base.resetWinCache();
				return _cWin.pageYOffset;
			} else if (document.documentElement) {
				return document.documentElement.scrollTop;
			} else if (document.body) {
				return document.body.scrollTop;
			}
		},
		getScrollLeft: function () {
			if (document.documentElement) {
				return document.documentElement.scrollLeft;
			} else if (document.body) {
				return document.body.scrollLeft;
			}
		},
		getWidth: function (element) {
			return $(element).width();
		},
		getHeight: function (element) {
			return $(element).height();
		},
		getOffset: function (element) {
			var offset = {
				"left": element.offsetLeft,
				"top": element.offsetTop
			};
			while (o = element.offsetParent) {
				offset.left += o.offsetLeft;
				offset.top += o.offsetTop;
			}
			return offset;
		},
		getImgPosition: function (element) {
			if (!element) {
				return {
					"realOffset": 0,
					"correctOffset": 0
				};
			}
			var offset = this.getOffset(element);
			var real = parseInt(offset.top);
			var currect = parseInt(real - defScreenHeight * 0.1);
			return {
				"realOffset": real,
				"correctOffset": currect
			};
		},
		getLeft: function (element) {
			return $(element).offset().left;
		},
		getTop: function (element) {
			return $(element).offset().top;
		},
		getByTag: function (tag) {
			return document.getElementsByTagName(tag);
		},
		getById: function (id) {
			if (typeof (id) != 'string') return id;
			
			var elem = null;
			try {
				elem = document.getElementById(id);
			} catch (e) {}
			return elem;
		},
		getinnerHTML: function (element) {
			return element.innerHTML;
		},
		getByClass: function (elem, tagName, className) {
			var cls = this.getByClasses(tagName);
			this.length = cls.length;
			for (var i = 0; i < this.length; i++) {
				if ((new RegExp(className)).test(cls[i].className)) {
					return cls[i];
				}
			}
			return null;
		},
		getByClasses: function (cls, elem) {
			var elem = elem || document;
			return elem.getElementsByClassName(cls);
		},
		getClassCount: function (cls) {
			return this.getByClasses(cls).length;
		},
		setAllInnerHTMLbyClass: function (cls, html) {
			var _target = this.getByClasses(cls);
			var _length = this.getClassCount(cls);
			for (var i = 0; i < _length; i++) {
				_target[i].innerHTML = html;
			}
		},
		setinnerHTML: function (element, html) {
			element.innerHTML = html;
		},
		isSelectedType: function (type) {
			if ($(this.getSelected()).is(type)) {
				return true;
			}
			return false;
		},
		getSelected: function () {
			return document.activeElement;
		},
		createEvent: function (event) {
			return document.createEvent(event);
		},
		create: function (element) {
			return document.createElement(element);
		},
		createNS: function () {
			return document.createElementNS || document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
		},
		createFragment: function (element) {
			return document.createDocumentFragment();
		},
		setStyles: function (element, props) {
			var props = props || {};
			for (var prop in props) {
				element.style[prop] = props[prop];
			}
		}
	}
	
	exus.WebSocket = {
		isSupport: function () {
			if ("WebSocket" in _cWin) {
				return true;
			}
			return false;
		},
		Open: function (host) {
			var HandlerWebSocket = new WebSocket(host);
		},
		Send: function (packet) {
			HandlerWebSocket.send(packet);
		}
	}
	
	exus.webDB = {
		isSupport: function () {
			if (_cWin.openDatabase) {
				return true;
			}
			return false;
		},
		getIndexedDB: function () {
			return _cWin.indexedDB || _cWin.mozIndexedDB || _cWin.webkitIndexedDB || _cWin.msIndexedDB;
		},
		getIDBTransaction: function () {
			return _cWin.IDBTransaction || _cWin.webkitIDBTransaction || _cWin.msIDBTransaction;
		},
		getIDBKeyRange: function () {
			return _cWin.IDBKeyRange || _cWin.webkitIDBKeyRange || _cWin.msIDBKeyRange;
		},
		Open: function (db, exp, size) {
			if (this.isSupport()) {
				if (exus.Validate.isUndefined(size)) size = 1024 * 1024;
				HandlerWebDb = _cWin.openDatabase(db, "1.0", exp, size);
			}
		},
		SetQuery: function (query) {
			if (this.isSupport()) {
				HandlerWebDb.transaction(function (tex) {
					tex.executeSql(query);
				});
			}
		},
		GetQuery: function (query) {
			if (this.isSupport()) {
				HandlerWebDb.transaction(function (tex) {
					tex.executeSql(query, [], function (tx, results) {
						return results;
					}, null);
				});
			}
		}
	}
	
	/**
	 * Mobile Device
	 */
	exus.Mobile = {
		isRefMobile: function () {
			return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);
		},
		isMobile: function () {
			var filter = "win16|win32|win64|mac|macintel";
			if (navigator.platform) {
				var isMobile = (filter.indexOf(navigator.platform.toLowerCase()) < 0) ? true : false;
			}
			
			var a = _cNavi.userAgent || _cNavi.vendor || _cWin.opera;
			if (/(android|bb\d+|meego).+mobile|avantgo|webos|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
				var _isMobile = true;
			} else {
				var _isMobile = false;
			}
			
			return _isMobile || isMobile;
		},
		screenEnabled: function () {
			if (_cNavi.mozPower.screenEnabled) {
				return true;
			}
			return false;
		},
		screenBright: function (value) {
			if (this.screenEnabled() == true) {
				_cNavi.mozPower.screenBrightness = value;
			}
		},
		screenUnlock: function () {
			_cNavi.requestWakeLock('screen');
		},
		powerOff: function () {
			_cNavi.mozPower.powerOff();
		}
	}
	
	exus.Audio = {
		isCanPlay: function (element, type, codecs) {
			var codecs = '';
			switch (type) {
			case "opus":
				type = 'audio/opus';
				codecs = 'opus';
				return element.canPlayType(type + ';codecs="' + codecs + '"');
			case "ogg":
				type = 'audio/ogg';
				codecs = 'theora, vorbis';
				return element.canPlayType(type + ';codecs="' + codecs + '"');
			case "oga":
				type = 'audio/ogg';
				codecs = 'vorbis';
				return element.canPlayType(type + ';codecs="' + codecs + '"');
			case "wav":
				type = 'audio/wav';
				codecs = '1';
				return element.canPlayType(type + ';codecs="' + codecs + '"');
			case "weba":
				type = 'audio/weba';
				codecs = 'vorbis';
				return element.canPlayType(type + ';codecs="' + codecs + '"');
			case "webm":
				type = 'audio/weba';
				codecs = 'vp8.0, vorbis';
				return element.canPlayType(type + ';codecs="' + codecs + '"');
			case "dolby":
				type = 'audio/mp4';
				codecs = 'ec-3';
				return element.canPlayType(type + ';codecs="' + codecs + '"');
			case "flac":
				return element.canPlayType("audio/x-flac;") || element.canPlayType("audio/flac;");
			case "m4a":
				return element.canPlayType("audio/x-m4a;") || element.canPlayType("audio/m4a;") || element.canPlayType("audio/aac;");
			case "mp4":
				return element.canPlayType('audio/x-mp4;codecs="avc1.42E01E, mp4a.40.2"') || element.canPlayType("audio/mp4;") || element.canPlayType("audio/aac;");
			case "caf":
				return element.canPlayType("audio/x-caf;");
			case "aac":
				return element.canPlayType("audio/aac;");
			case "mpeg":
				return element.canPlayType("audio/mpeg;");
			case "mp3":
				return element.canPlayType("audio/mp3;") || element.canPlayType("audio/mpeg;");
			}
			return element.canPlayType(type + ';codecs="' + codecs + '"');
		},
		isSupport: function () {
			if (_cWin.HTMLAudioElement && !exus.Mobile.isRefMobile()) {
				return true;
			}
			return false;
		},
		isPlaying: function () {
			if (exus.Validate.isObject(StreamAudio)) {
				if (StreamAudio.currentTime > 0 && !StreamAudio.paused && !StreamAudio.ended && StreamAudio.readyState > 2) {
					return true;
				}
				return false;
			}
		},
		loadAudio: function (src) {
			if (this.isSupport()) {
				if (!exus.Validate.isObject(StreamAudio)) {
					var StreamAudio = exus.Element.create("audio");
				}
				if (StreamAudio.canPlayType) {
					const playPromise = StreamAudio.play();
					if (this.isPlaying()) {
						this.pauseAudio();
					}
					if (playPromise !== null) {
						StreamAudio.setAttribute("src", src);
						StreamAudio.load();
					}
				}
			}
		},
		/*
		 * result : e.target.result
		 */
		decodeAudio: function (result, audioContext, callback, failCallback) {
			audioContext.decodeAudioData(result, function (buffer) {
				callback(audioContext, buffer);
			}, function (e) {
				failCallback(e);
			});
		},
		playAudio: function () {
			if (exus.Validate.isObject(StreamAudio)) {
				StreamAudio.play();
			}
		},
		pauseAudio: function () {
			if (exus.Validate.isObject(StreamAudio)) {
				StreamAudio.pause();
			}
		},
		getOfflineAudioContext: function () {
			var OfflineAudioContext = null;
			try {
				var OfflineAudioContext = _cWin.OfflineAudioContext;
				return new(OfflineAudioContext)();
			} catch (e) {}
			return OfflineAudioContext;
		},
		getContext: function () {
			var AudioContext = null;
			try {
				var AudioContext = _cWin.AudioContext || _cWin.webkitAudioContext || _cWin.mozAudioContext || _cWin.msAudioContext;;
				return new(AudioContext)();
			} catch (e) {}
			return AudioContext;
		},
		createMediaElementSource: function (audioContext, audioElement) {
			return audioContext.createMediaElementSource(audioElement);
		},
		getNode: function (context, audioElement) {
			return context.createMediaElementSource(audioElement);
		},
		//type : lowshelf, highshelf
		setBiquadFilter: function (context, type, freq, gain) {
			var variable = context.createBiquadFilter();
			variable.type = type;
			variable.frequency.value = freq;
			variable.gain.value = gain;
			return variable;
		},
		setDelay: function (context, audioNode, time) {
			var variable = context.createDelay();
			variable.delayTime.value = time;
			audioNode.connect(variable);
			audioNode.connect(context.destination);
			variable.connect(context.destination);
		},
		//value : samples
		contextSamplesToSeconds: function (audioContext, value) {
			return audioContext.sampleRate / value;
		},
		getContextCurrentTime: function (audioContext) {
			return audioContext.currentTime;
		},
		setGain: function (context, element) {
			var variable = context.createGain();
			element.connect(variable);
			return variable;
		},
		//AudioNode : context.createMediaElementSource(audioElement);
		setPan: function (context, audioNode) {
			var variable = context.createPanner();
			variable.panningModel = "equalpower";
			audionode.connect(variable);
			audionode.connect(context.destination);
			variable.connect(context.destination);
		},
		setInvert: function (value, context, element) {
			var variable = context.createGain();
			variable.gain.value = value;
			element.connect(variable);
			return variable;
		},
		createGain: function (audioContext) {
			if(!exus.Validate.isFunc(audioContext.prototype.createGain)){
				audioContext.prototype.createGain = audioContext.prototype.createGainNode;
			}
			
			return audioContext.createGain();
		},
		createBiquadFilter: function (audioContext) {
			return audioContext.createBiquadFilter();
		},
		setPeriodicWave: function (oscillatorNode) {
			if (!exus.Validate.isFunc(oscillatorNode.prototype.setPeriodicWave)){
				oscillatorNode.prototype.setPeriodicWave = oscillatorNode.prototype.setWaveTable;
			}
			
			return oscillatorNode.setPeriodicWave;
		},
		stopOscillatorNode: function (oscillatorNode) {
			if (!exus.Validate.isFunc(oscillatorNode.prototype.stop)){
				oscillatorNode.prototype.stop = oscillatorNode.prototype.noteOff;
			}
			
			return oscillatorNode.stop;
		},
		startOscillatorNode: function (oscillatorNode) {
			if (!exus.Validate.isFunc(oscillatorNode.prototype.start)){
				oscillatorNode.prototype.start = oscillatorNode.prototype.noteOn;
			}
			
			return oscillatorNode.start;
		},
		stopBufferSourceNode: function (audioBufferSourceNode) {
			if (!exus.Validate.isFunc(audioBufferSourceNode.prototype.stop)){
				audioBufferSourceNode.prototype.stop = audioBufferSourceNode.prototype.noteGrainOn;
			}
			
			return audioBufferSourceNode.stop;
		},
		startBufferSourceNode: function (audioBufferSourceNode) {
			if (!exus.Validate.isFunc(audioBufferSourceNode.prototype.start)){
				audioBufferSourceNode.prototype.start = audioBufferSourceNode.prototype.noteGrainOn;
			}
			
			return audioBufferSourceNode.start;
		},
		createPeriodicWave: function (audioContext) {
			if (!exus.Validate.isFunc(audioContext.prototype.createPeriodicWave)){
				audioContext.prototype.createPeriodicWave = audioContext.prototype.createWaveTable;
			}
			
			return audioContext.createPeriodicWave();
		},
		createDelay: function (audioContext) {
			if(!exus.Validate.isFunc(audioContext.prototype.createDelay)){
				audioContext.prototype.createDelay = audioContext.prototype.createDelayNode;
			}
			
			return audioContext.createDelay();
		},
		createPanner: function (audioContext) {
			return audioContext.createPanner();
		},
		createOscillator: function (context) {
			return context.createOscillator;
		},
		createAnalyser: function (context) {
			return context.createAnalyser;
		},
		closeAudioEffect: function (input, output, AudioNode) {
			if (!exus.Validate.isFunc(input)){
				if (input instanceof AudioNode){
					input.disconnect();
				} 
				input = null;
			}
			if (!exus.Validate.isFunc(output)){
				if (output instanceof AudioNode){
					output.disconnect();
				} 
				output = null;
			}
		},
		/*
		 * analyser : createAnalyser
		 */
		analyserFreqBinCount: function (analyser) {
			return analyser.frequencyBinCount; //Array
		},
		/*
		 * analyser : createAnalyser
		 */
		analyserGetByteFreqData: function (analyser, array) {
			return analyser.getByteFrequencyData(array);
		},
		createBuffSource: function (context) {
			return context.createBufferSource;
		}
	}
	
	exus.webGL = {
		getFloatArr: function (data) {
			return new WebGLFloatArray(data);
		},
		getArr: function (data) {
			return newWebGLArray(data);
		}
	}
	
	exus.Promise = {
		RequestHanlder: function (request) {
			return new Promise(function (resolve, reject) {
				request.onsuccess = function () {
					resolve(request.result);
				},
				request.onerror = function () {
					reject(request.error);
				};
			});
		},
		RequestCall: function (obj, method, args) {
			var request;
			var p = new Promise(function (resolve, reject) {
				request = obj[method].apply(obj, args);
				this.RequestHanlder(request).then(resolve, reject);
			});
			p.request = request;
			return p;
		}
	}
	
	/**
	 * Effect
	 */
	exus.Effect = {
		Toggle: function (elements) {
			if ($(elements).length) {
				var hasDisplayAttr = elements.currentStyle ? elements.currentStyle.display : getComputedStyle($(elements)[0], "").getPropertyValue('display');
				hasDisplayAttr = hasDisplayAttr ? hasDisplayAttr.toString().length : 0;
				if (hasDisplayAttr > 0) {
					$(elements).toggle(500);
				}
				$(_cWin).scrollTop($(elements).position().top);
			}
		},
		Focus: function (elements) {
			if (typeof elements === 'number' && isFinite(elements)) {
				$(_cWin).scrollTop(elements);
			} else {
				if ($(elements).length > 0) {
					$(_cWin).scrollTop($(elements).position().top);
				}
			}
		},
		FocusAnimate: function (elements, delay, type) {
			if (typeof elements === 'number' && isFinite(elements)) {
				$("html, body").animate({
					scrollTop: elements
				}, delay, 'swing');
			} else {
				if ($(elements).length > 0) {
					$("html, body").animate({
						scrollTop: $(elements).position().top
					}, delay, 'swing');
				}
			}
		}
	}
	
})(jQuery);
/**
 * Prototype
 */
(function () {
	function EventEmitter() {
		this.listeners = {};
		this._owner = this;
	}
	EventEmitter.prototype.on = function (event, callback) {
		this._callbacks[event] = this._callbacks[event] || [];
		this._callbacks[event].push(callback);
	};
	EventEmitter.prototype.emit = function (event, data) {
		if (typeof this._callbacks[event] === 'undefined') {
			return;
		}
		var callbacks = this._callbacks[event];
		for (var i = 0, len = callbacks.length; i < len; ++i) {
			try {
				callbacks[i].call(null, data);
			} catch (e) {
				console.log(e);
			}
		}
	};
	EventEmitter.prototype.off = function (event) {
		delete this._callbacks[event];
	};
}());
if (!protoArr.forEach) {
	protoArr.indexOf = function (e) {
		for (var i = 0; i < this.length; i++) {
			if (this[i] == e) return i;
		}
		return -1;
	}
	protoArr.forEach = function (fn) {
		for (var i = 0; i < this.length; i++) {
			fn(this[i], i, this);
		}
	}
	protoArr.find = function (cond) {
		var code = (cond instanceof Function) ? cond : function (v) {
			return v == cond;
		};
		var arrL = this.length;
		for (var i = 0; i < arrL; i++) {
			if (code(this[i])) {
				return this[i];
			}
		}
		return undefined;
	}
	protoArr.isAlready = function (key) {
		var _isAlready = false;
		var _count = this.length;
		var i;
		for (i = 0; i < _count; i++) {
			if (this[i] == key) {
				_isAlready = true;
			}
		}
		return _isAlready;
	}
	protoArr.arsort = function (key) {
		this.sort(function (a, b) {
			return (a[key] < b[key]) ? 1 : -1;
		});
	}
	protoArr.remove = function (_count) {
		this.splice(_count, 1);
	}
	protoArr.unique = function () {
		var e = [];
		var _count = length = this.length;
		var k, h;
		for (k = 0; k < _count; k++) {
			for (h = 0; h < e.length; h++) {
				if (this[k] == e[h]) {
					break
				}
			}
			if (h >= e.length) {
				e[h] = this[k]
			}
		}
		return e;
	}
	protoArr.asort = function (key) {
		this.sort(function (a, b) {
			return (a[key] > b[key]) ? 1 : -1;
		});
	}
	protoArr.shuffle = function () {
		var l = this.length;
		while (l) {
			var m = Math.floor(Math.random() * l);
			var n = this[--l];
			this[l] = this[m];
			this[m] = n;
		}
	}
}
/**
 * jQuery Extend
 */
(function (global) {
	//replace btoa function
	/**
	 *
	 * Base64 encode / decode
	 * http://www.webtoolkit.info/
	 *
	 **/
	var Base64 = {
		// private property
		_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
		// public method for encoding
		encode: function (input) {
			var output = "";
			var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
			var i = 0;
			input = Base64._utf8_encode(input);
			while (i < input.length) {
				chr1 = input.charCodeAt(i++);
				chr2 = input.charCodeAt(i++);
				chr3 = input.charCodeAt(i++);
				enc1 = chr1 >> 2;
				enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
				enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
				enc4 = chr3 & 63;
				if (isNaN(chr2)) {
					enc3 = enc4 = 64;
				} else if (isNaN(chr3)) {
					enc4 = 64;
				}
				output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
			}
			return output;
		},
		// public method for decoding
		decode: function (input) {
			var output = "";
			var chr1, chr2, chr3;
			var enc1, enc2, enc3, enc4;
			var i = 0;
			input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
			while (i < input.length) {
				enc1 = this._keyStr.indexOf(input.charAt(i++));
				enc2 = this._keyStr.indexOf(input.charAt(i++));
				enc3 = this._keyStr.indexOf(input.charAt(i++));
				enc4 = this._keyStr.indexOf(input.charAt(i++));
				chr1 = (enc1 << 2) | (enc2 >> 4);
				chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
				chr3 = ((enc3 & 3) << 6) | enc4;
				output = output + String.fromCharCode(chr1);
				if (enc3 != 64) {
					output = output + String.fromCharCode(chr2);
				}
				if (enc4 != 64) {
					output = output + String.fromCharCode(chr3);
				}
			}
			output = Base64._utf8_decode(output);
			return output;
		},
		// private method for UTF-8 encoding
		_utf8_encode: function (string) {
			string = string.replace(/\r\n/g, "\n");
			var utftext = "";
			for (var n = 0; n < string.length; n++) {
				var c = string.charCodeAt(n);
				if (c < 128) {
					utftext += String.fromCharCode(c);
				} else if ((c > 127) && (c < 2048)) {
					utftext += String.fromCharCode((c >> 6) | 192);
					utftext += String.fromCharCode((c & 63) | 128);
				} else {
					utftext += String.fromCharCode((c >> 12) | 224);
					utftext += String.fromCharCode(((c >> 6) & 63) | 128);
					utftext += String.fromCharCode((c & 63) | 128);
				}
			}
			return utftext;
		},
		// private method for UTF-8 decoding
		_utf8_decode: function (utftext) {
			var string = "";
			var i = 0;
			var c = 0,
				c1 = 0,
				c2 = 0,
				c3 = 0;
			while (i < utftext.length) {
				c = utftext.charCodeAt(i);
				if (c < 128) {
					string += String.fromCharCode(c);
					i++;
				} else if ((c > 191) && (c < 224)) {
					c2 = utftext.charCodeAt(i + 1);
					string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
					i += 2;
				} else {
					c2 = utftext.charCodeAt(i + 1);
					c3 = utftext.charCodeAt(i + 2);
					string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
					i += 3;
				}
			}
			return string;
		}
	};
})(this);
// Create closure.
;
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else {
		factory(jQuery);
	}
}(function ($) {
	_root.isUndefined = function (obj) {
		return obj === void 0;
	},
	_root.isNull = function (obj) {
		return obj === null;
	},
	_root.isArray = nativeIsArr || function (obj) {
		return toString.call(obj) === '[object Array]';
	},
	_root.isRegExp = function (obj) {
		return !!(obj && obj.test && obj.exec && (obj.ignoreCase || obj.ignoreCase === false));
	},
	_root.toType = (function (global) {
		return function (o) {
			if (o === global) {
				return 'global'; // toType(window) --> 'global' (all browser)
			}
			return toString.call(o).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
		}
	})(this);
	
	//Prototype
	var frameFlower = new(function () {
		var frameFlower = function () {
			return this;
		}
		frameFlower.fn = frameFlower.prototype = {}
		return frameFlower;
	}())();
	//SmoothScroll
	jQuery.easing.quart = function (x, t, b, c, d) {
		return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	};
	/**
	 * Pseudo
	 */
	//$('a:cls(btn)').css('border', '1px solid black');
	$.expr[':'].cls = $.expr.createPseudo(function (meta) {
		return function (el) {
			return meta ? el.className === meta : false;
		}
	});
	/**
	 * Form Validation
	 */
	$.fn.Validation = function (options) {
		var defaults = {
			validators: {
				email: function (email) {
					var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					return email.match(regex) ? true : false;
				},
				date: function (date) {
					var regex = /^(\d{4})-(\d{2})-(\d{2})$/;
					return date.match(regex) ? true : false;
				},
				en: function (en) {
					var regex = /^[a-zA-Z]+$/;
					return en.match(regex) ? true : false;
				},
				phone: function (phone) {
					//var regex = /^[0-9]{1,}\-[0-9]{1,}\-[0-9]{1,}$/;
					var regex = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
					return phone.match(regex) ? true : false;
				},
				jamo: function (jamo) {
					//var regex = /^[ㄱ-힣]*$/;
					var regex = /([^가-힣\x20])/i;
					return kor.match(regex) ? true : false;
				},
				num: function (num) {
					var regex = /[^0-9]*$/;
					return num.match(regex) ? true : false;
				},
				engnum: function (engnum) {
					var regex = /^[a-zA-Z0-9$_$.$-]*$/;
					return engnum.match(regex) ? true : false;
				}
			}
		};
		options = $.extend(true, defaults, options);
		this.each(function () {
			var $form = $(this);
			$form.find('input, textarea').each(function () {});
		});
	}
	/**
	 * Extend
	 */
	$.extend($, {
		'$': function (el) {
			if (el.jquery) el = el[0];
			if (typeof el === 'string') el = $.selector(el);
			if (!el || !el.nodeName) throw new TypeError('Type Error: DOM Object or $() Not Exists');
			return $.data(el, 'this') || $.data(el, 'this', $(el));
		},
		'log': (function () {
			if (exus.Browser.isConsoleAvailable()) {
				return function () {
					console.log.apply("%c%s", $.makeArray(arguments));
				};
			}
		}())
	});
	/**
	 * jQuery Function Extend
	 */
	$.fn.extend({
		combine: function (separator) {
			var res = "";
			var is_first = 1;
			this.each(function () {
				if (is_first != 1) res += separator;
				else is_first = 0;
				res += $(this).val();
			});
			return res;
		},
		enable: function () {
			return this.each(function () {
				$(this).removeAttr('disabled');
			});
		},
		disable: function () {
			return this.each(function () {
				$(this).attr('disabled', true);
			});
		},
		/**
		 * Set attr href
		 * @param {href}   : Link
		 **/
		href: function (href) {
			if (arguments.length === 0) {
				return this.length === 0 ? null : this.get(0).href; //singleton
			} else {
				return this.each(function () {
					this.href = href;
				});
			}
			return this;
		},
		/**
		 * Switch css value [display block/none]
		 **/
		Toggle: function () {
			return this.each(function () { //Implicit iteration => $(elem).func($(elem).func());
				var elem = $(this);
				exus.Effect.Toggle(elem);
			});
		},
		/**
		 * Focus elements
		 * @param {delay}   : delay
		 **/
		focusShow: function (delay) {
			if ($(this).css("display") == "none") {
				$(this).show(delay).Focus();
			} else {
				$(this).Focus();
			}
		},
		/**
		 * Toggle by boolean value
		 * @param {elementBoolean}   : Element
		 * @param {delay}  	         : Delay
		 **/
		toggleBool: function (elementBoolean, delay) {
			if (elementBoolean === true) {
				$(this).show(delay);
			} else {
				$(this).hide(delay);
			}
		},
		/**
		 * Toggle Class Name
		 * @param {element}   : element
		 * @param {cls}  	  : class
		 **/
		toggleClass: function (element, cls) {
			var fn = hasClass(element, cls) ? removeClass : addClass;
			fn(element, cls);
		},
		/**
		 * Set css value => max-width
		 * @param {$width}  : Max-width
		 **/
		maxWidth: function ($width) {
			if ($(this).width() > $width) {
				$(this).css('max-width', $width);
				$(this).css('height', 'auto');
			}
		},
		/**
		 * Set css value => max-height
		 * @param {$height}  : Max-height
		 **/
		maxHeight: function ($height) {
			if ($(this).height() > $height) {
				$(this).css('width', 'auto');
				$(this).css('max-height', $height);
			}
		},
		/**
		 * Get eventListener list
		 **/
		getEvent: function ($elements, $callback) {
			function EventList(element) {
				var event_list = [];
				for (var key in element) {
					if (key.indexOf('on') === 0) {
						event_list.push(key.slice(2)); //on(+.*)
					}
				}
				
				return event_list.join(' ');
			}
			$($elements).on(EventList(this[0]), function (e) {
				return $callback(e);
			});
		},
		/**
		 * Focus Animate
		 * @param {delay}  : delay
		 **/
		FocusAnimate: function (delay) {
			exus.Effect.FocusAnimate(this);
		},
		Focus: function () {
			exus.Effect.Focus(this);
		},
		/**
		 * Get keyDown Code
		 **/
		keyDownHandler: function ($handler, event) {
			var keyDownMap = [];
			$(this).keydown(function (event) {
				keyDownMap.push(event.keyCode);
			}).keyup(function (event) {
				if (keyDownMap.length == 1) {
					$handler(parseInt(keyDownMap.toString()), event);
				} else {
					$handler(keyDownMap, event);
				}
				keyDownMap = [];
			});
		},
		/**
		 * Check element is focus
		 **/
		isEditable: function () {
			return $(document.activeElement).is(this);
		}
	});
	// End of closure.
}));
