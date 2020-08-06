const axios = require('axios')
const constants = require('./text.js')
const helpers = require('./helpers.js')
const R = require('ramda')

class httpRequest {
  /**
   * ability to get requests and return contents to url
   * @param {*} urls
   */
  requestUrls(urls) {
    // validation checking of urls are valid
    if (!urls) {
      throw new Error(constants.errorMessage.notValidUrls)
    }

    if (!helpers.validateUrls(urls)) {
      throw new Error(constants.errorMessage.notValidUrls)
    }

    return Promise.all(
      urls.map(async (url) => {
        return axios({ url: url })
      }),
    ).catch((error) => {
      return {
        ...error,
        message: R.pathOr('', ['message'], error),
        statusCode: R.pathOr(400, ['response', 'status'], error), // return 400 client issue
      }
    })
  }
}

module.exports = httpRequest
