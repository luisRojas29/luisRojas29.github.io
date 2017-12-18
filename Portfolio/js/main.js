(function(){

	'use strict';

	const ANCHO = window.innerWidth;
	const ALTO = window.innerHeight;

	let win = document.getElementsByClassName('l-window')[0];
	let louver_top = document.getElementsByClassName('c-louver--top')[0];
	let louver_right = document.getElementsByClassName('c-louver--right')[0];
	let louver_left = document.getElementsByClassName('c-louver--left')[0];

	let lv_tgr = document.getElementsByClassName('c-louver__tgr')[0];
	let lv_top_tgr = document.getElementsByClassName('c-louver__tgr--top')[0];
	let lv_lft_tgr = document.getElementsByClassName('c-louver__tgr--left')[0];
	let lv_rgt_tgr = document.getElementsByClassName('c-louver__tgr--right')[0];

	var btn_1up = document.getElementsByClassName('u-tgr-btn__1up')[0];
	var btn_1dw = document.getElementsByClassName('u-tgr-btn__1down')[0];

	var btn_1lf = document.getElementsByClassName('u-tgr-btn__1left')[0];
	var btn_1rg = document.getElementsByClassName('u-tgr-btn__1right')[0];

	var btn_2lf = document.getElementsByClassName('u-tgr-btn__2left')[0];
	var btn_2rg = document.getElementsByClassName('u-tgr-btn__2right')[0];

	louver_top.style.top = - ALTO + "px";
	lv_top_tgr.style.left = (ANCHO/2) - (lv_tgr.offsetWidth/2) + "px";

	louver_left.style.left = - ANCHO + "px";
	lv_lft_tgr.style.top = (ALTO/2) - (lv_tgr.offsetHeight/2) + "px";

	louver_right.style.right = -ANCHO + "px";
	lv_rgt_tgr.style.top = (ALTO/2) - (lv_tgr.offsetHeight/2) + "px";

	function transitionEndEventName () {
	    var i,
	        undefined,
	        el = document.createElement('div'),
	        transitions = {
	            'transition':'transitionend',
	            'OTransition':'otransitionend',
	            'MozTransition':'transitionend',
	            'WebkitTransition':'webkitTransitionEnd'
	        };

	    for (i in transitions) {
	        if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
	            return transitions[i];
	        }
	    }
	}

	var transitionEnd = transitionEndEventName();

	function clearHeight(){
		
		this.style.height = 0;
		
		win.style.display = 'inherit';
	}

	btn_1dw.addEventListener("click", function(e){
		
		win.classList.remove("u-fade-in");
		win.classList.add("u-fade-out");

		louver_left.classList.remove("u-fade-in");
		louver_left.classList.add("u-fade-out");

		louver_right.classList.remove("u-fade-in");
		louver_right.classList.add("u-fade-out");

		louver_top.style.top = 0;

		louver_top.style.zIndex = 99;
		
	});

	btn_1up.addEventListener("click", function(e){

		win.classList.remove("u-fade-out");
		win.classList.add("u-fade-in");

		louver_left.classList.remove("u-fade-out");
		louver_left.classList.add("u-fade-in");

		louver_right.classList.remove("u-fade-out");
		louver_right.classList.add("u-fade-in");

		louver_top.style.top = - ALTO + "px";

		louver_top.style.zIndex = 1;
	});

	btn_1rg.addEventListener("click", function(e){

		win.classList.remove("u-fade-in");
		win.classList.add("u-fade-out");

		louver_top.classList.remove("u-fade-in");
		louver_top.classList.add("u-fade-out");

		louver_right.classList.remove("u-fade-in");
		louver_right.classList.add("u-fade-out");

		louver_left.style.height = ALTO + "px";

		louver_left.style.left = 0;

		louver_left.style.zIndex = 99;

		louver_left.removeEventListener(transitionEnd, clearHeight);
	});

	btn_1lf.addEventListener("click", function(e){

		win.classList.remove("u-fade-out");
		win.classList.add("u-fade-in");

		louver_top.classList.remove("u-fade-out");
		louver_top.classList.add("u-fade-in");

		louver_right.classList.remove("u-fade-out");
		louver_right.classList.add("u-fade-in");

		louver_left.addEventListener(transitionEnd, clearHeight, false);

		louver_left.style.left = - ANCHO + "px";

		louver_left.style.zIndex = 0;
	});

	btn_2rg.addEventListener("click", function(e){

		win.classList.remove("u-fade-out");
		win.classList.add("u-fade-in");

		louver_top.classList.remove("u-fade-out");
		louver_top.classList.add("u-fade-in");

		louver_left.classList.remove("u-fade-out");
		louver_left.classList.add("u-fade-in");

		louver_right.addEventListener(transitionEnd, clearHeight, false);

		louver_right.style.right = - ANCHO + "px";

		louver_right.style.zIndex = 0;
	});

	btn_2lf.addEventListener("click", function(e){

		win.classList.remove("u-fade-in");
		win.classList.add("u-fade-out");

		louver_top.classList.remove("u-fade-in");
		louver_top.classList.add("u-fade-out");

		louver_left.classList.remove("u-fade-in");
		louver_left.classList.add("u-fade-out");

		louver_right.style.height = ALTO + "px";

		louver_right.style.right = 0;

		louver_right.style.zIndex = 99;

		louver_right.removeEventListener(transitionEnd, clearHeight);
	});

})();