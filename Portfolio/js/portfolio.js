(function(){

	const shwPrj = document.getElementsByClassName('show-project')[0];
	const prjTtl = document.getElementsByClassName('js-project__title')[0];
	const prjDsc = document.getElementsByClassName('js-portfolio__description')[0];
	const prjLnk = document.getElementsByClassName('js-portfolio__link')[0];
	const prjCar = document.getElementsByClassName('c-carousel')[0];

	const prjBtn = document.getElementsByClassName('js-show-project');

	function init(){

		let firstProject = document.getElementsByClassName('js-show-project')[0].dataset;

		buttonEventing();

		loadData(firstProject.project);
	}

	function buttonEventing(){
		for( let i = 0; i<prjBtn.length; i++ ){
			prjBtn[i].addEventListener('click', function(e){
				
				e.preventDefault();

				loadData( this.dataset.project );
			});
		}
	}

	function populatePortfolio(datos){

		prjTtl.innerHTML = datos.titulo;

		prjDsc.innerHTML = datos.descripcion;

		prjLnk.href = datos.links[0];

		imgs = datos.imgs;

		let imgList = createPortfolioCarousel`<ol class="c-carousel__items js-carousel__items">${imgs.map(function(img){return './sources/imgs' + img; })}</ol>`;

		prjCar.innerHTML = imgList;
	}

	function createPortfolioCarousel(tags, imagenes){

		let markup = tags[0];

	    for (let x = 0; x < imagenes.length; x += 1) {
	        markup += `<li class="c-carousel__item"><img alt="PortfolioImage" class="c-carousel__img js-portfolio__img"
	                    src="${imagenes[x]}" />
	                  </li>`;
	    }

	    markup += `<button class="c-carousel__btn"><i class="fa fa-eye"></i></button>`;

	    markup += tags[1];

	    return markup;
	}

	function loadData(data){

		let xhr = new XMLHttpRequest();

		let prj = 'sources/portfolio-files/' + data + '.json';

		xhr.onload = function (){
			if (xhr.status === 200) {
				populatePortfolio( JSON.parse(xhr.response) );
	    	}else{
	    		alert("There was a problem loading the portfolio projects, please try again.")
	    	}
		}

		xhr.open('GET', prj);
		xhr.send();
	}

	init();

})();