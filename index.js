import { errorMessage } from './constants/text'
import axios from 'axios'

export default class httpRequest {
  constructor(urls) {
    if (!urls) return false

    this.urls = urls
    if (!Array.isArray(this.urls)) {
      throw errorMessage.notValidArray
    }
  }

  requestUrls() {
    return Promise.all(
      this.urls.map(async (url) => {
        return axios.get(url)
      }),
    )
  }
}
