const URL = "http://localhost:3000"
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    tasks: [],//list tasks
    task: {
      id: "",
      name: "",
      description: ""
    },
    modeEdit: false,
    service: {
      list: `${URL}/api/tasks/`,
      get: `${URL}/api/task/`,
      create: `${URL}/api/task/`,
      update: `${URL}/api/task/`,
      delete: `${URL}/api/task/`
    },
    errorConnectApi: false,
    errorMessage: "",

  },
  created() {
    this.listTasks()
  },
  methods: {
    /* functions services */
    async listTasks() {
      let options = {
        method: 'get',
        url: this.service.list,
      }
      let response = await this.consumerApi(options)
      if (response.status === 200) {
        this.tasks = response.data
        // let test = _.cloneDeep(response.data)
      }
    },
    getTask() { },
    async createAndUpdateTask(update = false) {
      this.tests()
      if (this.validaTask(false)) {
        let method = update ? "put" : "post"
        let url = update ? `${this.service.update}${this.task.id}` : this.service.create
        let options = {
          method: method,
          url: url,
          data: this.task
        }
        let response = await this.consumerApi(options)
        if (response.status === 200) {
          this.tasks = response.data
          this.listTasks()
        }
      }
      this.clearForm()
    },
    updateTask() { },
    async deleteTask(){
      let options = {
        method: 'delete',
        url: `${this.service.delete}${this.task.id}`,
      }
      let response = await this.consumerApi(options)
      if (response.status === 200) {
        this.listTasks()
      }
      this.clearForm()
    },
    /* function middleware*/
    shortenCod(cod) {
      if (cod) {
        return cod.split("-")[0]
      } else {
        return cod
      }
    },
    /* functions helpers */
    tests() {
      console.log("methods tests()");
      console.log("test service", this.service);
      console.log("test tasks", this.tasks);
      console.log("test task", this.task);
    },
    validaTask() {
      let result = true
      result.status = 200
      if (!this.task.name) {
        result = false
        this.errorMessage = "Es requerido llenar el campo Nombre"
        showModalError()
      }
      return result
    },
    clearForm() {
      this.modeEdit = false
      this.task = {
        id: "",
        name: "",
        description: ""
      }
      errorMessage = ""
    },
    async consumerApi(options) {
      let result = {}
      result.status = 400
      result.error = []
      try {
        if (options) {
          result.status = 200
          const response = await axios(options);
          result.data = response.data
          this.errorConnectApi = false
          return result
        } else {
          let error = { menssage: "error options", error: options }
          result.error.push(error)
          console.log("error", error);
        }
      } catch (error) {
        error = error.toString()
        let erroConnection = error.indexOf("Network Error")
        if(erroConnection != -1) this.errorConnectApi = true    
        let errorCatch = { menssage: "error catch", error }
        result.error.push(errorCatch)  
      }
      return result
  },
    /* functions Modals */
    modalAddEdit(form = false) {
      if (form) {
        this.task = form
        this.modeEdit = true
      }
      showModalAddEdit()// => ./helper/modalFunctions.js
    },
    modalDelete(form){
      this.task = form
      showModalDelete()// => ./helper/modalFunctions.js
    }
  }
})