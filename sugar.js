const Sugar = {

	components:[],
	routers:[],
	uriParameters:[],
	renderText:'',
	objectConf:{},
	controllerSelected:{},
	thisController:{},

	init(objectConf){
		Sugar.objectConf = objectConf;
		this.prepropslibraries();
		this.urlParameters();
		(Sugar.uriParameters[0] !== "{}")? this.getMasterFile(Sugar.objectConf.controllersFolder, Sugar.uriParameters[0]): this.getMasterFile(Sugar.objectConf.controllersFolder, Sugar.objectConf.startControler);
	},

	getMasterFile(folder,file, absolute=false){
		let script = document.createElement('script');
		if (!absolute) {
			script.src = folder + "/"+ file +".js";
		}else{
			script.src = file +".js";
		}
		document.getElementsByTagName('body')[0].appendChild(script);
	},

	loadCSS(uri){
		let link = document.createElement('link');
		link.rel = "stylesheet";
		link.href = uri;
		document.getElementsByTagName('head')[0].appendChild(link);
	},

	loadJS(uri){
		let script = document.createElement('script');
		script.src = uri;
		document.getElementsByTagName('body')[0].appendChild(script);	
	},

	loadLibrary(name){
		for (let i = this.objectConf.libraries.length - 1; i >= 0; i--) {
			if (this.objectConf.libraries[i].name === name) {
				switch (this.objectConf.libraries[i].type){
					case "css":
							this.loadCSS(this.objectConf.libraries[i].Uri);
						break;

					case "js":
							this.loadJS(this.objectConf.libraries[i].Uri);
						break;

					default:
							console.error("[SUGAR ERROR] : No se a podido cargar la libreria");
						break;
				}
			}
		}
	},

	prepropslibraries(){
		for (let i = Sugar.objectConf.libraries.length - 1; i >= 0; i--) {
			if (Sugar.objectConf.libraries[i].force && Sugar.objectConf.libraries[i].type === 'css') {
				this.loadCSS(Sugar.objectConf.libraries[i].Uri);
			}

			if (Sugar.objectConf.libraries[i].force && Sugar.objectConf.libraries[i].type === 'js') {
				this.loadJS(Sugar.objectConf.libraries[i].Uri);
			}
		}
	},

	component(compo, variablesAConvertir){
		let newFNC = eval(compo);
		let a = newFNC(variablesAConvertir); 
		let parser = new DOMParser();
		document.body.append(parser.parseFromString(a, 'text/html').body.firstChild);
	},

	urlParameters(){
		  let params = {};
		  if (location.search) {
		    let parts = location.search.slice(1).split('&');
		    parts.forEach(function (part) {
		      let pair = part.split('=');
		      pair[0] = decodeURIComponent(pair[0]);
		      pair[1] = decodeURIComponent(pair[1]);
		      params[pair[0]] = (pair[1] !== 'undefined') ?
		        pair[1] : true;
		    });
		  }
		  params = JSON.stringify(params);
		  params = params.replace('{"', '');
		  params = params.replace('":true}', '');
		  params = params.split("/");
		  Sugar.uriParameters = params;
	},

	Controller(obj){
		this.controllerSelected = obj;
		document.getElementsByTagName('title')[0].innerHTML = this.controllerSelected.Title;
	},

	render(){
		for (let i = this.controllerSelected.Components.length - 1; i >= 0; i--) {
			this.getMasterFile(this.objectConf.componentsFolder,this.controllerSelected.Components[i].Name);
		}
		for (let i = this.controllerSelected.libraries.length - 1; i >= 0; i--) {
			this.loadLibrary(this.controllerSelected.libraries[i]);
		}

	},

	service(object, func = function(res){console.log(res)}) {
		fetch(object.uri, object)
		.then(res => res.json())
		.catch(error => console.error('Error:', error))
		.then(response => func(response));
	}


};

