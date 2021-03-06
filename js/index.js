/*
Nombre: Get_Datos
Descripcion: Nos permite obtener los datos de una consulta. 
*/
function Get_Datos()
{
	var myHeaders = new Headers();
	myHeaders.append("Cookie", "__cfduid=d6bc4acbffeee677e41675a0dec5803581596328462; 1bb11e6f2dacb1c375d150942d6da0cd=sd6256n7f21g8jt8bh3q8fe2p3");

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
	redirect: 'follow'
	};

	fetch("https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal&list[limit]=0&access_token=92f4623b8fb1c1b0b4a9a9aef05ae006835e338e", requestOptions)
		.then(response => response.text())
		.then(result => Mostrar_Datos(result))
		.catch(error => console.log('error', error));
}

/*
Nombre: Mostrar_Datos
Descripcion: Carga los datos a una tabla 
Variables: Datos => JSON con los datos del get.  
*/
function Mostrar_Datos(Datos)
{
	var Data= JSON.parse(Datos);
	var Objeto = Data._embedded;
	var tablaE = document.getElementById("Uroot");
	tablaE.parentNode.removeChild(tablaE);
	var ul=document.createElement('ul');
	ul.id = "Uroot";
	var Padre = document.getElementById("MArbol")
	for (var i in Objeto.item){
		var actual = Objeto.item[i];
		var uno = document.createElement("li");
		var textnode = document.createTextNode("Nombre: "+actual.name+"\t\tid: "+actual.id);
		uno.appendChild(textnode);
		ul.appendChild(uno);
	}
	Padre.appendChild(ul);
}
/*
Nombre: Cargar_Dato
Descripcion: Funcion que permite cargar los 10 datos. 
*/
function Cargar_Dato()
{
	var fecha = new Date();
	var S_fecha=fecha.getDate() + "-" + (fecha.getMonth() +1) + "-" + fecha.getFullYear();
	for (var i = 0; i < 10; i++) {
		var nombre = "Sergio_201213282_"+(i+1)+"_"+S_fecha;
		Cargar(nombre);
	}
	alert("Datos cargados");
}

/*
Nombre: Cargar
Descripcion: Permite enviar un dato y cargarlo. 
Variables: Nombre=> nombre del dato a añadir. 
*/
function Cargar(nombre)
{
	var myHeaders = new Headers();
	myHeaders.append("Cookie", "__cfduid=d6bc4acbffeee677e41675a0dec5803581596328462;1bb11e6f2dacb1c375d150942d6da0cd=sj6730452oebkh9lqtfhmgettd");
	var formdata = new FormData();
	formdata.append("name", nombre);
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};
	fetch("https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal&f", requestOptions)
	.then(response => response.text())
	.then(result => console.log(result))
	.catch(error => console.log('error', error));
}

/*
	var myHeaders = new Headers();
	myHeaders.append("Cookie", "__cfduid=d6bc4acbffeee677e41675a0dec5803581596328462; 1bb11e6f2dacb1c375d150942d6da0cd=sj6730452oebkh9lqtfhmgettd");

	var requestOptions = {
	method: 'GET',
	headers: myHeaders,
	redirect: 'follow'
	};

	fetch("https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal&access_token=92f4623b8fb1c1b0b4a9a9aef05ae006835e338e", requestOptions)
	.then(response => response.text())
	.then(result => Mostrar_Datos(result))
	.catch(error => console.log('error', error));
	*/