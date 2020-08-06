## FT Customer Products technical exercise

### What we expect

Write a JavaScript package that is able to:

- Fetch an array of URLs which contain JSON data
- Return their contents in a promise

When writing this package, you should consider:

- Error states
- Testing
- Documentation
- Choice of dependencies

## Features

- Javascript package, which allows to take multiple urls and returns content in promise

- Tests
- Documentation

Languages/Dependencies used

- Node
- ES6/ES5
- Babel
- Jest
- Axios
- ramda

## How to install

I also written the main class in ES6, however wanted the module to be compatible with npm so I can publish this to npm. I had issues with transpiling with import/export syntax from ES6 so reverted this back to ES5.

`npm install ishouty_httprequest_andy`

You can also download this from github

`git clone https://github.com/ishouty/ishouty_httprequest.git`

## How to use (async/await) ES6 example

```
import ishouty_httpRequest from 'ishouty_httpRequest'

  const urls = [
      'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
      'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
      'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json',
    ]

  const callRequests = async (urlsParams) => {
    return await request.requestUrls(urlsParams)
  }

  callRequests(urls)

```

## Tests

Tests are written in ES6 and transpiled via babel.

## How to run tests

`npm run test`

## How to watch tests

`npm run test:watch`

## Improvements and features

- Pass configuration object to include default features for requests such as baseUrl
- Update more test coverage
