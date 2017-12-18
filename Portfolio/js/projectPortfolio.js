function PrjPrt(ruta, data){

	this.titulo;
	
	this.descripcion;
	
	this.links;

	this.imgs;

	this.loadData(ruta, data, this);
}

PrjPrt.prototype.renderHTML = function(){

	let prjTtl = document.getElementsByClassName('js-project__title')[0];

	let prjDsc = document.getElementsByClassName('js-project__description')[0];

	let prjLnk = document.getElementsByClassName('js-project__link')[0];

	let prjCar = document.getElementsByClassName('c-carousel')[0];

	prjTtl.innerHTML = this.titulo;

	prjDsc.innerHTML = this.descripcion;

	prjLnk.href = this.links[0];

	let imgs = this.imgs;

	let carousel = new Carousel(imgs);

	prjCar.appendChild(carousel.render());
};

PrjPrt.prototype.loadData = function(ruta,dato, own){

	let xhr = new XMLHttpRequest();

	let prj = ruta + dato + '.json';

	xhr.onload = function (){
		if (xhr.status === 200) {
			
			let datos = JSON.parse(xhr.response);

			own.titulo = datos.titulo;

			own.descripcion = datos.descripcion;

			own.links = datos.links;

			own.imgs = datos.imgs;

    	}else{
    		alert("There was a problem loading the portfolio projects, please try again.")
    	}
	}

	xhr.open('GET', prj);
	xhr.send();
}