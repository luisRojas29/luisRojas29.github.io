function ProjectsPortfolio(){
	this.projects = [];
}

ProjectsPortfolio.prototype.add = function(project){
	this.projects.push(project);
};

ProjectsPortfolio.prototype.showProject = function(index){
	let project = this.projects[index];
	project.renderHTML();
};