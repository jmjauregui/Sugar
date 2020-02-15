
let init = {
	startControler:'start',
	controllersFolder: 'Controllers',
	componentsFolder: 'Components',
	libraries:[

		{name:'bootstrapCSS', type:'css', force:true, Uri: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'},
		{name:'popperJS', type:'js', force:false, Uri: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'},
		{name:'bootstrapJS', type:'js', force:false, Uri: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js'},
		{name:'jquery', type:'js', force:true, Uri: 'https://code.jquery.com/jquery-3.4.1.slim.min.js'},
		{name: 'ionicons', type:'css', force:true, Uri:'https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css'},
	],


};

Sugar.init(init);