import axios from 'axios'
import { errorMessage } from './constants/text'
import { validateUrls } from './helpers'
import { pathOr } from 'ramda'
export default class httpRequest {
  /**
   * ability to get requests and return contents to url
   * @param {*} urls
   */
  requestUrls(urls) {
    // validation checking of urls are valid
    if (!urls) {
      throw new Error(errorMessage.notValidUrls)
    }

    if (!validateUrls(urls)) {
      throw new Error(errorMessage.notValidUrls)
    }

    return Promise.all(
      urls.map(async (url) => {
        return axios({ url: url })
      }),
    ).catch((error) => {
      return {
        ...error,
        message: pathOr('', ['message'], error),
        statusCode: pathOr(400, ['response', 'status'], error), // return 400 client issue
      }
    })
  }
}
