
		var inp = document.getElementById('box');

        var numbers = document.querySelectorAll('.num');
        var operations = document.querySelectorAll('.operations');

        var ac = document.getElementById('ac');
		var erase = document.getElementById('erase');
        var point = document.getElementById('point');
        var equal = document.getElementById('equal');

		for(var i=0; i<numbers.length; i++){
			numbers[i].addEventListener("click", function(e){
				addToInput(this.innerHTML);
                inp.className = "resultado";
			});
		}

		for(var j=0; j<operations.length; j++){
            operations[j].addEventListener("click", function(e){
                verifyNum(this.innerHTML);
            });
        }

		ac.addEventListener("click", function(e){
		    inp.className = "resultado";
			inp.value = "";
		});

        erase.addEventListener("click", function (e) {
            inp.className = "resultado";
            eraseChar();
        });

        point.addEventListener("click", function (e) {

            verifyPoint(this.innerHTML);

        });

        equal.addEventListener("click", function (e) {
            equalTo();
        });

		function addToInput(chr){
			inp.value += chr;
		}

		function eraseChar(){
		    var str = inp.value.slice(0, inp.value.length-1);
            inp.value = str;
        }

        function equalTo(){
            var result = 0;

            if( isLastNum() ){

                if( areDot() ){

                    result = eval(inp.value);
                    result = result.toFixed(2);
                }else{
                    result = eval(inp.value);
                }

                inp.value = result;

            }else{
                inp.className = "error";
            }
        }

        function verifyPoint(point) {

            var isDot = false;

            if( isEmpty(inp.value) || isLastOpr() ){
                addToInput(point);
            }else{
                if( isLastNum(inp.value) ){
                    console.log("entra");
                    for(var i=inp.value.length-1; i>= 0; i--){

                        if( isOpr( inp.value[i] ) ){
                            for(var j=i; j<inp.value.length; j++){
                                if( inp.value[j] == "." ){
                                    isDot = true;
                                }
                            }

                            if( isDot == false ){
                                addToInput(point);
                            }

                            break;
                        }

                    }

                }
            }

        }

        function verifyNum(opr){
            if( isLastNum() || isLastParenthR() ){
                addToInput(opr);
            }
        }

        function isLastNum(){

            if(isEmpty(inp.value))
            {
                return false;
            }else{
                return isNaN( inp.value.charAt(inp.value.length -1)) ? false : true;
            }

        }

        function isOpr(str){
            var cad = "+-*/%";

            for(var i=0; i<cad.length; i++){
                if( str == cad[i] ){
                    return true;
                }
            }

            return false;
        }

        function isLastOpr(){
            var lastChar = inp.value.charAt(inp.value.length-1);
            var cad = "+-*/%";
            var band;

            if(isEmpty(inp.value))
            {
                band = false;

            }else{

                for(var j=0; j<cad.length; j++){
                    if(lastChar != cad[j]){
                        band = false;
                    }else{
                        band = true;
                        break;
                    }
                }
            }

            return band;

        }

        function areDot(){

            for(var x=0; x<inp.value.length; x++)
            {
                if( inp.value[x] == '.' ){

                    return true;
                }
            }

            return false;
        }

        function isEmpty(input) {
            if (input == "") {
                return true;
            } else {
                var nothing;
                nothing = input.split(" ").join("");

                return nothing.length == 0;
            }
        }
