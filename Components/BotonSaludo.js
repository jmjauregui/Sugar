

let BotonSaludo =  function(param){

	let _content = `
		<div class="row">
			<div class="col-12">
				<br /><br /><br />
				<center>
					<button onclick="__BotonSaludo.getDolar()"> Obtener ${param} </button>
				</center>
			</div>
		</div>
		`;
	return _content;
}


let __BotonSaludo = {

	getDolar(){
		Sugar.service({ uri:'https://mindicador.cl/api/dolar', method:'GET'});
	},

}

Sugar.component("BotonSaludo", "USD");
