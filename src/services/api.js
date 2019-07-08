import axios from 'axios'

 const api = axios.create({
     baseURL: 'http://tiberio.softurbano.com:82/api/',
    //  headers: {'Content-Type': 'application/json'}
 })

 export default api