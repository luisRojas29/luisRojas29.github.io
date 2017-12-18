(function(){

	const car_btn = document.getElementsByClassName('c-carousel__btn')[0];
	const items = Array.from( document.getElementsByClassName('c-carousel__item') );

	car_btn.addEventListener('click', function(e){

		for( let i=0; i<items.length; i++ ){

			if( items[i].classList.contains('is-active') ){

				if( i == items.length - 1 ){
					changeVisibility( items[i], items[0] );
				}else{
					changeVisibility( items[i], items[i+1] );
				}

				break;
			}
		}
	});

	function init(){

		items[0].classList.add('is-active');

		for( let i=1; i<items.length; i++){
			items[i].classList.add('u-hide');
		}
	}

	function changeVisibility( currentNode, nextNode ){

		currentNode.classList.toggle('is-active');
				
		currentNode.classList.toggle('u-hide');

		nextNode.classList.add('is-active');

		nextNode.classList.toggle('u-hide');
	}


	init();

})();