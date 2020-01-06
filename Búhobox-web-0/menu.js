//Efectos de sonido  

var beepOne = $("#pop")[0];
$("#enlaces a")
	.mouseenter(function() {
		beepOne.play();
    });
    
var beepOne = $("#pop")[0];
$("#icons-redes a li")
    .mouseenter(function() {
        beepOne.play();
    });

var beepOne = $("#pop")[0];
$("#icons-redes-escritorio a")
    .mouseenter(function() {
        beepOne.play();
    });

    var presion = $("#clicmenu")[0];
    document.querySelector('#btn-menu').addEventListener('click', function(){
        presion.play();
    })
