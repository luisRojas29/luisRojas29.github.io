function Carousel(imgs){
		
	this.imgs = imgs;

	this.carouselHTML;

	this.items;

	this.init();

}

Carousel.prototype.render = function(){
	return this.carouselHTML;
};

Carousel.prototype.clickHandler = function(e){

	e.preventDefault();

	let items = Array.from( document.getElementsByClassName('c-carousel__item') );

	for( let i=0; i<items.length; i++ ){

		if( items[i].classList.contains('is-active') ){

			if( i == items.length - 1 ){
				this.changeVisibility( items[i], items[0] );
			}else{
				this.changeVisibility( items[i], items[i+1] );
			}

			break;
		}
	}
};

Carousel.prototype.changeVisibility = function( currentNode, nextNode ){

	currentNode.classList.toggle('is-active');
			
	currentNode.classList.toggle('u-hide');

	nextNode.classList.add('is-active');

	nextNode.classList.toggle('u-hide');
}

Carousel.prototype.init = function(){
	let self = this;
	let ol = document.createElement('ol');
	
	ol.className = 'c-carousel__items js-carousel__items';
	
	let btn = document.createElement('button');
	
	btn.className = 'c-carousel__btn';
	
	btn.addEventListener('click', function(e){
		self.clickHandler(e);
	});

	let i = document.createElement('i');

	i.className = 'fa fa-hand-pointer-o';

	btn.appendChild(i);

	for (let x = 0; x < this.imgs.length; x += 1) {

		let li = document.createElement('li');
		
		li.className = 'c-carousel__item';

		if( x == 0 ){
			li.classList.add('is-active');
		}else{
			li.classList.add('u-hide');
		}

		let img = document.createElement('img');
		
		img.className = 'c-carousel__img js-portfolio__img';
		
		img.src = './sources/imgs/' + this.imgs[x];

		li.appendChild(img);

		ol.appendChild(li);
    }

    ol.appendChild(btn);

    this.carouselHTML = ol;
};