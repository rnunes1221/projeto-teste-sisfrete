import { defineBoot } from '#q-app/wrappers'
import axios from 'axios'


const api = axios.create({ baseURL: 'https://api.example.com' })

export default defineBoot(({ app }) => {


  app.config.globalProperties.$axios = axios

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api, axios }
