function Safety(el, msg, color){

	this.i=0;
  	
  	this.t=3;
  	
  	this.timInt;
  	
  	this.timOut;
	
	this.el = el;
	
	this.message = msg;
	
	this.color = color;

	this.lblMessage = document.createElement('div')

	this.addLabels();

	this.addSecurity();

}

Safety.prototype.addLabels = function(){

	this.lblMessage.className = "safety-message";

	this.innerHTML = "Please hold the button for 3 seconds";

	this.el.parentElement.insertBefore(this.lblMessage, this.el);
}

Safety.prototype.addSecurity = function(){

	this.el.addEventListener("mousedown", hold);

}

Safety.prototype.hold = function(){

	this.timInt = window.setInterval(showTime,1000);

    this.timOut = window.setTimeout(submitSafety,4000);
    
    alert.style.visibility = "hidden";
}

Safefy.prototype.showTime = function(){

	if(this.t==0){
      window.clearInterval(this.timInt);
      cnt.innerHTML= "Go";
      this.t=3;
    }else{
      cnt.innerHTML=t;
      this.t--;
    }

}

Safety.prototype.submitSafety = function() {
	alert.style.visibility = "initial";
}