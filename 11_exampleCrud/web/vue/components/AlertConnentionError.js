// registro
Vue.component('alert-connention-error', {
    /*html*/
    template: ` 
    <div class="row mt-3 mr-3 d-flex justify-content-end">
        <div class="col-5">
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                Error en la conexion, Espere unos momentos
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    </div>
    `,
    data: function () {
        return {
            test: 'test'
        }
    }
})