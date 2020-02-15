/**
* @return {string};
*/
let Jumbo =  function(){
	return `
		<div class="jumbotron" style="background-image: url('https://i.pinimg.com/originals/56/0f/81/560f81539de62ad7f9d26bc6d548d083.jpg')">
		  	<div style="text-align: center;">
				<h1 class="display-4"><span style="font-size: 120px;">{</span><span style="color:white;">SugarJS</span><span style="font-size: 120px">}</span> </h1>
				<p class="lead"> Micro Framework para micro proyectos.</p>
				<hr class="my-4">
				<p style="color:white; font-size: 22px;!important">SugarJS ofrece una forma de trabajo modular para equipos pequeños y proyectos simples con base en Javascript.</p>
				<a class="btn btn-light btn-lg" href="?Docs" role="button">Documentación</a>
		  		<a class="btn btn-outline-light btn-lg" href="#" role="button">Descargar V1.0</a>
			</div>  
		</div>
	`;
};

Sugar.component(Jumbo);


