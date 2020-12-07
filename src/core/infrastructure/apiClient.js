import axios from 'axios'

class AxiosApiClient {
  instance

  constructor(baseURL, auth = undefined, withCredentials = false) {
    this.instance = axios.create({
      baseURL,
      auth,
      withCredentials
    })
  }

  get axiosInstance() {
    return this.instance
  }

  get(path, params, options) {
    return new Promise((resolve, reject) => {
      this.instance
        .get(path, { ...options, params })
        .then(response => resolve(response.data))
        .catch(error => {
          reject(error)
        })
    })
  }

  post(path, data) {
    return new Promise((resolve, reject) => {
      this.instance
        .post(path, data)
        .then(response => resolve(response.data))
        .catch(error => {
          reject(error)
        })
    })
  }
}

export const apiClient = new AxiosApiClient('https://front-test-api.herokuapp.com/')
