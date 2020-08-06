import { validateUrl, validateUrls } from '../helpers.js'
import { errorMessage } from '../text.js'

describe('helpers', () => {
  describe('validateUrls', () => {
    it('Should return true if all of the urls are valid urls', () => {
      const urls = [
        'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
        'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
        'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json',
      ]

      expect(validateUrls(urls)).toBeTruthy()
    })

    it('Should return false if any of the urls within array is invalid', () => {
      const urls = [
        'httz://validvalidurl',
        'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
        'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json',
      ]

      expect(validateUrls(urls)).toBeFalsy()
    })

    it('Show throw error if urls passed is not array', () => {
      try {
        validateUrls(38398398)
      } catch (error) {
        expect(error).toEqual(new Error(errorMessage.notValidArray))
      }

      try {
        validateUrls('string')
      } catch (error) {
        expect(error).toEqual(new Error(errorMessage.notValidArray))
      }

      try {
        validateUrls({ url: 'http://www.yahoo.co.uk' })
      } catch (error) {
        expect(error).toEqual(new Error(errorMessage.notValidArray))
      }
    })
  })

  describe('validateUrl', () => {
    it('Should return true if url is validate', () => {
      expect(
        validateUrl(
          'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
        ),
      ).toBeTruthy()
    })

    it('Should return false is url is not valid', () => {
      expect(validateUrl('httpz://notvalidurl')).toBeFalsy()
    })
  })
})
