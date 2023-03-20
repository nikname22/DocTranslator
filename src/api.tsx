import axios from 'axios'

export default axios.create({baseURL: `http://localhost:8000`})
//export default axios.create({baseURL: `https://expressjs-prisma-production-b8cd.up.railway.app/documents`})
