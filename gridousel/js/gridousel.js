function Gridousel(){

	this.datos;

	this.items = [];

	this.dots = [];
	
	this.current = 0;

	this.slides;

	this.is = document.getElementsByClassName('carousel__display')[0];

	this.dotMonitor = document.getElementsByClassName('carousel__monitor')[0];

	this.carouselDisplay = document.getElementsByClassName('carousel__display')[0];

	this.init();

};

Gridousel.prototype.init = function(){

	let self = this;

	let grilla = [];

	self.loadData('src/site.json', function(response){

		let datos = JSON.parse(response);
		
		for(var i=0 ; i<datos.sections.length; i++){

			let tmpArry = [1];

			if( datos.sections[i].hasOwnProperty('subSection') ){

				for( var j=0; j<datos.sections[i].subSection.length; j++ ){
					tmpArry.push(1);
				}

			}

			grilla.push(tmpArry);
		}

		self.createGridousel(grilla, datos);

	});
}

Gridousel.prototype.createGridousel = function(grl, datos){

	let self = this;

	self.datos = datos;

	let tmpl = ``;

	let id = 1;

	for( var i=0; i<grl.length; i++ ){
		tmpl += `
			<ul>
		`;

		for( var j=0; j<grl[i].length; j++ ){
			tmpl+= `<li class="data-slide" data-slide="${i},${j}" data-id="${id}">&#9673;</li>`
			id++;
		}

		tmpl+=`</ul>`;
	}

	this.dotMonitor.innerHTML = tmpl;

	this.slides = Array.from( document.getElementsByClassName('data-slide') );

	for(var x=0; x<self.slides.length; x++){
		this.slides[x].addEventListener('click', function(e){
			e.preventDefault();
			self.focusDot(this.getAttribute('data-id'));
			self.loadSlide(this.dataset.slide, this);
		});
	}

	this.loadSection( datos.sections[0] );
	this.focusDot(1);
}

Gridousel.prototype.focusDot = function(elemento){

	for (var i = 0; i < this.slides.length; i++) {
		this.slides[i].classList.remove('on-dot');
	}

	this.slides[elemento-1].classList.add('on-dot');
}

Gridousel.prototype.loadSlide = function(elemento, el){
	let ele = elemento.split(",");

	if( ele[1] === '0' ){
		this.loadSection( this.datos.sections[ ele[0] ] );
	}else{
		this.loadSubSection( this.datos.sections[ ele[0] ].subSection[ ele[1] - 1 ] );
	}
}


Gridousel.prototype.loadSection = function(datos){

	this.carouselDisplay.style.opacity = "0";

	let tmpl = `
			<h1>${datos.sectionTitle}</h1>
			<h5>${datos.subHeader}</h5>
			<div class="information">
				<img class="image-section" src="${datos.image.location}" alt="placeholder+image">
				<p>${datos.descriptionText}</p>
			</div>
	`;

	this.carouselDisplay.innerHTML = tmpl;

    TweenLite.to(this.carouselDisplay, .5, {
    	opacity:"1",
		ease: Power1.easeInOut,
 		delay: .5
	});

	this.imageStyle(datos);
}

Gridousel.prototype.loadSubSection = function(datos){

	this.carouselDisplay.style.marginLeft = "500px";

	let tmpl = `
			<h1>${datos.title}</h1>
			<div class="information">
				<img class="image-section" src="${datos.image}" alt="placeholder+image">
				<p>${datos.description}</p>
			</div>
	`;

	TweenLite.to(this.carouselDisplay, 1, {
		marginLeft:"0px"
	});

	this.carouselDisplay.innerHTML = tmpl;

}

Gridousel.prototype.imageStyle = function (datos){

	let imagen = document.getElementsByClassName('image-section')[0];

	imagen.style.width = datos.image.dimension[0] + "px";
	imagen.style.height = datos.image.dimension[1] + "px";
}

Gridousel.prototype.loadData = function(url, cb){

	let self = this;

	let prj = url;

	let xhr = new XMLHttpRequest();

	xhr.onload = function (){
		if (xhr.status === 200) {
			
			cb(xhr.response);

    	}else{
    		alert("There was a problem loading the files, please try again later...")
    	}
	}

	xhr.open('GET', prj);
	xhr.send();
}