import axios from 'axios'

/**
 * responseHandler
 *
 * @param {Object} response - resp from server
 */
function responseHandler(resp) {
  const respData = resp.data
  if (respData.resultCode !== 1) {
    return Promise.reject(respData)
  }
  return respData.data
}

/**
 * get
 *
 * @param {String} url - request url
 * @param {Object} options - request options
 */
export function get(url, options = {}) {
  return axios.get(url, options)
    .then(responseHandler)
}

/**
 * post
 *
 * @param {String} url - request url
 * @param {Object} data - request data, JSON object
 * @param {Object} options - request options
 */
export function post(url, data, options = {}) {
  // Since backend only support form data post,
  // we always convert data to `application/x-www-form-urlencoded format`
  return axios.post(url, data, options)
    .then(responseHandler)
}
