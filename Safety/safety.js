(function(){

	this.Safety = function(msg, color){

		this.i=0;
	  	
	  	this.t=3;
	  	
	  	this.timInt;
	  	
	  	this.timOut;
		
		this.el = document.getElementsByClassName('safety')[0];

		this.lblMessage = document.createElement('div');

		let defaults = {
			label: false,
	      	btnIn: "Hold for 3 seconds",
	      	btnOut:"Submitted!!!",
	      	lblIn: "Hold the button for 3 seconds, please",
	      	lblOut: "Form submitted"
	    }

	    if (arguments[0] && typeof arguments[0] === "object") {
	      this.options = extendDefaults(defaults, arguments[0]);
	    }else{
	    	this.options = defaults;
	    }

	    init.call(this);
	}

	init = function(){

		if( this.options.label ){
			addLabels.call(this);	
		}

		this.el.innerHTML = this.options.btnIn;

		addSecurity.call(this);
	}

	addLabels = function(){

		this.lblMessage.className = "safety-message";

		this.lblMessage.innerHTML = this.options.lblIn;

		this.el.parentElement.insertBefore(this.lblMessage, this.el);
	}

	addSecurity = function(){

		let that = this;

		this.el.addEventListener( 'click', function(e){
			e.preventDefault();
		})

		this.el.addEventListener( 'mousedown', function(){
			hold.call(that);	
		});

		this.el.addEventListener( 'mouseup', function(){
			release.call(that);	
		});

	}

	hold = function( ){

		let _= this;
		
		this.lblMessage.className += ' cntdwn-message';

		this.timInt = window.setInterval(function(){
			showTime.call(_);
		},1000);
	}

	release = function( ){
		if( this.t > 1 ){
			window.clearInterval(this.timInt);
			this.t = 3;
		}
	}

	showTime = function(){
		if(this.t==1){
	      window.clearInterval(this.timInt);
	      this.t=3;
	      submitSafety.call(this);
	    }else{
	      	this.t--;
	    }
	}

	submitSafety = function() {

		let _ = this;

		let formulario = document.getElementsByClassName('safety__form')[0];
		
		let xhr = new XMLHttpRequest();
		 
		xhr.onload = function () {
		    if (xhr.status === 200) {
		    	console.log(_);
		    	_.lblMessage.innerHTML = _.options.lblOut;
		    	_.el.innerHTML = _.options.btnOut;
		        console.log(JSON.parse(xhr.response).data);
		    }
		};
		 
		xhr.open('GET', formulario.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.send();
	}

    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
          if (properties.hasOwnProperty(property)) {
            source[property] = properties[property];
          }
        }
        return source;
	}
}());