/**
 * Created by luisr on 04/06/17.
 */
(function(){

    var bd = document.body;
    var sb = document.getElementsByClassName('pinBar')[0];
    var sby = sb.offsetTop;

    if( window.innerWidth <= 480 ) {

        var winHeight = window.innerHeight;

        sb.className = 'pinBar2';

        sb.style.top = winHeight - 30 + 'px';

        sby = sb.offsetTop;

        window.addEventListener('scroll', function(){

            sb.style.top = bd.scrollTop + sby + 'px';

        });

    }else{

        window.addEventListener('scroll', function(){

            sb.style.top = bd.scrollTop + sby + 'px';

        });
    }



})();