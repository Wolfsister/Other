function extractJson(){

	var stringAllContrepeterie='{ "contrepeterie" : [';

	var stringOneContrepeterie="";
	var i=0; 

	$("tr").each(function(){
		var contenu = $(this).context.innerText;
		var contenuSplit=contenu.split("\n");
		if(contenuSplit.length > 1 && i>0){ //allow me to avoid first line and the one without spoonerism
			stringOneContrepeterie = '{"original" : "' + contenuSplit[0] + '", "reponse" : "' + contenuSplit[1] + '"}';	
			stringAllContrepeterie += stringOneContrepeterie + ",";
		}
		
		i++;
	});
	stringAllContrepeterie = stringAllContrepeterie.slice(0,-1); //delete last comma
	stringAllContrepeterie += "]}" ;
	var jsonAllContrepeterie = JSON.parse(stringAllContrepeterie);
	console.log(jsonAllContrepeterie);
	
	
	
	//launch download
	var url = 'data:text/json;charset=utf8,' + encodeURIComponent(JSON.stringify(jsonAllContrepeterie));
	window.open(url, '_blank');
	window.focus();

}

extractJson();