import httpRequest from '../index'

describe('httpRequest', () => {
  it('Should make requests to urls', async () => {
    const request = new httpRequest([
      'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
      'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
      'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json',
    ])

    const item = await request.requestUrls()
    console.log(item[0].data)
  })
})
