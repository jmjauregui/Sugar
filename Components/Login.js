/**
 * @return {string}
 */
let Login = function () {

    return `
        <div class="container">
            <div class="col-12">
                <h3>Acceso a la plataforma</h3>
                <div class="card">
                   <table class="table">
                        <tr>
                            <td>Usuario</td>
                            <td><input type="text" class="form-control form-control-sm"></td>
                        </tr>
                        <tr>
                            <td>Contraseña</td>
                            <td><input class="form-control form-control-sm" type="password"></td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div style="text-align: center;"><button class="btn btn-primary">Acceder</button></div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;
};


Sugar.component(Login);
