import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'

const endpoint = process.env.VUE_APP_BASE
// fake comment because I changed base path

const apiCall = ({ url, data, method }) =>
  axios({
    method: method,
    url: endpoint + url,
    data: data
  })

export default apiCall