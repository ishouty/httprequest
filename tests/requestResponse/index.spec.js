import httpRequest from '../../index'
const request = new httpRequest()

describe('httpRequest', () => {
  it('Should make requests to urls and return results', async () => {
    const urls = [
      'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
      'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
      'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json',
    ]

    try {
      const multipleUrlRequests = await request.requestUrls(urls)

      expect(multipleUrlRequests).toHaveLength(3)

      multipleUrlRequests.map((result) => {
        expect(result.status).toEqual(200)
        expect(result.data.data.items.length).toBeGreaterThan(0)
      })
    } catch (error) {
      throw new Error(error)
    }
  })

  it('Should return error if requests status code is 403', async () => {
    const urlsWith403 = [
      'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json843843743897',
      'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
      'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json',
    ]

    try {
      const multipleUrlRequests = await request.requestUrls(
        urlsWith403,
      )

      expect(multipleUrlRequests.message).toEqual(
        'Request failed with status code 403',
      )
      expect(multipleUrlRequests.statusCode).toEqual(403)
    } catch (error) {
      throw new Error('something wrong with the urls provided')
    }
  })

  it('Should return error code 400 if any of the urls requests are invalid', async () => {
    const urls = [
      'https://sdfsdfsdf.co.uk',
      'https://sdfsdf.co.uk',
      'https://jjk.co.uk',
    ]

    try {
      const multipleUrlRequests = await request.requestUrls(urls)
      expect(multipleUrlRequests.statusCode).toEqual(400)
    } catch (error) {
      console.log(error)
    }
  })
})
