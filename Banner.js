/* --- 	Important -------------------------------------------------------------------------------------------------
   This module requires JQuery UI to work properly, as the animations effects are not included.
   Created by César Martini in 08/23/2013. Feel free to use it on your projects!
   --- Importante -------------------------------------------------------------------------------------------------
   Este módulo requer JQuery UI para funcionar adequadamente, visto que os efeitos de animação não estão inclusos.
   Criado por César Martini em 23/08/2013. Sinta-se a vontade para utilizar em seus projetos!
   ---------------------------------------------------------------------------------------------------------------- */
(function($) { 
	$(document).ready(function(){
		var i = 0, j = 0; 
		var tempefei = 200;
		var intervalo = false;
		var efeitoSup = "clip", efeitoInf = "slide";
		var imgsrc = new Array();
		var linkhref = new Array();
		var img = new Array();
		var link = new Array();
		var elementos = document.getElementsByClassName('banner');
		
		if (elementos[0] != undefined) {
			img = elementos[0].getElementsByTagName('img');
			link = elementos[0].getElementsByTagName('a');
			source();
			change();
		}
		
		function source (){
			for (j=0; j<3; j++){
				imgsrc[j] = img[j].src;
				linkhref[j] = link[j].href;
			}
		}
		
		function ciclo (){
			clearTimeout(intervalo);
			intervalo = setTimeout(function(){change();},0);
		}
		
		function change (){
			if (i>=3){
				i=0;
			}
			i++;
			esconde();
			if (i==1){
				img[0].src = imgsrc[0];
				img[1].src = imgsrc[1];
				img[2].src = imgsrc[2];
				link[0].href = linkhref[0];
				link[1].href = linkhref[1];
				link[2].href = linkhref[2];
			}else if (i==2){
				img[0].src = imgsrc[1];
				img[1].src = imgsrc[2];
				img[2].src = imgsrc[0];
				link[0].href = linkhref[1];
				link[1].href = linkhref[2];
				link[2].href = linkhref[0];
			}else if (i==3){
				img[0].src = imgsrc[2];
				img[1].src = imgsrc[0];
				img[2].src = imgsrc[1];
				link[0].href = linkhref[2];
				link[1].href = linkhref[0];
				link[2].href = linkhref[1];
			}
			mostra();
			intervalo = setTimeout(function(){ciclo();},4000);
		}
		
		function mostra(){
			$(img[0]).fadeIn();
			$(img[1]).show(efeitoSup,null,tempefei);
			$(img[2]).show(efeitoInf,null,tempefei);
		}
		function esconde(){
			$(img[0]).hide(null,null,0);
			$(img[1]).hide(null,null,0);
			$(img[2]).hide(null,null,0);
		}
		
		$('.banner').mouseenter(function(){
			clearTimeout(intervalo);
			intervalo = false;
		});
		$('.banner').mouseleave(function(){
		   	if (intervalo==false){
		   		intervalo = setTimeout(function(){ciclo();},4000);
		   	}
		});
	});
})(jQuery);