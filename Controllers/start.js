
Sugar.Controller({

    Name:'Home',
    Title:'Home',
    Components:[
        {Name:'Landing_Features'},
        {Name:'Jumbo'},
    ],
    libraries:[
        "bootstrapJS",
        "popperJS",
    ],
}, 'Home');

Sugar.render();

Sugar.component(Landing_Features);
