import httpRequest from '../index'
import { errorMessage } from '../text.js'

const request = new httpRequest()

describe('httpRequest', () => {
  it('Should return error if error url are invalid', async () => {
    const urls = [
      'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
      'notvalidurl',
      'notvalidurl',
    ]

    try {
      await request.requestUrls(urls)
    } catch (error) {
      expect(error).toEqual(new Error(errorMessage.notValidUrls))
    }
  })

  it('Should throw exception if urls is empty', async () => {
    try {
      await request.requestUrls()
    } catch (error) {
      expect(error).toEqual(new Error(errorMessage.notValidUrls))
    }
  })
})
