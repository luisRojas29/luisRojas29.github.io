(function(){

	const ruta = 'sources/portfolio-files/';

	const coleccionPrjs = document.getElementsByClassName('js-show-project');

	var listaPrj = new ProjectsPortfolio();

	for (var i = 0; i < coleccionPrjs.length; i++) {

		coleccionPrjs[i].dataset.projectid = i;

		listaPrj.add( new PrjPrt( ruta, coleccionPrjs[i].dataset.project) );

		coleccionPrjs[i].addEventListener('click', function(e){
			e.preventDefault();
			listaPrj.showProject(this.dataset.projectid);
		});
	}

})();