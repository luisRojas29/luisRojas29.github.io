(function(){

    var btnUp = document.getElementById('toUp');
	var scrollLink = document.getElementsByClassName('scroll-title');

	for( var i=0; i<scrollLink.length; i++ ) {

		scrollLink[i].addEventListener('click', function(e){
			startScrolling(this, e);
		});

	}

	window.addEventListener("scroll", function (e) {

	    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
	        btnUp.style.display = "block";
        } else {
            btnUp.style.display = "none";
        }
    });

	btnUp.addEventListener('click', function(e){

        var scrollY = 0;
        var speed = 10;

        var intervalo = setInterval(function(){

            currentY = document.body.scrollTop;
            targetY = document.body.offsetTop;

            if (currentY > targetY + speed) {
                scrollY = currentY - speed;
                window.scroll(0, scrollY);
            } else {
                clearInterval(intervalo);
            }

        }, 1);

    });

	function startScrolling(el, e) {
		e.preventDefault();

        var scrollY = 0;
        var speed = 10;
		var el_title_cls = el.dataset.scroll;
		var el_section = document.getElementsByClassName(el_title_cls)[0];
        var currentY;
        var targetY;

        var intervalo = setInterval(function(){

            currentY = document.body.scrollTop;
            targetY =el_section.offsetTop;
            console.log("currentY:" + currentY + "-----" + "targetY:" + targetY);
            console.log("scrollY:" + scrollY);
            if (currentY < targetY - speed) {
                scrollY = currentY + speed;
                window.scroll(0, scrollY);
            } else if (currentY > targetY + speed) {
                scrollY = currentY - speed;
                window.scroll(0, scrollY);
            } else {
                clearInterval(intervalo);
            }

        }, 1);


	}

})();