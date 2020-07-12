 // Disparo via Ajax para o endereço do NodeMcu
	    var led_controle = function(status) {
	        var xmlhttp = new XMLHttpRequest();
	        var set_status = "http://10.0.0.9/?function=" + status; // endereço do esp8266 verificar no monitor Serial
	        xmlhttp.open("GET", set_status);
	        xmlhttp.send();
	    }
        
           // Acessa os botões e passando as nossas diretivas de ligar ou desligar o led 
	    var led = function() {
	    	var ligar = document.querySelector(".ligarLed1"); // a string ".ligarLed1" é a classe associada ao botão.
	    	    ligar.onclick = function() {
	    	    	led_controle("led1_on");
	    	    }

    	         var desligar = document.querySelector(".desligarLed1");
    	            desligar.onclick = function() {
    	    	       led_controle("led1_off");
    	            }

    	             var ligar = document.querySelector(".ligarLed2");
			    	    ligar.onclick = function() {
			    	    	led_controle("led2_on");
				      }
				      var desligar = document.querySelector(".desligarLed2");
	    	            	desligar.onclick = function() {
	    	    	       		led_controle("led2_off");
    	            	}
    	            	var ligar = document.querySelector(".ligarLed3");
				    	    	ligar.onclick = function() {
				    	    		led_controle("led3_on");
	    	   			 	}
	    	   			 	var desligar = document.querySelector(".desligarLed3");
			    	           	 desligar.onclick = function() {
			    	    	       led_controle("led3_off");
    	            		}

	    }

	    window.onload = function() {
	    	// Chama a função led
	    	led();
	    }
	  