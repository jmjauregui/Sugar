/**
 * @return {string}
 */
function Landing_Features(params) {

        let styleForTitle = `color:#925DC3; font-size:53px!important; font-weight:300;`;
        return `
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <img src="assets/img/control_version.png" class="img-fluid" alt="">
                    </div>
                    <div class="col-md-8">
                        <h3 style="${styleForTitle}">Filosofia de componentes</h3>
                        <p style="color:gray; font-size: 22px;!important; font-weight: lighter">
                            <b>SugarJS</b> 
                            Permite trabajar de manera agil, reutilizando componentes en tu sitio web, para de esta forma mejorar el proceso productivo de tu equipo, algo en tu sitio dejo de funcionar, solo quita el componente y listo!!!
                        </p>
                    </div>
                    <div class="col-12"><br><br></div>
                    <div class="col-md-12">
                        <div style="text-align: center;">
                            <h3 style="${styleForTitle}">Pensado para ser <b>simple</b></h3>
                            <p style="color:gray; font-size: 22px;!important; font-weight: lighter">
                                    
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <img src="assets/img/developer.png" class="img-fluid" alt="">
                    </div>
                    <div class="col-md-4"></div>
                    <div class="col-md-2"></div>

                    <div class="col-md-8">
                        <p style="color:gray; font-size: 22px;!important; font-weight: lighter">Con SugarJS, tu podras crear aplicaciones modulares y escalables que cumplan con los requerimientos de tus proyectos, solo debes dominar Javascript, y comunica toda tu estructura con REST</p>
                    </div>
                </div>  
            </div> 
        `;
}


Sugar.component(Landing_Features);