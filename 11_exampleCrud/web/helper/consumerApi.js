async function consumerApi(options) {
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
}