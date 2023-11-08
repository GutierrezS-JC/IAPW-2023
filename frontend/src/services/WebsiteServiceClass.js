import axios from "axios";

class WebSiteService {
  constructor(isLoggedIn, tokenR) {
    let service = axios.create({ baseURL: 'http://localhost:3000' })
    this.service = service
    
    if (isLoggedIn) {
      this.service.interceptors.request.use(
        (config) => {
          const token = tokenR
          if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
          }
          return config;
        },
        (error) => Promise.reject(error)
      );
    }
  }

  getWebsites() {
    return new Promise((resolve, reject) => {
      this.service.get('/sitios').then(res => {
        resolve(res.data);
      })
        .catch(err => {
          console.log(err)
          reject(err);
        });
    })
  }

  get(id) {
    return new Promise((resolve, reject) => {
      this.service.get(`/sitios/${id}`).then(res => {
        resolve(res.data);
      })
        .catch(err => {
          reject(err)
        })
    })
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      this.service.delete(`/sitios/${id}`).then(res => {
        resolve(res.data)
      })
        .catch(err => {
          reject(err)
        })
    })
  }

  create(payload) {
    return new Promise((resolve, reject) => {
      this.service.post(`/sitios`, payload).then(res => {
        resolve(res.data)
      })
        .catch(err => {
          reject(err)
        })
    })
  }

  patch(payload, id) {
    return new Promise((resolve, reject) => {
      this.service.patch(`/sitios/${id}`, payload).then(res => {
        resolve(res.data)
      })
        .catch(err => {
          console.log(err)
          reject(err)
        })
    })
  }
}

export default WebSiteService
// export default new WebSiteService()